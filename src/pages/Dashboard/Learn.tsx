import { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Header from '../../components/Dashboard/Header';
import {
  Dialog,
  DialogContent,
} from '../../components/ui/dialog';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
}

const books: Book[] = [
  {
    id: '1',
    title: 'The Intelligent Investor',
    description: 'Learn the basics of investing and how to get started.',
    price: '₦4,000',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/86d0a8e98948ed88f21bd422e176b4e75d1d1c4d?width=260',
    available: true,
  },
  {
    id: '2',
    title: 'The Intelligent Investor',
    description: 'Learn the basics of investing and how to get started.',
    price: '₦4,000',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/0583e1e0bbc410ddc33e45d6f19fa3737df998c4?width=450',
    available: true,
  },
  {
    id: '3',
    title: 'The Intelligent Investor',
    description: 'Learn the basics of investing and how to get started.',
    price: '₦4,000',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/84f720fbaa4e78bc5b3459bd1abc0d57cee51d40?width=268',
    available: true,
  },
  {
    id: '4',
    title: 'The Intelligent Investor',
    description: 'Learn the basics of investing and how to get started.',
    price: '₦4,000',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/1196dd1f2ed2910e62a7283ab0ee85b8f36db9ed?width=292',
    available: true,
  },
];

const lessons = [
  {
    id: '1',
    title: 'Lesson 1: Understanding Investments',
    description: 'Unlock the basics of investing and learn how to make your money work for you.',
    locked: false,
  },
  {
    id: '2',
    title: 'Lesson 2: Risk and Reward Basics',
    description: 'Explore the relationship between risk and reward, and how to assess your risk tolerance.',
    locked: false,
  },
  {
    id: '3',
    title: 'Lesson 3: Building a Portfolio',
    description: 'Learn how to construct a diversified portfolio that aligns with your financial goals.',
    locked: false,
  },
  {
    id: '4',
    title: 'Lesson 4: Common Mistakes to Avoid',
    description: 'Identify common pitfalls that new investors often encounter and how to avoid them.',
    locked: false,
  },
];

const learningModules = [
  { title: 'Investment Basics', subtitle: 'Learn the fundamentals of investing' },
  { title: 'First-Time Investor', subtitle: 'Learn the fundamentals of investing' },
  { title: 'Mastering the Market', subtitle: 'Learn the fundamentals of investing' },
  { title: 'Investment Strategies', subtitle: 'Learn the fundamentals of investing' },
];

const videoHub = [
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest...',
    views: '20,000 views',
    time: '2 days ago',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292',
  },
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest...',
    views: '20,000 views',
    time: '2 days ago',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/d3fee261d14aec36ff563cf2589332af573f74f4?width=292',
  },
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest...',
    views: '20,000 views',
    time: '2 days ago',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/d3fee261d14aec36ff563cf2589332af573f74f4?width=292',
  },
];

