import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Types
export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
  isDuplicate?: boolean; // New flag for duplicate entries
  code?: string; // Error code from backend
}

export interface NewsletterSubscriberPayload {
  email: string;
  asset_class: string;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

// API Client Class
export class ApiClient {
  private client: AxiosInstance;
  private baseURL: string;

  constructor(baseURL?: string) {
    this.baseURL = baseURL || import.meta.env.REACT_APP_API_BASE_URL || 'https://api.growtt.com';
    
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request Interceptor
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      const { status, data } = error.response;
      const message = (data as any)?.message || (data as any)?.error || 'An error occurred';
      const code = (data as any)?.code;
      
      // Check for duplicate entry indicators
      const isDuplicate = this.checkIfDuplicateError(status, message, code);
      
      return {
        message: isDuplicate 
          ? 'This email has already been submitted. We\'ll keep you updated!' 
          : message,
        status,
        errors: (data as any)?.errors,
        isDuplicate,
        code,
      };
    } else if (error.request) {
      return {
        message: 'Network error. Please check your connection.',
        status: 0,
        isDuplicate: false,
      };
    } else {
      return {
        message: error.message || 'An unexpected error occurred',
        isDuplicate: false,
      };
    }
  }

  private checkIfDuplicateError(status: number, message: string, code?: string): boolean {
    // Check status code
    if (status === 409) return true; // Conflict status
    
    // Check error code
    if (code && (
      code.includes('DUPLICATE') ||
      code.includes('ALREADY_EXISTS') ||
      code.includes('CONFLICT')
    )) {
      return true;
    }
    
    // Check message content
    const lowerMessage = message.toLowerCase();
    const duplicateKeywords = [
      'already subscribed',
      'already exists',
      'duplicate',
      'already registered',
      'email already',
      'already submitted',
      'unique constraint',
      'already in use'
    ];
    
    return duplicateKeywords.some(keyword => lowerMessage.includes(keyword));
  }

  private async request<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.request(config);
      return {
        data: response.data,
        message: (response.data as any)?.message,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  }

  // Newsletter API
  async addNewsletterSubscriber(payload: NewsletterSubscriberPayload): Promise<ApiResponse> {
    return this.request({
      method: 'POST',
      url: '/newsletter/add-subscribers/',
      data: payload,
    });
  }

  // Check if email already exists (optional - if your backend supports this)
  async checkEmailExists(email: string): Promise<boolean> {
    try {
      const response = await this.request({
        method: 'GET',
        url: `/newsletter/check-email/${encodeURIComponent(email)}`,
      });
      return (response.data as any)?.exists || false;
    } catch (error) {
      // If endpoint doesn't exist, return false
      return false;
    }
  }
}

// Create and export singleton instance
export const apiClient = new ApiClient();