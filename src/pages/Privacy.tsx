import React, { useState } from "react";
import HeaderNav from "../components/header";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  const handleUnsubscribe = (e) => {
    e.preventDefault();
    // Handle unsubscribe logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setShowModal(false);
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />
      <section className="px-4 md:px-10 py-[40px] md:py-[20px] lg:px-20 mt-12 md:mt-[68px] md:mb-12 text-justify">
        GROWTT PRIVACY POLICY
        <br />
        Growtt Alternative Investment Solutions Limited (the "Company") is
        committed to maintaining robust privacy protections for its users. Our
        Privacy Policy ("Privacy Policy") is designed to help you understand how
        we collect, use and safeguard the information you provide to us and to
        assist you in making informed decisions when using our Service. For
        purposes of this Agreement, "Site" refers to the Company's website,
        which can be accessed at www.growtt.com or through our mobile
        application. "Service" refers to the Company's services accessed via the
        Site, in which users can sign up to carry out investments and also
        connect with a broker through our broker connect feature. The terms
        "we," "us," and "our" refer to the Company. "You" refers to you, as a
        user of our Site or our Service. By accessing our Site or our Service,
        you accept our Privacy Policy and Terms of Use, and you consent to our
        collection, storage, use and disclosure of your Personal Information as
        described in this Privacy Policy.
        <br />
        <br />
        INFORMATION WE COLLECT
        <br />
        We collect "Non-Personal Information" and "Personal Information."
        Non-Personal Information includes information that cannot be used to
        personally identify you, such as anonymous usage data, general
        demographic information we may collect, referring/exit pages and URLs,
        platform types, preferences you submit and preferences that are
        generated based on the data you submit and number of clicks. Personal
        Information includes but not limited to your email, date of birth,
        contact information, etc, which you submit to us through the
        registration process at the Site. Information collected via Technology
        <br />
        To activate the Service, you do not need to submit any Personal
        Information other than your email address. To use the Service
        thereafter, you do need to submit further Personal Information. However,
        in an effort to improve the quality of the Service, we track information
        provided to us by your browser or by our software application when you
        view or use the Service, such as the website you came from (known as the
        "referring URL"), the type of browser you use, the device from which you
        connected to the Service, the time and date of access, and other
        information that does not personally identify you. We track this
        information using cookies, or small text files which include an
        anonymous unique identifier. Cookies are sent to a user's browser from
        our servers and are stored on the user's computer hard drive. Sending a
        cookie to a user's browser enables us to collect non-Personal
        information about that user and keep a record of the user's preferences
        when utilizing our services, both on an individual and aggregate basis.
        For example, the Company may use cookies to collect the following
        information: 
        <div className="my-6 space-y-6">
          <div>
            <h4 className="font-semibold mb-3">1. User Preferences & Settings</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Theme preference (light/dark mode)</li>
              <li>Language selection</li>
              <li>Timezone</li>
              <li>Font size or display density</li>
              <li>Measurement units (metric/imperial)</li>
              <li>UI layout preferences</li>
              <li>Accessibility settings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">2. Authentication & Session</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Session identifier (token)</li>
              <li>User ID (encrypted/hashed)</li>
              <li>Login status/remember me flag</li>
              <li>Last login timestamp</li>
              <li>Authentication state</li>
              <li>Multi-factor authentication status</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">3. Analytics & Tracking</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>First visit timestamp</li>
              <li>Visit count</li>
              <li>Last visit date</li>
              <li>Referral source</li>
              <li>Campaign IDs (UTM parameters)</li>
              <li>A/B testing group assignment</li>
              <li>Feature flag exposure</li>
            </ul>
          </div>
        </div>
         The Company
        may use both persistent and session cookies; persistent cookies remain
        on your computer after you close your session and until you delete them,
        while session cookies expire when you close your browser. For example,
        we store a persistent cookie to track your login preferences and theme settings to enhance your user experience across sessions. Information you provide us
        by registering for an account
        <br />
        In addition to the information provided automatically by your browser
        when you visit the Site, to become a subscriber to the Service you will
        need to create a personal profile. You can create a profile by
        registering with the Service and entering your email address, and
        creating a user name and a password. By registering, you are authorizing
        us to collect, store and use your email address in accordance with this
        Privacy Policy.
        <br />
        Children's Privacy
        <br />
        <br />
        The Site and the Service are not directed to anyone under the age of 13.
        The Site does not knowingly collect or solicit information from anyone
        under the age of 13, or allow anyone under the age of 13 to sign up for
        the Service. In the event that we learn that we have gathered personal
        information from anyone under the age of 13 without the consent of a
        parent or guardian, we will delete that information as soon as possible.
        If you believe we have collected such information, please contact us at
        info@growtt.com
        <br />
        <br />
        HOW WE USE AND SHARE INFORMATION
        <br />
        Personal Information:
        <br />
        Except as otherwise stated in this Privacy Policy, we do not sell,
        trade, rent or otherwise share for marketing purposes your Personal
        Information with third parties without your consent. We do share
        Personal Information with vendors who are performing services for the
        Company, such as the servers for our email communications who are
        provided access to user's email address for purposes of sending emails
        from us. Those vendors use your Personal Information only at our
        direction and in accordance with our Privacy Policy In general, the
        Personal Information you provide to us is used to help us communicate
        with you. For example, we use Personal Information to contact users in
        response to questions, solicit feedback from users, provide technical
        support, and inform users about promotional offers We may share Personal
        Information with outside parties if we have a good-faith belief that
        access, use, preservation or disclosure of the information is reasonably
        necessary to meet any applicable legal process or enforceable
        governmental request; to enforce applicable Terms of Service, including
        investigation of potential violations; address fraud, security or
        technical concerns; or to protect against harm to the rights, property,
        or safety of our users or the public as required or permitted by law.
        <br />
        <br />
        Non-Personal Information:
        <br />
        <br />
        In general, we use Non-Personal Information to help us improve the
        Service and customize the user experience. We also aggregate
        Non-Personal Information in order to track trends and analyze use
        patterns on the Site. This Privacy Policy does not limit in any way our
        use or disclosure of Non-Personal Information and we reserve the right
        to use and disclose such Non-Personal Information to our partners,
        advertisers and other third parties at our discretion. In the event we
        undergo a business transaction such as a merger, acquisition by another
        company, or sale of all or a portion of our assets, your Personal
        Information may be among the assets transferred. You acknowledge and
        consent that such transfers may occur and are permitted by this Privacy
        Policy, and that any acquirer of our assets may continue to process your
        Personal Information as set forth in this Privacy Policy. If our
        information practices change at any time in the future, we will post the
        policy changes to the Site so that you may opt out of the new
        information practices. We suggest that you check the Site periodically
        if you are concerned about how your information is used.
        <br />
        <br />
        HOW WE PROTECT INFORMATION
        <br />
        We implement security measures designed to protect your information from
        unauthorized access. Your account is protected by your account password
        and we urge you to take steps to keep your personal information safe by
        not disclosing your password and by logging out of your account after
        each use. We further protect your information from potential security
        breaches by implementing certain technological security measures
        including encryption, firewalls and secure socket layer technology.
        However, these measures do not guarantee that your information will not
        be accessed, disclosed, altered or destroyed by breach of such firewalls
        and secure server software. By using our Service, you acknowledge that
        you understand and agree to assume these risks.
        <br />
        <br />
        YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION
        <br />
        You have the right at any time to prevent us from contacting you for
        marketing purposes. When we send a promotional communication to a user,
        the user can opt out of further promotional communications by following
        the unsubscribe instructions provided in each promotional e-mail. You
        can also indicate that you do not wish to receive marketing
        communications from us in the Account Settings section. Please note that notwithstanding the
        promotional preferences you indicate by either
        <br />
        unsubscribing or opting out by clicking {" "} <button 
          onClick={() => navigate("/unsubscribe")}
          className="text-[#008080] underline hover:text-blue-800 cursor-pointer"
        >
          here
        </button>, we may continue to send you administrative emails including, for
        example, periodic updates to our Privacy Policy.
        <br />
        <br />
        
        LINKS TO OTHER WEBSITES
        <br />
        As part of the Service, we may provide links to or compatibility with
        other websites or applications. However, we are not responsible for the
        privacy practices employed by those websites or the information or
        content they contain. This Privacy Policy applies solely to information
        collected by us through the Site and the Service. Therefore, this
        Privacy Policy does not apply to your use of a third-party website
        accessed by selecting a link on our Site or via our Service. To the
        extent that you access or use the Service through or on another website
        or application, then the privacy policy of that other website or
        application will
        <br />
        apply to your access or use of that site or application. We encourage
        our users to read the privacy statements of other websites before
        proceeding to use them.
        <br />
        <br />
        CHANGES TO OUR PRIVACY POLICY
        <br />
        The Company reserves the right to change this policy and our Terms of
        Service at any time. We will notify you of significant changes to our
        Privacy Policy by sending a notice to the primary email address
        specified in your account or by placing a prominent notice on our site.
        Significant changes will go into effect 30 days following such
        notification. Non-material changes or clarifications will take effect
        immediately. You should periodically check the Site and this privacy
        page for updates.
        <br />
        <br />
        CONTACT US
        <br />
        If you have any questions regarding this Privacy Policy or the practices
        of this Site, please contact us by sending an email to info@growtt.com
        Last Updated: This Privacy Policy was last updated on 08/12/2025.
      </section>

      {/* Unsubscribe Modal */}
      {/* {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-semibold mb-3">Unsubscribe from Marketing Communications</h3>
            <p className="text-gray-700 mb-4">
              If you no longer wish to receive promotional emails, newsletters, or marketing communications from Growtt, 
              please enter your email address below and click "Unsubscribe". You will still receive important account-related 
              and transactional emails as required for the operation of your account.
            </p>
            
            {submitted ? (
              <div className="p-4 bg-green-100 text-green-800 rounded">
                Thank you. Your unsubscribe request has been processed successfully.
              </div>
            ) : (
              <form onSubmit={handleUnsubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-[#008080] text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Unsubscribe 
                </button>
              </form>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Privacy;