export default function Learn() {
  const [showBooksModal, setShowBooksModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <Header />

      <main className="lg:ml-20 pt-20 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column - Lessons */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                      (Beginner's Guide) Module 1 Progress
                    </p>
                    <p className="text-[#0D1C1C] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                      25%
                    </p>
                  </div>
                  <div className="w-full h-2 bg-[#D1E8E8] rounded">
                    <div className="w-1/4 h-2 bg-[#1AE5CF] rounded"></div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-[#121712] font-['Gill_Sans_MT',sans-serif] text-[22px] font-bold leading-[23px] mb-6">
                    Lesson 1: Understanding Investments
                  </h2>

                  <div className="space-y-4">
                    {lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 rounded-3xl bg-white border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#F0F5F2] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.5 7.5H16.5V5.25C16.5 2.76472 14.4853 0.75 12 0.75C9.51472 0.75 7.5 2.76472 7.5 5.25V7.5H4.5C3.67157 7.5 3 8.17157 3 9V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V9C21 8.17157 20.3284 7.5 19.5 7.5ZM9 5.25C9 3.59315 10.3431 2.25 12 2.25C13.6569 2.25 15 3.59315 15 5.25V7.5H9V5.25ZM19.5 19.5H4.5V9H19.5V19.5ZM13.125 14.25C13.125 14.8713 12.6213 15.375 12 15.375C11.3787 15.375 10.875 14.8713 10.875 14.25C10.875 13.6287 11.3787 13.125 12 13.125C12.6213 13.125 13.125 13.6287 13.125 14.25Z"
                                fill="#030712"
                              />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                              {lesson.title}
                            </p>
                            <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                              {lesson.description}
                            </p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-[#F0F5F2] text-[#030712] rounded-xl font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-[#E1EBE8] transition-colors">
                          Start Lesson
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced Investment Strategies Banner */}
              <div className="bg-white rounded-2xl p-4 border-4 border-[rgba(245,245,245,0.2)] shadow-[0_5px_10px_0_rgba(210,186,152,0.49)]">
                <div className="flex items-start justify-between gap-4 rounded-xl">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                        Advanced Investment Strategies
                      </p>
                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                        Take your investment knowledge to the next level with our premium learning modules.
                      </p>
                    </div>
                    <button className="px-4 h-8 bg-[#008080] text-[#F5F5F5] rounded-lg font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-[#006666] transition-colors w-fit">
                      Explore Modules
                    </button>
                  </div>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/43ef86931ab2b225618401d9cdea575ffc19d6fd?width=508"
                    alt="Advanced learning"
                    className="h-[138px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Learning Modules & Videos */}
            <div className="space-y-6">
              {/* Learning Modules */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col gap-3 max-h-[392px] overflow-y-auto">
                  {learningModules.map((module, index) => (
                    <button
                      key={index}
                      onClick={() => setShowBooksModal(true)}
                      className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-[76px] h-[59px] bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/c197d050d6780b0bdd8d4c43a7b77648d005a931?width=152"
                          alt={module.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                          {module.title}
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          {module.subtitle}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[rgba(3,7,18,0.6)]" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Hub */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col gap-3 max-h-[392px] overflow-y-auto">
                  {videoHub.map((video, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl"
                    >
                      <div className="w-[76px] h-[59px] bg-gray-200 rounded flex-shrink-0 overflow-hidden relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M10.5338 15.6872L15.4583 12.54C15.6655 12.4055 15.7691 12.2247 15.7691 11.9977C15.7691 11.7709 15.6655 11.5912 15.4583 11.4585L10.5338 8.31125C10.3265 8.16592 10.1089 8.15508 9.88109 8.27875C9.65325 8.40258 9.53934 8.59367 9.53934 8.852V15.1405C9.53934 15.4047 9.65325 15.5982 9.88109 15.721C10.1089 15.8438 10.3265 15.8326 10.5338 15.6872ZM12.0008 22.1487C10.6098 22.1487 9.297 21.8831 8.06234 21.3517C6.82784 20.8204 5.74959 20.0938 4.82759 19.1718C3.90559 18.2498 3.17892 17.1718 2.64759 15.9378C2.11625 14.7038 1.85059 13.3912 1.85059 12C1.85059 10.5923 2.11625 9.27117 2.64759 8.0365C3.17892 6.802 3.90525 5.72783 4.82659 4.814C5.74792 3.9 6.82575 3.1765 8.06009 2.6435C9.29442 2.11033 10.6073 1.84375 11.9988 1.84375C13.4068 1.84375 14.7284 2.11017 15.9636 2.643C17.1986 3.17583 18.2728 3.89892 19.1863 4.81225C20.1 5.72558 20.8233 6.79958 21.3561 8.03425C21.8891 9.26892 22.1556 10.5906 22.1556 11.9992C22.1556 13.3909 21.889 14.704 21.3558 15.9385C20.8228 17.173 20.0993 18.251 19.1853 19.1725C18.2715 20.094 17.1976 20.8204 15.9636 21.3517C14.7296 21.8831 13.4087 22.1487 12.0008 22.1487ZM12.0001 20.4455C14.3508 20.4455 16.3462 19.6226 17.9863 17.9767C19.6263 16.3307 20.4463 14.3382 20.4463 11.9992C20.4463 9.64858 19.6263 7.65317 17.9863 6.013C16.3462 4.373 14.3498 3.553 11.9971 3.553C9.66109 3.553 7.66984 4.373 6.02334 6.013C4.377 7.65317 3.55384 9.64958 3.55384 12.0022C3.55384 14.3382 4.37675 16.3295 6.02259 17.976C7.66859 19.6223 9.66109 20.4455 12.0001 20.4455Z"
                              fill="#F5F5F5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                          {video.title}
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          {video.description}
                          <br />
                          {video.views} - {video.time}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[rgba(3,7,18,0.6)]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Books Modal */}
      <Dialog open={showBooksModal} onOpenChange={setShowBooksModal}>
        <DialogContent className="sm:max-w-[1440px] max-h-[90vh] bg-[#F5F5F5] p-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => setShowBooksModal(false)}
              className="w-11 h-11 flex items-center justify-center rounded-2xl border-2 border-[rgba(3,7,18,0.2)] hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-[rgba(3,7,18,0.2)]" />
            </button>

            <div className="bg-white rounded-2xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[...books, ...books].map((book, index) => (
                  <div key={`${book.id}-${index}`} className="flex flex-col gap-4">
                    <div className="h-[234px] border border-[rgba(3,7,18,0.2)] bg-white rounded overflow-hidden relative">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-contain"
                      />
                      {book.available && (
                        <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#EDA312] rounded-lg">
                          <span className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                            Available
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-sm font-bold leading-[21px]">
                          {book.title}
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          {book.description}
                        </p>
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-5">
                          {book.price}
                        </p>
                      </div>
                      <button className="px-2.5 py-1 bg-[#008080] text-[#F5F5F5] rounded-lg font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-[#006666] transition-colors">
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
