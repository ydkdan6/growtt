import { useState } from "react";
import HeaderNav from "../components/header";
import { Check, Loader2, AlertCircle, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FrAeA98ebJX1iHEnOmAYDE?mode=gi_t";

const essentials = [
  {
    title: "01 — Confidentiality: What You See Here Stays Here.",
    description:
      "You must not share anything you encounter on the Beta Platform — features, design, content, or roadmap details — with anyone outside the programme, on social media, in WhatsApp groups, on LinkedIn, or anywhere else. This includes screenshots, screen recordings, descriptions of unreleased features, and forwarded materials of any kind.",
  },
  {
    title: "02 — No Screenshots. No Recordings. Full Stop.",
    description:
      "Taking screenshots or recordings of the Beta Platform and sharing them, even in private chats or small groups, is a direct breach of this Agreement. We take this seriously — it's one of the fastest ways to lose your beta access and face legal consequences under Nigerian law and this contract.",
  },
  {
    title: "03 — Nothing Here Is Financial Advice. Not One Word.",
    description:
      "Every feature, insight, AI output, simulated portfolio result, and market commentary on the Beta Platform is for educational and testing purposes only. None of it is financial advice, investment advice, or a recommendation to buy or sell anything. Do not make any financial decision based on what you see here.",
  },
  {
    title: "04 — Your Feedback Belongs to Growtt.",
    description:
      "Any idea, suggestion, bug report, observation, or recommendation you share with us during the programme becomes Growtt's property automatically. We are not obligated to credit, compensate, or acknowledge any specific contribution. Your participation is voluntary and unpaid.",
  },
  {
    title: "05 — We Can Remove You at Any Time, Without Reason.",
    description:
      "Growtt reserves the right to revoke your beta access at any time, with or without notice, and without giving a reason. This is standard for any private beta programme. Removal does not release you from your confidentiality obligations — those remain binding for two years after your participation ends.",
  },
  {
    title: "06 — No Pay. No Equity. No Guaranteed Future Access.",
    description:
      "Beta participation earns you an additional 100 seeds upon final successful launch. However, there is no financial compensation, no equity or shares in Growtt, no commission, and no guaranteed access to the platform when it launches publicly. Any early-access benefit offered is entirely at Growtt's discretion and is not a contractual commitment.",
  },
  {
    title: "07 — The Full Agreement Applies. This Is a Summary, Not a Substitute.",
    description:
      "By clicking 'I Accept', you agree to the complete Beta Tester & Confidentiality Agreement and the Growtt Master Terms of Service, not just the points above. Please read both in full. The full documents govern in all cases — if anything here conflicts with the full agreement, the full agreement wins.",
  },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h4 className="font-semibold mb-2">{title}</h4>
    <div className="space-y-2">{children}</div>
  </div>
);

export default function BetaTesting() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showFullTerms, setShowFullTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !agreed) {
      setError("Please fill in your details and accept the Beta Programme Essentials to continue.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // TODO: submit to the dedicated beta application endpoint once it's provided.
      const application = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        facebook: facebook.trim(),
        twitter: twitter.trim(),
        instagram: instagram.trim(),
        linkedin: linkedin.trim(),
        tiktok: tiktok.trim(),
      };
      console.log("Beta application ready to submit:", application);

      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit your application. Please try again.");
      console.error("Beta application error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />

      <section className="px-4 md:px-10 lg:px-20 mt-12 md:mt-[68px] py-[40px] md:py-[20px]">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#00A4A4]/10 text-[#008080] text-sm font-semibold font-['Gill_Sans_MT',sans-serif]">
            Private &amp; Confidential | 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight mb-4">
            <span className="text-[#008080]">Join the </span>
            <span className="text-[#FF9801]">Growtt Beta </span>
            <span className="text-[#008080]">Testing Programme</span>
          </h1>
          <p className="text-base sm:text-lg text-[#008080]/70 font-['Gill_Sans_MT',sans-serif]">
            Get early access to the Growtt platform before public launch, help shape the
            product with your feedback, and earn 100 bonus seeds when we go live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Application Form */}
          <div className="order-2 lg:order-1">
            <div className="border-[6px] border-[#00A4A4] rounded-[24px] p-6 sm:p-8 bg-white">
              {submitted ? (
                <div className="text-center space-y-6 py-8 px-2 animate-in fade-in duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#008080] font-['Gill_Sans_MT',sans-serif]">
                      Congratulations!
                    </h3>
                    <p className="text-base text-[#008080]/80 font-['Gill_Sans_MT',sans-serif] max-w-md mx-auto">
                      Your application to the Growtt Beta Testing Programme has been received.
                      Join the official beta testers' group chat to get started and connect
                      with the rest of the cohort.
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF9800] hover:bg-[#FF9800]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] text-base font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join the Beta Testers Group Chat
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-1">
                    Apply to become a Beta Tester
                  </h2>
                  <p className="text-sm text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] mb-6">
                    Tell us who you are and we'll send you access details for the Beta Platform.
                  </p>

                  {error && (
                    <div className="mb-6 px-4 py-3 rounded-lg text-sm font-['Gill_Sans_MT',sans-serif] flex items-start gap-2 bg-red-50 border border-red-200 text-red-700">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        className="w-full h-12 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-base placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full h-12 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-base placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={loading}
                        className="w-full h-12 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-base placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-1">
                        Social Media Usernames
                      </p>
                      <p className="text-xs text-[#008080]/50 font-['Gill_Sans_MT',sans-serif] mb-3">
                        Optional — share the handles you're comfortable with.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Facebook username"
                          value={facebook}
                          onChange={(e) => setFacebook(e.target.value)}
                          disabled={loading}
                          className="w-full h-11 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <input
                          type="text"
                          placeholder="X (Twitter) username"
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
                          disabled={loading}
                          className="w-full h-11 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <input
                          type="text"
                          placeholder="Instagram username"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                          disabled={loading}
                          className="w-full h-11 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <input
                          type="text"
                          placeholder="LinkedIn username"
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
                          disabled={loading}
                          className="w-full h-11 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <input
                          type="text"
                          placeholder="TikTok username"
                          value={tiktok}
                          onChange={(e) => setTiktok(e.target.value)}
                          disabled={loading}
                          className="w-full h-11 px-4 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm placeholder:text-black/40 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed sm:col-span-2"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-3 text-sm text-[#008080]/80 font-['Gill_Sans_MT',sans-serif] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        disabled={loading}
                        className="mt-1 w-4 h-4 accent-[#00A4A4]"
                        required
                      />
                      <span>
                        I have read the Beta Programme Essentials and agree to the full{" "}
                        <button
                          type="button"
                          onClick={() => setShowFullTerms(true)}
                          className="underline hover:text-[#00A4A4] transition-colors"
                        >
                          Beta Tester &amp; Confidentiality Agreement
                        </button>{" "}
                        and Growtt Master Terms of Service.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 px-5 bg-[#FF9800] hover:bg-[#FF9800]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] text-base font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* 7 Essentials */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-2">
              Beta Programme Essentials
            </h2>
            <p className="text-sm text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] mb-6">
              Here are the seven things that matter most — read this before you apply.
            </p>
            <div className="space-y-4">
              {essentials.map((item) => (
                <div
                  key={item.title}
                  className="border border-[#00A4A4]/20 bg-[#00A4A4]/5 rounded-xl p-4"
                >
                  <h3 className="font-semibold text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#008080]/70 font-['Gill_Sans_MT',sans-serif]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Beta Tester & Confidentiality Agreement (truncated, expandable) */}
        <div className="max-w-4xl mx-auto mt-16 text-justify">
          <h2 className="text-2xl font-bold text-[#008080] font-['Gill_Sans_MT',sans-serif] mb-1 text-left">
            Beta Tester &amp; Confidentiality Agreement
          </h2>
          <p className="text-sm text-gray-600 mb-1 text-left">
            Business Name: Growtt Alternative Investment Solutions Limited
          </p>
          <p className="text-sm text-gray-600 mb-1 text-left">Last Revised: Friday 5th June 2026</p>
          <p className="text-sm text-gray-600 mb-6 text-left">
            Classification: Beta Tester Confidentiality Agreement
          </p>

          <p className="mb-4">
            This Beta Tester &amp; Confidentiality Agreement (this "Agreement") is entered into
            between Growtt Alternative Investment Solutions Limited, a company incorporated under
            the laws of the Federal Republic of Nigeria ("Growtt", "we", "us", "our") and the
            individual who accepts this Agreement electronically ("Beta Tester", "you", "your").
            Growtt is developing a financial education, advisory enablement, and
            investment-readiness platform and wishes to invite a limited, selected cohort of
            individuals to test and provide feedback on the Beta Platform prior to its public
            launch...
          </p>

          {!showFullTerms && (
            <button
              type="button"
              onClick={() => setShowFullTerms(true)}
              className="inline-flex items-center gap-1 text-[#008080] font-semibold underline hover:text-[#00A4A4] transition-colors"
            >
              Read more <ChevronDown className="w-4 h-4" />
            </button>
          )}

          {showFullTerms && (
            <div className="mt-2 animate-in fade-in duration-300">
              <Section title="1. Definitions">
                <p>In this Agreement, the following terms have the meanings given to them below:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Beta Platform</strong> means the pre-release, unfinished version of the
                    Growtt platform, including all features, modules, tools, interfaces, content,
                    AI outputs, gamification systems, workflows, and data, made available to the
                    Beta Tester under this Agreement.
                  </li>
                  <li>
                    <strong>Beta Programme</strong> means the private, invitation-only programme
                    through which Growtt makes the Beta Platform available to selected testers
                    prior to public launch.
                  </li>
                  <li>
                    <strong>Confidential Information</strong> has the meaning given in Section 3.1
                    of this Agreement.
                  </li>
                  <li>
                    <strong>Feedback</strong> means any reports, suggestions, observations, bug
                    reports, ideas, recommendations, or other communications provided by the Beta
                    Tester to Growtt relating to the Beta Platform or Growtt's products and
                    services.
                  </li>
                  <li>
                    <strong>Intellectual Property Rights</strong> means all patents, copyrights,
                    design rights, trade marks, trade secrets, database rights, know-how, and all
                    other intellectual property rights, whether registered or unregistered, in any
                    jurisdiction.
                  </li>
                  <li>
                    <strong>Master Terms of Service</strong> means the Growtt Master Terms of
                    Service, available at{" "}
                    <a href="/terms" className="underline hover:text-[#00A4A4]">
                      growtt.com/terms
                    </a>
                    , as amended from time to time, which are incorporated into this Agreement by
                    reference.
                  </li>
                  <li>
                    <strong>Beta Period</strong> means the duration of the Beta Tester's
                    participation in the Beta Programme, commencing on the date of acceptance of
                    this Agreement and ending on the earlier of: (i) the date Growtt terminates the
                    Beta Tester's access; (ii) the date the Beta Tester withdraws from the Beta
                    Programme; or (iii) the date Growtt closes the Beta Programme.
                  </li>
                  <li>
                    <strong>Permitted Purpose</strong> means testing and evaluating the Beta
                    Platform for the sole purpose of providing Feedback to Growtt, as set out in
                    this Agreement.
                  </li>
                </ul>
              </Section>

              <Section title="2. Confidentiality & Non-Disclosure">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  You must not post screenshots, recordings, descriptions of unreleased features,
                  or any other Beta Platform content to social media, blogs, forums, messaging
                  groups, or any other public or semi-public channel, including WhatsApp groups,
                  Telegram channels, Twitter/X, LinkedIn, or similar platforms.
                </div>

                <SubSection title="2.1 What Is Confidential Information">
                  <p>
                    "Confidential Information" means all information, data, materials, and content
                    disclosed to or accessed by the Beta Tester in connection with the Beta
                    Programme that is not in the public domain, including without limitation:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The existence, nature, features, design, functionality, and architecture of the Beta Platform;</li>
                    <li>Unreleased product features, roadmap items, and future development plans;</li>
                    <li>User interface design, user experience flows, and visual design elements;</li>
                    <li>Proprietary educational content, gamification systems, and learning frameworks;</li>
                    <li>AI models, AI outputs generated on the Beta Platform, and underlying analytical methodologies;</li>
                    <li>Business strategy, commercial plans, partnership discussions, and financial information;</li>
                    <li>Data relating to other Beta Testers or platform users;</li>
                    <li>Bug reports, technical vulnerabilities, platform performance data, and any internal communications shared with the Beta Tester;</li>
                    <li>Any information that Growtt designates as confidential or that a reasonable person in the Beta Tester's position would understand to be confidential given the nature of the information and the circumstances of disclosure.</li>
                  </ul>
                </SubSection>

                <SubSection title="2.2 Confidentiality Obligations">
                  <p>The Beta Tester agrees, for the duration of the Beta Period and for two (2) years following its conclusion, to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Keep all Confidential Information strictly confidential and not disclose it to any third party without Growtt's prior written consent;</li>
                    <li>Use Confidential Information solely for the Permitted Purpose and for no other purpose;</li>
                    <li>Not reproduce, copy, distribute, publish, or otherwise disseminate Confidential Information in any form, whether digitally, in print, verbally, or through social media;</li>
                    <li>Not use Confidential Information to create competing products, tools, or services;</li>
                    <li>Take all reasonable precautions to prevent unauthorised access to or disclosure of Confidential Information;</li>
                    <li>Immediately notify Growtt upon becoming aware of any actual or suspected unauthorised disclosure of Confidential Information.</li>
                  </ul>
                </SubSection>

                <SubSection title="2.3 What Is Not Confidential">
                  <p>The confidentiality obligations in this section do not apply to information that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Was already in the public domain at the time of disclosure through no act or omission of the Beta Tester;</li>
                    <li>Becomes part of the public domain after disclosure through no act or omission of the Beta Tester;</li>
                    <li>Was already known to the Beta Tester at the time of disclosure, as evidenced by written records predating this Agreement;</li>
                    <li>Is independently developed by the Beta Tester without reference to or use of the Confidential Information;</li>
                    <li>Is required to be disclosed by applicable law, court order, or regulatory authority, provided that the Beta Tester gives Growtt prompt prior written notice (where legally permissible) and reasonably cooperates with Growtt in seeking a protective order.</li>
                  </ul>
                </SubSection>

                <SubSection title="2.4 Proportionate Scope of NDA">
                  <p>For the avoidance of doubt, the Beta Tester is not prohibited from:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Disclosing in general terms that they are participating in a fintech or financial education platform beta (without describing features, UI, or content);</li>
                    <li>Sharing their general experience or satisfaction with a beta programme in general terms, provided no Confidential Information is disclosed.</li>
                  </ul>
                </SubSection>
              </Section>

              <Section title="3. Access & Participation">
                <SubSection title="3.1 Grant of Access">
                  <p>
                    Subject to the Beta Tester's compliance with this Agreement, Growtt grants the
                    Beta Tester a limited, non-exclusive, non-transferable, revocable licence to
                    access and use the Beta Platform solely for the Permitted Purpose during the
                    Beta Period. This licence may not be sublicensed, transferred, or shared with
                    any other person.
                  </p>
                </SubSection>
                <SubSection title="3.2 Revocation of Access">
                  <p>
                    Growtt reserves the absolute right to revoke, restrict, or suspend the Beta
                    Tester's access to the Beta Platform at any time, with or without notice, and
                    without providing any reason. Revocation of access does not affect any
                    obligations under this Agreement that have already arisen, including
                    confidentiality obligations.
                  </p>
                </SubSection>
                <SubSection title="3.3 No Right to Continued Access">
                  <p>
                    Participation in the Beta Programme confers no right to continued access to the
                    Beta Platform, access to the launched Platform, any future subscription,
                    preferential pricing, or any other benefit beyond what is expressly stated in
                    this Agreement. Growtt makes no commitment to launch the platform within any
                    timeframe or at all.
                  </p>
                </SubSection>
                <SubSection title="3.4 No Compensation or Equity">
                  <p>Participation in the Beta Programme is voluntary. The Beta Tester acknowledges and agrees that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Beta participation does not entitle the Beta Tester to any form of financial compensation, payment, equity, revenue share, commission, or any other economic benefit;</li>
                    <li>Feedback provided by the Beta Tester does not constitute paid work or services;</li>
                    <li>Growtt has no obligation to implement, acknowledge, credit, or compensate the Beta Tester for any Feedback provided;</li>
                    <li>Any goodwill benefit (such as early access upon launch or acknowledgement) is provided entirely at Growtt's discretion and creates no contractual obligation.</li>
                  </ul>
                </SubSection>
              </Section>

              <Section title="4. Conduct & Use of the Beta Platform">
                <SubSection title="4.1 Permitted Use Only">
                  <p>
                    The Beta Tester agrees to use the Beta Platform solely for the Permitted
                    Purpose. The Beta Tester shall not use the Beta Platform for any personal
                    financial transaction, commercial activity, or purpose other than testing and
                    providing Feedback.
                  </p>
                </SubSection>
                <SubSection title="4.2 Good Faith Testing">
                  <p>The Beta Tester agrees to engage with the Beta Platform in good faith, providing honest, constructive, and accurate Feedback. The Beta Tester will make reasonable efforts to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Explore the features made available to them during the Beta Period;</li>
                    <li>Report bugs, errors, and unexpected behaviours through the designated feedback mechanism;</li>
                    <li>Respond to Growtt's feedback requests, surveys, or check-in communications within a reasonable time;</li>
                    <li>Notify Growtt promptly of any security vulnerability discovered during testing.</li>
                  </ul>
                </SubSection>
                <SubSection title="4.3 Prohibited Conduct">
                  <div className="bg-red-50 border border-red-200 rounded p-4 mb-2">
                    PROHIBITED: Attempting to reverse engineer, decompile, disassemble, or
                    otherwise extract source code or proprietary methodologies from the Beta
                    Platform.
                  </div>
                  <p>In addition to the prohibitions set out in the Master Terms of Service (Section 10.2), Beta Testers are strictly prohibited from:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Using automated tools, bots, or scripts to access or test the Beta Platform without Growtt's prior written consent;</li>
                    <li>Deliberately corrupting, stress-testing, or attempting to compromise the Beta Platform's infrastructure without express authorisation;</li>
                    <li>Accessing any data, user accounts, or system areas beyond those made available to the Beta Tester;</li>
                    <li>Using the Beta Platform to process, store, or transmit real financial transactions or real personal financial data;</li>
                    <li>Sharing access credentials or the Beta Platform URL with any person not authorised by Growtt;</li>
                    <li>Using Feedback sessions, communications with Growtt staff, or any Beta Programme interaction to solicit investment, employment, or commercial arrangements from Growtt;</li>
                    <li>Reproducing, copying, or distributing any Beta Platform content, educational materials, or AI outputs outside the Beta Platform.</li>
                  </ul>
                </SubSection>
                <SubSection title="4.4 No Reliance on Beta Outputs">
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                    IMPORTANT: The Beta Platform is unfinished, experimental, and may produce
                    incomplete, inaccurate, or unexpected results. Beta Testers must not make any
                    financial, investment, or commercial decisions based on information or outputs
                    encountered on the Beta Platform.
                  </div>
                </SubSection>
                <SubSection title="4.5 Responsible Disclosure">
                  <p>If the Beta Tester discovers a security vulnerability, data exposure, or any other material technical issue during the Beta Period, they agree to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Report it to Growtt immediately and exclusively through the designated contact channel;</li>
                    <li>Not disclose the vulnerability to any third party, public forum, or media outlet;</li>
                    <li>Cooperate with Growtt in diagnosing and resolving the issue;</li>
                    <li>Not exploit the vulnerability for any purpose.</li>
                  </ul>
                  <p>Growtt treats responsible disclosure seriously and will acknowledge all valid security reports received in good faith.</p>
                </SubSection>
              </Section>

              <Section title="5. Feedback & Intellectual Property">
                <SubSection title="5.1 Feedback Ownership">
                  <p>
                    The Beta Tester agrees that all Feedback provided to Growtt — including bug
                    reports, feature suggestions, usability observations, product ideas, written
                    responses, survey answers, and verbal feedback captured in any interview or
                    session — is and shall remain the exclusive property of Growtt Alternative
                    Investment Solutions Limited. By providing Feedback, the Beta Tester:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Assigns to Growtt, with immediate effect, all Intellectual Property Rights in the Feedback;</li>
                    <li>Waives any moral rights in the Feedback to the fullest extent permitted by law;</li>
                    <li>Acknowledges that Growtt may use, develop, commercialise, or incorporate Feedback into its products in any way, without restriction;</li>
                    <li>Accepts that no compensation, credit, or acknowledgement is owed in connection with any Feedback provided.</li>
                  </ul>
                </SubSection>
                <SubSection title="5.2 Platform Intellectual Property">
                  <p>
                    The Beta Tester acknowledges that all Intellectual Property Rights in the Beta
                    Platform, including its design, architecture, content, educational frameworks,
                    gamification systems, AI models, brand, and all other elements, vest
                    exclusively in Growtt Alternative Investment Solutions Limited. Nothing in this
                    Agreement transfers any ownership interest in the Beta Platform to the Beta
                    Tester.
                  </p>
                </SubSection>
                <SubSection title="5.3 No Competing Use">
                  <p>
                    The Beta Tester agrees not to use any Confidential Information, Feedback
                    sessions, product insights, or knowledge obtained through participation in the
                    Beta Programme to develop, assist in developing, or contribute to any product
                    or service that competes with Growtt, during the Beta Period and for twelve
                    (12) months thereafter.
                  </p>
                </SubSection>
              </Section>

              <Section title="6. No Warranties">
                <SubSection title="6.1 Provided 'As Is'">
                  <p>The Beta Platform is provided strictly on an "as is" and "as available" basis. Growtt makes no representation or warranty of any kind, express or implied, regarding the Beta Platform, including without limitation:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>That it will operate without errors, bugs, interruptions, or data loss;</li>
                    <li>That its features, content, or outputs are accurate, complete, or reliable;</li>
                    <li>That it is fit for any particular purpose;</li>
                    <li>That it will be available at any specific time or for any specific duration;</li>
                    <li>That any feature, module, or functionality currently available will remain available in the launched platform.</li>
                  </ul>
                </SubSection>
              </Section>

              <Section title="7. Risk Disclosures & Liability">
                <SubSection title="7.1 — 7.2 No Financial Reliance">
                  <p>The Beta Tester expressly acknowledges that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>No content, tool, AI output, simulated result, market commentary, or educational material encountered on the Beta Platform constitutes financial advice, investment advice, or any form of regulated professional advice;</li>
                    <li>Simulated portfolio results, leader board positions, and demo investment outcomes are entirely fictional and do not represent achievable real-world returns;</li>
                    <li>The Beta Tester will not make any financial decision, investment, or commitment based on information encountered on the Beta Platform.</li>
                  </ul>
                </SubSection>
                <SubSection title="7.3 Limitation of Liability">
                  <p>
                    To the maximum extent permitted by applicable Nigerian law, Growtt shall not be
                    liable to the Beta Tester for any loss, damage, cost, or expense of any kind
                    arising from or in connection with: access to or use of the Beta Platform;
                    errors, bugs, interruptions, or data loss on the Beta Platform; any decision
                    made in reliance on Beta Platform content or outputs; revocation of Beta
                    access; or any changes to or discontinuation of the Beta Programme. Where
                    liability cannot be fully excluded, Growtt's aggregate liability to the Beta
                    Tester under this Agreement shall not exceed Five Thousand Nigerian Naira (NGN
                    5,000).
                  </p>
                </SubSection>
              </Section>

              <Section title="8. Term & Termination">
                <SubSection title="8.1 Beta Period">
                  <p>
                    This Agreement commences on the date of electronic acceptance and remains in
                    effect until the end of the Beta Period. The confidentiality obligations in
                    Section 3 and the intellectual property provisions in Section 6 survive
                    termination of this Agreement and remain binding for the periods specified
                    therein.
                  </p>
                </SubSection>
                <SubSection title="8.2 Withdrawal by Beta Tester">
                  <p>
                    The Beta Tester may withdraw from the Beta Programme at any time by notifying
                    Growtt in writing to the designated contact address. Withdrawal takes effect
                    upon Growtt's receipt of the notice. Withdrawal does not release the Beta
                    Tester from confidentiality obligations already incurred.
                  </p>
                </SubSection>
                <SubSection title="8.3 Termination by Growtt">
                  <p>Growtt may terminate this Agreement and revoke the Beta Tester's access immediately, with or without notice, in the event of:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Any breach of this Agreement or the Master Terms of Service;</li>
                    <li>Any suspected or confirmed unauthorised disclosure of Confidential Information;</li>
                    <li>Any conduct that poses a risk to the Beta Platform, other Beta Testers, Growtt's business, or third parties;</li>
                    <li>Growtt's decision to close, pause, or restructure the Beta Programme;</li>
                    <li>Any other reason at Growtt's sole and absolute discretion.</li>
                  </ul>
                </SubSection>
                <SubSection title="8.4 Consequences of Termination">
                  <p>Upon termination or expiry of the Beta Period:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>All access to the Beta Platform will be immediately revoked;</li>
                    <li>The Beta Tester must comply with Section 3.5 (return and deletion of Confidential Information);</li>
                    <li>All post-termination obligations, including confidentiality and IP provisions, remain in full force.</li>
                  </ul>
                </SubSection>
              </Section>

              <Section title="9. Legal Provisions">
                <SubSection title="9.1 Governing Law">
                  <p>
                    This Agreement is governed by and shall be construed in accordance with the
                    laws of the Federal Republic of Nigeria, without reference to conflict of laws
                    principles.
                  </p>
                </SubSection>
                <SubSection title="9.2 Dispute Resolution">
                  <p>
                    Any dispute arising out of or in connection with this Agreement shall be
                    resolved in accordance with the dispute resolution framework set out in Section
                    20 of the Master Terms of Service (informal resolution, followed by mediation,
                    and thereafter litigation in the courts of Nigeria with venue in Lagos or
                    Abuja). The parties agree to attempt in good faith to resolve any dispute
                    informally within fourteen (14) days before escalating to formal proceedings.
                  </p>
                </SubSection>
                <SubSection title="9.3 Injunctive Relief">
                  <p>
                    The Beta Tester acknowledges that a breach of the confidentiality obligations
                    in Section 3, or the intellectual property provisions in Section 6, would cause
                    Growtt irreparable harm for which monetary damages would be an inadequate
                    remedy. Accordingly, Growtt shall be entitled to seek injunctive relief or
                    other equitable remedies from a court of competent jurisdiction without the
                    requirement to post bond or other security, and without prejudice to any other
                    rights and remedies available.
                  </p>
                </SubSection>
              </Section>

              <Section title="10. General Provisions">
                <SubSection title="10.1 Entire Agreement">
                  <p>
                    This Agreement, together with the Growtt Master Terms of Service incorporated
                    by reference, constitutes the entire agreement between the parties in relation
                    to the Beta Programme and supersedes all prior communications, representations,
                    and understandings relating to its subject matter.
                  </p>
                </SubSection>
                <SubSection title="10.2 Severability">
                  <p>
                    If any provision of this Agreement is held to be invalid or unenforceable, that
                    provision shall be severed and the remainder of the Agreement shall continue in
                    full force and effect.
                  </p>
                </SubSection>
                <SubSection title="10.3 No Waiver">
                  <p>
                    Growtt's failure to enforce any provision of this Agreement at any time shall
                    not constitute a waiver of its rights to enforce that provision or any other
                    provision in the future.
                  </p>
                </SubSection>
                <SubSection title="10.4 Assignment">
                  <p>
                    The Beta Tester may not assign, transfer, or delegate their rights or
                    obligations under this Agreement. Growtt may assign this Agreement to any
                    affiliate or successor entity.
                  </p>
                </SubSection>
                <SubSection title="10.5 Electronic Acceptance">
                  <p>
                    Electronic acceptance of this Agreement, whether by clicking 'I Accept',
                    ticking a checkbox, or submitting the Beta Application Form, constitutes a
                    legally valid and binding signature under applicable Nigerian law governing
                    electronic transactions, including the Cybercrimes (Prohibition, Prevention,
                    Etc.) Act 2015. A timestamped record of acceptance will be retained by Growtt.
                  </p>
                </SubSection>
                <SubSection title="10.6 Amendments">
                  <p>
                    Growtt reserves the right to amend this Agreement at any time during the Beta
                    Period. Material amendments will be communicated to the Beta Tester by email or
                    in-platform notification. Continued use of the Beta Platform following
                    notification of an amendment constitutes acceptance of the amended terms.
                  </p>
                </SubSection>
                <SubSection title="10.7 Contact">
                  <p>
                    All notices, Feedback submissions, security disclosures, and other
                    communications under this Agreement should be directed to:
                  </p>
                  <p className="font-semibold">
                    Growtt Alternative Investment Solutions Limited | info@growtt.com
                  </p>
                </SubSection>
              </Section>

              <p className="mb-4">
                By accepting this Agreement electronically, the Beta Tester confirms that they
                have: read and understood this Beta Tester &amp; Confidentiality Agreement in its
                entirety; read and understood the{" "}
                <a href="/terms" className="underline hover:text-[#00A4A4]">
                  Growtt Master Terms of Service
                </a>
                ; not been pressured, misled, or otherwise improperly induced into accepting this
                Agreement; have full legal capacity to enter into a binding contract under
                Nigerian law; and have accepted this Agreement voluntarily and of their own free
                will.
              </p>

              <button
                type="button"
                onClick={() => setShowFullTerms(false)}
                className="inline-flex items-center gap-1 text-[#008080] font-semibold underline hover:text-[#00A4A4] transition-colors"
              >
                Show less <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-8">
            © 2026 Growtt Alternative Investment Solutions Ltd.
          </p>
        </div>
      </section>
    </div>
  );
}
