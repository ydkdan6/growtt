import React from "react";
import HeaderNav from "../components/header";

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

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderNav />
      <section className="px-4 md:px-10 py-[40px] md:py-[20px] lg:px-20 mt-12 md:mt-[68px] md:mb-12 text-justify">
        <h1 className="text-2xl font-bold mb-1">
          Growtt Alternative Investment Solutions Ltd — Terms of Service
        </h1>
        <p className="text-sm text-gray-600 mb-1">
          Business Name: Growtt Alternative Investment Solutions Limited
        </p>
        <p className="text-sm text-gray-600 mb-1">Last Revised: Friday 5th June 2026</p>
        <p className="text-sm text-gray-600 mb-8">Classification: Acceptance of Terms</p>

        <Section title="SECTION 1: INTRODUCTION & ACCEPTANCE OF TERMS">
          <SubSection title="1. Introduction & Acceptance of Terms">
            <p>
              These Terms of Service ("Terms", "Agreement") constitute a legally binding
              agreement between you ("User", "you", "your") and Growtt Alternative
              Investment Solutions Limited, a company incorporated under the laws of the
              Federal Republic of Nigeria ("Growtt", "Company", "we", "us", "our"),
              governing your access to and use of the Growtt platform, applications, APIs,
              tools, content, and all related services (collectively, the "Platform").
            </p>
          </SubSection>

          <SubSection title="1.1 Appointment & Contractual Relationship">
            <p>
              By accessing, registering on, or using any part of the Platform, you
              expressly acknowledge that you have read, understood, and agree to be
              legally bound by these Terms, the Privacy Policy, and all other policies
              incorporated by reference herein. Your continued use of the Platform
              following any amendment to these Terms constitutes ongoing acceptance of
              the amended Terms.
            </p>
            <p>
              These Terms create a binding contractual relationship between you and
              Growtt. If you do not agree to these Terms in their entirety, you must
              immediately discontinue use of the Platform.
            </p>
          </SubSection>

          <SubSection title="1.2 Definitions">
            <p>
              Unless the context otherwise requires, the following defined terms shall
              have the meanings ascribed to them throughout this Agreement:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>"Platform"</strong> means the Growtt website, mobile applications,
                web applications, APIs, tools, dashboards, and all related digital
                environments and services operated by Growtt Alternative Investment
                Solutions Limited.
              </li>
              <li>
                <strong>"User"</strong> means any individual, guardian acting on behalf of
                a minor, business entity, or organisation that accesses or registers on
                the Platform.
              </li>
              <li>
                <strong>"Adult User"</strong> means a User who is eighteen (18) years of
                age or older.
              </li>
              <li>
                <strong>"Minor User"</strong> means a User who is under eighteen (18)
                years of age at the time of account registration.
              </li>
              <li>
                <strong>"Guardian"</strong> means a legal parent, court-appointed
                guardian, or other individual with legal parental responsibility for a
                Minor User.
              </li>
              <li>
                <strong>"Content"</strong> means any text, data, images, graphics,
                videos, educational materials, market information, analytics,
                AI-generated insights, gamification outputs, leaderboard data, rankings,
                badges, or other information made available on or through the Platform.
              </li>
              <li>
                <strong>"Educational Content"</strong> means financial literacy modules,
                investment education resources, market intelligence publications,
                simulations, tutorials, courses, quizzes, gamified learning tools, and
                related educational material provided on the Platform.
              </li>
              <li>
                <strong>"Demo Portfolio"</strong> means a simulated, fictitious portfolio
                used exclusively for educational and training purposes, which does not
                represent or involve real financial instruments, real capital, or real
                investment activity.
              </li>
              <li>
                <strong>"Third-Party Provider"</strong> means any external financial
                institution, brokerage platform, payment processor, data feed provider,
                API vendor, or other independent third party whose services are
                accessible through or connected to the Platform.
              </li>
              <li>
                <strong>"AI Tools"</strong> means any artificial intelligence, machine
                learning, natural language processing, or algorithmic analytical features
                embedded in or accessible through the Platform.
              </li>
              <li>
                <strong>"Gamification Elements"</strong> means badges, stars, points,
                levels, leaderboard rankings, challenge completions, reward
                notifications, and other engagement mechanics incorporated into the
                Platform.
              </li>
              <li>
                <strong>"Premium Services"</strong> means paid subscription tiers,
                premium content modules, Growtt Vault features, and other enhanced
                services available for a fee.
              </li>
              <li>
                <strong>"KYC/AML"</strong> means Know Your Customer and Anti-Money
                Laundering procedures required by applicable law and Growtt's internal
                compliance framework.
              </li>
              <li>
                <strong>"Regulatory Body"</strong> means the Securities and Exchange
                Commission of Nigeria (SEC), the Central Bank of Nigeria (CBN), the
                Federal Competition and Consumer Protection Commission (FCCPC), and any
                other competent governmental or regulatory authority.
              </li>
              <li>
                <strong>"Beta Features"</strong> means any Platform features, tools,
                modules, or functionalities made available to users in an experimental,
                pilot, or pre-release state, clearly designated as "Beta", "Preview", or
                "Experimental" by Growtt.
              </li>
            </ul>
          </SubSection>

          <SubSection title="1.3 Binding Agreement">
            <p>
              By completing the registration process, clicking "I Agree", accessing any
              authenticated area of the Platform, or otherwise manifesting your assent to
              these Terms, you form a legally binding contract with Growtt. This Agreement
              shall be enforceable to the fullest extent permitted by applicable law.
              Electronic acceptance constitutes a valid and binding signature under the
              Cybercrimes (Prohibition, Prevention, Etc.) Act 2015 and applicable Nigerian
              law governing electronic transactions.
            </p>
          </SubSection>

          <SubSection title="1.4 Eligibility">
            <p>To register as a User of the Platform, you must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Be at least thirteen (13) years of age (for Minor Accounts, subject to
                the Minor Account Supplemental Terms in Section 4);
              </li>
              <li>
                Have full legal capacity to enter into a binding contract, or, in the
                case of a Minor User, have a Guardian who accepts these Terms on your
                behalf;
              </li>
              <li>
                Not be a person barred from receiving services under applicable Nigerian
                law or the laws of any other applicable jurisdiction;
              </li>
              <li>
                Not have a previously terminated Growtt account as a result of a
                violation of these Terms;
              </li>
              <li>Provide accurate, truthful, and complete registration information; and</li>
              <li>
                Comply with all applicable laws, regulations, and rules governing your use
                of the Platform.
              </li>
            </ul>
          </SubSection>

          <SubSection title="1.5 Jurisdictional Limitations">
            <p>
              The Platform is operated by Growtt Alternative Investment Solutions Limited
              from the Federal Republic of Nigeria. Growtt makes no representation that
              the Platform or its Content is appropriate, lawful, or available in any
              jurisdiction outside Nigeria. Users accessing the Platform from other
              jurisdictions do so at their own initiative and are solely responsible for
              compliance with their local laws.
            </p>
            <p>
              Growtt expressly reserves the right to restrict or deny access to Users in
              any jurisdiction where Growtt determines, at its sole discretion, that
              providing services may expose Growtt to regulatory, legal, reputational, or
              compliance risk. Nothing in these Terms shall be construed as Growtt
              subjecting itself to the laws, courts, or regulatory frameworks of any
              jurisdiction other than Nigeria, except where mandatory legal provisions of
              another jurisdiction expressly apply.
            </p>
          </SubSection>

          <SubSection title="1.6 Amendments to Terms">
            <p>
              Growtt reserves the right to modify, update, or replace these Terms at any
              time at its sole discretion. Material amendments will be communicated to
              registered Users via email notification, in-Platform alert, or both, no
              fewer than fourteen (14) days prior to the effective date of the change,
              unless the change is required immediately by law or regulation, in which
              case it shall take effect upon publication.
            </p>
            <p>
              Your continued use of the Platform after the effective date of any
              amendment constitutes your irrevocable acceptance of the amended Terms. If
              you do not agree to any amendment, your sole remedy is to discontinue use of
              the Platform and request account closure in accordance with Section 17.
            </p>
          </SubSection>
        </Section>

        <Section title="2. Nature of Growtt Services">
          <p>
            This section sets out the legal nature and boundaries of the services
            provided by Growtt. Understanding the nature of the Platform is fundamental
            to your relationship with Growtt and underpins the legal protections and
            limitations described throughout these Terms.
          </p>

          <SubSection title="2.1 What Growtt Is">
            <p>
              Growtt is a financial education, advisory enablement, investment-readiness,
              and capital-access facilitation platform. Growtt provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Financial Education Services:</strong> structured educational
                content, courses, modules, quizzes, and learning pathways designed to
                improve Users' financial literacy, investment knowledge, and economic
                decision-making capabilities;
              </li>
              <li>
                <strong>Advisory Enablement:</strong> Educational tools, frameworks, and
                informational resources intended to help Users better understand
                financial concepts and prepare for engagement with independent
                professional advisers. Where applicable, Users may be introduced to or
                connected with independent third-party professionals who operate
                separately from Growtt and remain solely responsible for any advice they
                provide.
              </li>
              <li>
                <strong>Market Insights:</strong> Curated, third-party sourced,
                algorithmically generated, and AI-assisted financial information, market
                commentary, educational analysis, and research content provided solely
                for general informational, educational, and awareness purposes and not as
                financial, investment, tax, legal, or professional advice.
              </li>
              <li>
                <strong>Gamified Learning:</strong> engagement-driven educational
                mechanics including simulations, Demo Portfolios, rankings, leader
                boards, badges, and challenges designed to make financial learning
                interactive and accessible;
              </li>
              <li>
                <strong>Investment Readiness & Financial Preparedness:</strong>{" "}
                Educational assessments, simulations, frameworks, and self-guided tools
                intended to help Users evaluate financial literacy, risk awareness,
                financial preparedness, investment objectives, and general
                decision-making readiness. Investor Education: structured programmes
                designed to prepare Users for engagement with investment markets,
                including regulatory frameworks, risk management principles, and capital
                market mechanics;
              </li>
              <li>
                <strong>Opportunity Discovery & Awareness:</strong> informational listings
                and awareness content regarding third-party investment opportunities,
                fundraisings, and capital market activities, provided for informational
                awareness purposes only;
              </li>
              <li>
                <strong>Third-Party Integrations:</strong> facilitated connections to
                independent financial institutions, brokers, data providers, and other
                service providers;
              </li>
              <li>
                <strong>AI-Enabled Tools:</strong> analytical assistance, portfolio
                simulation, market commentary generation, and personalised learning
                pathway tools powered by artificial intelligence.
              </li>
              <li>
                <strong>Technology Infrastructure & User Tools:</strong> digital
                interfaces, dashboards, analytics, calculators, simulations, educational
                tracking systems, progress monitoring, community functionality,
                AI-enabled utilities, and other technology features designed to
                facilitate financial learning and engagement.
              </li>
            </ul>
          </SubSection>

          <SubSection title="2.2 What Growtt Is NOT — Critical Legal Positioning">
            <p>Growtt is expressly NOT and shall NOT be construed as:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>A Securities Broker or Dealer:</strong> Growtt does not execute,
                facilitate, or arrange the purchase or sale of securities on behalf of
                Users. Growtt is not licensed as a securities broker or dealer under the
                Investment and Securities Act (ISA) 2007 or any amendment thereto, or
                under the laws of any other jurisdiction.
              </li>
              <li>
                <strong>An Investment Manager or Portfolio Manager:</strong> Growtt does
                not manage, direct, or exercise discretion over Users' investment
                portfolios or capital. No element of the Platform constitutes
                discretionary or non-discretionary investment management.
              </li>
              <li>
                <strong>An Investment Adviser:</strong> Growtt does not provide
                personalised investment advice tailored to individual Users' specific
                financial circumstances, objectives, or risk profiles. No content, tool,
                AI output, market insight, or recommendation on the Platform shall
                constitute investment advice as defined under applicable law.
              </li>
              <li>
                <strong>A Custodian:</strong> Growtt does not hold, safeguard, or take
                custody of Users' funds, securities, or other financial assets.
              </li>
              <li>
                <strong>No Guaranteed Outcomes:</strong> Growtt does not guarantee
                financial success, investment returns, improved financial outcomes,
                capital access, profitability, wealth accumulation, investment readiness,
                or achievement of any financial objective.
              </li>
              <li>
                <strong>No Responsibility for Third-Party Services:</strong> Any
                interaction between Users and independent third-party institutions,
                advisers, brokers, issuers, investment managers, lenders, service
                providers, or counterparties introduced through or referenced on the
                Platform occurs solely between the User and such third party. Growtt does
                not control, guarantee, supervise, or assume responsibility for any
                third-party acts, omissions, services, outcomes, representations, or
                performance.
              </li>
              <li>
                <strong>A Fiduciary:</strong> Growtt does not act as a fiduciary to Users.
                No relationship of trust and confidence, in the legal sense applicable to
                investment fiduciaries, is created by these Terms or by use of the
                Platform.
              </li>
              <li>
                <strong>Not a Lender or Credit Provider:</strong> Growtt does not
                originate, issue, underwrite, guarantee, or provide loans, credit
                facilities, or financing products, except where explicitly disclosed
                through regulated third-party partnerships.
              </li>
              <li>
                <strong>Not a Financial Planner:</strong> Growtt does not create
                personalised financial plans, retirement plans, wealth management
                strategies, tax optimisation plans, or bespoke financial roadmaps tailored
                to Users.
              </li>
            </ul>
          </SubSection>

          <SubSection title="2.3 Informational and Educational Nature of Content">
            <p>
              All Content on the Platform, including but not limited to market
              commentary, analyst insights, AI-generated analysis, educational modules,
              and curated opportunity listings, is provided for informational and
              educational purposes exclusively. Such Content:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Does not constitute financial advice, investment advice, tax advice,
                legal advice, or any other form of regulated advice;
              </li>
              <li>
                Does not constitute an offer, solicitation, or recommendation to buy,
                sell, or hold any financial instrument, security, or asset;
              </li>
              <li>
                Is not tailored to any individual User's financial circumstances,
                investment objectives, tax position, or risk tolerance;
              </li>
              <li>May not reflect the most current market conditions at the time of access;</li>
              <li>
                May be based on assumptions, projections, or hypothetical scenarios that
                may not materialise.
              </li>
            </ul>
          </SubSection>

          <SubSection title="2.4 Third-Party Advisory Services">
            <p>
              Where Growtt facilitates access to third-party licensed financial advisers,
              investment professionals, or financial institutions, such third parties
              operate independently of Growtt. Any advisory relationship formed through
              the Platform is exclusively between the User and the relevant third party.
              Growtt does not endorse, guarantee, or assume liability for the advice,
              services, or performance of any third-party adviser or institution.
            </p>
          </SubSection>

          <SubSection title="2.5 Platform Evolution & Future Services">
            <p>
              Growtt is a dynamic platform that will evolve over time. Future product
              developments may include investment readiness certifications, curated deal
              flow access, premium advisory networks, expanded AI functionality, community
              features, and additional capital market tools. The introduction of any such
              future service will be accompanied by appropriate terms, disclosures, and,
              where required by law, regulatory notifications or approvals. Growtt does
              not represent that any future product or service is currently available
              unless expressly stated.
            </p>
          </SubSection>
        </Section>

        <Section title="3. User Eligibility & Account Types">
          <SubSection title="3.1 Adult User Accounts (18+)">
            <p>
              Adult Users must be at least eighteen (18) years of age and have full legal
              capacity to contract under Nigerian law. Adult Users may access the full
              suite of Platform features available to their subscription tier, including
              educational content, Advisory Access features (where applicable), AI Tools,
              and gamification elements.
            </p>
          </SubSection>

          <SubSection title="3.2 Minor User Accounts (Under 18)">
            <p>
              Minor accounts may be created for individuals between the ages of thirteen
              (13) and seventeen (17) years, subject to the following mandatory
              requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A Guardian must complete account registration on behalf of the Minor User;</li>
              <li>
                The Guardian must read and accept both these Terms and the Minor Account
                Supplemental Terms set out in Section 4;
              </li>
              <li>The Guardian must confirm their legal parental or guardianship authority;</li>
              <li>Minor accounts are subject to the absolute restrictions described in Section 4 of these Terms.</li>
            </ul>
            <p>
              Growtt reserves the right to establish minimum age limits and to modify the
              Minor account framework in response to changes in applicable law,
              regulatory guidance, or Platform capabilities.
            </p>
          </SubSection>

          <SubSection title="3.3 Business & Enterprise Accounts">
            <p>
              Business and enterprise account tiers are planned for future deployment.
              Business accounts shall be available to registered legal entities and shall
              be subject to additional terms, enhanced KYC/AML requirements, and such
              other conditions as Growtt may prescribe at the time of launch. Growtt makes
              no representation as to the availability of business accounts within any
              specified timeframe.
            </p>
          </SubSection>

          <SubSection title="3.4 Misrepresentation of Age">
            <p className="bg-red-50 border border-red-200 rounded p-4">
              <strong>IMPORTANT:</strong> Any User who provides false information
              regarding their age, or any Guardian who registers a Minor account without
              lawful guardianship authority, shall be in material breach of these Terms.
              Growtt reserves the right to immediately terminate the relevant account,
              retain all fees paid, report the matter to relevant authorities, and pursue
              all available legal remedies.
            </p>
          </SubSection>

          <SubSection title="3.5 KYC/AML Verification Triggers">
            <p>
              Growtt reserves the right to require identity verification at any stage of
              the User relationship, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Upon initial account registration;</li>
              <li>
                Upon attempted access to Premium Services, Advisory Access features, or
                Third-Party Integration;
              </li>
              <li>
                Where Growtt's compliance systems identify patterns of activity
                consistent with fraud, money laundering, identity theft, or other
                financial crime;
              </li>
              <li>Upon request by any Regulatory Body;</li>
              <li>
                Upon any transaction, payment, or interaction that meets or exceeds
                applicable reporting thresholds under Nigerian law.
              </li>
            </ul>
            <p>
              Failure to complete required verification within the timeframe specified by
              Growtt may result in suspension or termination of account access. Users
              expressly consent to Growtt conducting necessary identity and verification
              checks through Growtt's chosen verification partners.
            </p>
          </SubSection>

          <SubSection title="3.6 Enhanced Due Diligence">
            <p>
              Growtt may apply Enhanced Due Diligence (EDD) measures to any User where
              Growtt determines, at its absolute discretion, that additional verification
              is warranted. EDD may include requirements for enhanced identity
              documentation, proof of source of funds, video verification, or other
              measures consistent with Growtt's AML framework and applicable regulatory
              guidance.
            </p>
          </SubSection>
        </Section>

        <Section title="4. Minor Account Supplemental Terms">
          <p className="bg-yellow-50 border border-yellow-200 rounded p-4">
            <strong>NOTE:</strong> These Supplemental Terms apply exclusively to accounts
            held by Users under the age of 18. They are incorporated into and form part
            of these Master Terms of Service. Where these Supplemental Terms conflict
            with any other provision of these Terms with respect to Minor accounts, these
            Supplemental Terms shall prevail.
          </p>

          <SubSection title="4.1 Guardian Consent & Responsibility">
            <p>
              No Minor account shall be created without the express, informed consent of
              a Guardian. By creating a Minor account, the Guardian:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Confirms they have read and understood these Terms and the Minor Account
                Supplemental Terms in their entirety;
              </li>
              <li>Accepts these Terms and all associated policies on behalf of themselves and the Minor User;</li>
              <li>Warrants that they have lawful parental or guardianship authority over the Minor User;</li>
              <li>Accepts ongoing responsibility for supervising the Minor User's use of the Platform;</li>
              <li>
                Undertakes to notify Growtt immediately upon becoming aware of any
                misuse, safety concern, or change in the Minor User's circumstances that
                may affect their suitability to use the Platform.
              </li>
            </ul>
          </SubSection>

          <SubSection title="4.2 Educational-Only Environment">
            <p>
              Minor accounts exist exclusively within an educational environment. The
              Platform experience available to Minor Users is designed and limited to
              promote financial literacy and investment education in a safe,
              age-appropriate, and fully supervised setting. Minor Users are not permitted
              to engage in any activity on the Platform that simulates, facilitates, or
              resembles real financial transactions or investment activity.
            </p>
          </SubSection>

          <SubSection title="4.3 Demo Portfolios — Simulated Learning Only">
            <p>
              Minor Users may access Demo Portfolios, which are entirely fictitious,
              simulated investment experiences designed for educational purposes only.
              Demo Portfolios:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Do not involve real money, real securities, or real financial instruments of any kind;</li>
              <li>Do not reflect actual market execution, real pricing, or real investment outcomes;</li>
              <li>Are not connected to any brokerage, exchange, or financial institution;</li>
              <li>Cannot be converted to, withdrawn as, or exchanged for real money or financial value;</li>
              <li>Are provided solely as a pedagogical tool to illustrate investment principles.</li>
            </ul>
            <p>
              Performance achieved within a Demo Portfolio does not constitute financial
              performance, investment track record, or evidence of investment skill and
              shall not be represented as such by any User.
            </p>
          </SubSection>

          <SubSection title="4.4 Absolute Restrictions on Minor Accounts">
            <p className="bg-red-50 border border-red-200 rounded p-4">
              <strong>IMPORTANT:</strong> The following restrictions apply absolutely and
              without exception to all Minor User accounts. These restrictions may not be
              waived or modified by any Guardian, User, or third party.
            </p>
            <p>Minor Users are strictly prohibited from:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Making or receiving any real money transactions through the Platform;</li>
              <li>Accessing any real investment products, securities, funds, or financial instruments through the Platform;</li>
              <li>Receiving personalised investment advice, financial recommendations, or suitability assessments;</li>
              <li>Accessing Adult Advisory Services, Investment Advisory features, or capital access tools;</li>
              <li>Connecting the Platform account to any external brokerage, exchange, or financial institution;</li>
              <li>Making or receiving payments of any kind through the Platform (other than as managed by the Guardian for subscription purposes);</li>
              <li>Claiming or asserting that Demo Portfolio performance represents real financial performance.</li>
            </ul>
          </SubSection>

          <SubSection title="4.5 Permitted Activities for Minor Users">
            <p>Minor Users may engage in the following supervised activities within the educational environment:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accessing age-appropriate Educational Content and financial literacy modules;</li>
              <li>Participating in Demo Portfolio simulations for learning purposes;</li>
              <li>
                Engaging with Gamification Elements (badges, rankings, leader boards,
                challenges) within the controlled educational environment;
              </li>
              <li>
                Participating in educational community features, where available and
                subject to Guardian oversight and platform moderation (see Section 4.10);
              </li>
              <li>Accessing financial literacy resources, quizzes, and interactive educational tools.</li>
            </ul>
          </SubSection>

          <SubSection title="4.6 Minor Community & Social Interaction Protections">
            <p>
              Growtt recognises that future Platform evolution may introduce community,
              social engagement, and peer interaction features accessible to Minor Users.
              These features are, and shall at all times be, governed by the following
              principles:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All Minor User community interactions are strictly educational in nature and take place within a moderated environment;</li>
              <li>
                No Minor User community feature shall constitute, or be permitted to be
                used as, an investment community, financial recommendation channel,
                peer-to-peer advice forum, or solicitation environment;
              </li>
              <li>Growtt retains absolute moderator authority over all Minor community interactions;</li>
              <li>Minor community features shall be clearly separated from Adult advisory, community, and investment-readiness features;</li>
              <li>
                All Minor User interactions are subject to content moderation designed to
                prevent financial misinformation, investment hype, FOMO-inducing content,
                and any form of financial solicitation;
              </li>
              <li>
                Growtt expressly prohibits: peer-to-peer financial advice, investment
                tips, capital solicitation, financial hype or FOMO content, bullying,
                harassment, and manipulation within any Minor community feature.
              </li>
            </ul>
          </SubSection>

          <SubSection title="4.7 Guardian Monitoring Rights">
            <p>Guardians retain the following rights in relation to Minor accounts at all times:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to the Minor User's account activity and content history;</li>
              <li>
                Ability to restrict, limit, or expand the Minor User's access to specific
                Platform features (subject to absolute restrictions in clause 4.4);
              </li>
              <li>Ability to receive regular activity summaries or alerts (where this feature is available);</li>
              <li>Immediate account suspension or closure at Guardian's request;</li>
              <li>Ability to update Minor User personal details and contact information.</li>
            </ul>
          </SubSection>

          <SubSection title="4.8 Transition to Adult Account at Age 18">
            <p>Upon a Minor User reaching the age of eighteen (18):</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The Minor account will be flagged for transition to an Adult account;</li>
              <li>Growtt will notify the Guardian and Minor User of the upcoming transition;</li>
              <li>
                The User will be required to complete independent registration, KYC/AML
                verification, and acceptance of the full Adult Terms;
              </li>
              <li>Until the transition is fully completed and verified, the account shall remain subject to Minor Account restrictions;</li>
              <li>Upon successful transition, the User assumes full independent responsibility for their account under the Adult Terms.</li>
            </ul>
          </SubSection>

          <SubSection title="4.9 Data & Privacy Protections for Minor Users">
            <p>
              Growtt applies heightened data protection standards to Minor User accounts,
              consistent with applicable Nigerian data protection law and international
              best practices. Minor User data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Shall not be used for targeted advertising or commercial profiling;</li>
              <li>Shall not be shared with third parties for marketing or commercial purposes;</li>
              <li>Shall be collected and processed only to the extent necessary for the delivery of the educational services and required compliance obligations;</li>
              <li>Shall be subject to enhanced data security measures proportionate to the sensitivity of data relating to minors.</li>
            </ul>
            <p>
              Guardians may request deletion of Minor User data at any time, subject to
              Growtt's legal data retention obligations.
            </p>
          </SubSection>

          <SubSection title="4.10 Platform Evolution & Feature Changes for Minor Users">
            <p>Growtt retains the absolute right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Introduce, modify, restrict, or remove any feature available to Minor Users at any time;</li>
              <li>Implement additional age-based safeguards, content filters, or interaction restrictions;</li>
              <li>Require additional Guardian consent or verification for the introduction of new features accessible to Minor Users;</li>
              <li>Restrict Minor User interactions on the Platform if safety, regulatory compliance, or platform integrity considerations require it.</li>
            </ul>
            <p>
              The introduction of any new community or interactive feature accessible to
              Minor Users will be communicated to Guardians in advance, and Guardian
              consent will be obtained where required by applicable law or where Growtt
              determines such consent is warranted by the nature of the feature.
            </p>
          </SubSection>

          <SubSection title="4.11 Guardian Termination Rights">
            <p>
              A Guardian may terminate a Minor User account at any time by submitting a
              written request to Growtt at the contact details provided in these Terms.
              Growtt shall process such requests within five (5) business days.
              Termination of a Minor account by a Guardian does not affect any rights or
              obligations that have accrued prior to termination.
            </p>
          </SubSection>
        </Section>

        <Section title="5. Account Registration & Verification">
          <SubSection title="5.1 Registration Requirements">
            <p>
              Users must provide accurate, complete, and current information during the
              registration process, including full legal name, valid email address, date
              of birth, and any other information required by Growtt from time to time.
              You undertake to update your registration information promptly if it
              changes.
            </p>
          </SubSection>

          <SubSection title="5.2 Account Security & Password Responsibility">
            <p>You are solely responsible for maintaining the confidentiality of your account credentials, including your password. You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use a strong, unique password for your Growtt account;</li>
              <li>Never share your login credentials with any third party;</li>
              <li>Notify Growtt immediately if you become aware of any unauthorised access to or use of your account;</li>
              <li>Ensure that you log out of your account at the end of each session, particularly on shared devices;</li>
              <li>Accept responsibility for all activities that occur under your account, whether or not authorised by you.</li>
            </ul>
            <p>
              Growtt shall not be liable for any loss or damage arising from your failure
              to comply with these security obligations.
            </p>
          </SubSection>

          <SubSection title="5.3 Identity Verification">
            <p>
              Growtt reserves the right to require Users to verify their identity at any
              time, using such verification methods as Growtt may reasonably require.
              Verification may be conducted by Growtt directly or through authorised
              third-party verification service providers. Users consent to such
              verification processes as a condition of account access.
            </p>
          </SubSection>

          <SubSection title="5.4 Suspension for Suspicious Activity">
            <p>
              Growtt reserves the right to immediately suspend any account, without prior
              notice, where Growtt has reasonable grounds to believe that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The account is being used in connection with fraudulent activity or financial crime;</li>
              <li>The User has provided false identity information or misrepresented their eligibility;</li>
              <li>The account has been compromised or is subject to unauthorised access;</li>
              <li>Continued account access poses a risk to the Platform, other Users, or Growtt;</li>
              <li>The account is in material breach of these Terms.</li>
            </ul>
            <p>
              Account suspension shall not affect any legal proceedings that Growtt may
              initiate or continue in respect of the conduct that prompted the
              suspension.
            </p>
          </SubSection>

          <SubSection title="5.5 KYC/AML Rights">
            <p>
              Growtt is committed to operating a compliant platform and reserves all
              rights to implement, modify, and enforce KYC and AML procedures consistent
              with the Money Laundering (Prevention and Prohibition) Act 2022, the CBN's
              AML/CFT guidelines, and applicable international standards. Growtt may
              report suspicious activity to the Nigerian Financial Intelligence Unit
              (NFIU) or other relevant authorities as required by law.
            </p>
          </SubSection>

          <SubSection title="5.6 Enhanced Due Diligence">
            <p>
              Growtt may apply EDD measures at any point in the User lifecycle. EDD may
              require submission of certified identity documents, proof of address,
              source of funds declarations, video identity verification, or other
              documentation as Growtt deems necessary. Refusal to cooperate with EDD may
              result in account restriction or termination.
            </p>
          </SubSection>
        </Section>

        <Section title="6. Seeds, Premium Features & Billing">
          <p>
            Growtt operates on a hybrid access model consisting of free platform access,
            utility-based feature access through Seeds, and future premium subscription
            offerings. Certain educational features, simulations, platform tools, and
            premium functionality may require the use of Seeds or payment of subscription
            fees.
          </p>

          <SubSection title="6.1 Seeds — Platform Utility Credits">
            <p>
              "Seeds" are digital utility credits issued by Growtt for use solely within
              the Platform. Seeds may be purchased, earned, awarded, or otherwise obtained
              through platform participation, promotional campaigns, educational
              achievements, referrals, gamified activities, or other approved methods
              determined by Growtt.
            </p>
            <p>
              Seeds may be used to unlock or access certain features, content,
              simulations, premium educational tools, assessments, platform experiences,
              community functionality, or other digital services made available on the
              Platform.
            </p>
            <p>Users acknowledge and agree that Seeds:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>are solely a limited, revocable, non-transferable licence to access certain Platform functionality;</li>
              <li>do not constitute currency, legal tender, electronic money, deposits, stored value, securities, commodities, financial instruments, or investment products;</li>
              <li>have no cash value outside the Platform;</li>
              <li>are non-redeemable, non-refundable, and may not be exchanged for money or monetary compensation except where required by applicable law;</li>
              <li>may not be transferred, sold, gifted, traded, assigned, sublicensed, or exchanged between Users unless expressly authorised by Growtt;</li>
              <li>do not accrue interest, dividends, appreciation, investment return, or ownership rights of any nature.</li>
            </ul>
            <p>
              Growtt reserves the right to determine the utility, pricing, issuance,
              expiration, earning mechanisms, redemption mechanics, and permitted uses of
              Seeds at its sole discretion.
            </p>
          </SubSection>

          <SubSection title="6.2 Seed Purchases & Billing">
            <p>
              Where Seeds are available for purchase, all fees shall be displayed on the
              Platform at the point of purchase. Users authorise Growtt and its payment
              processing partners to charge the selected payment method for purchases
              made through the Platform. Growtt reserves the right to revise Seed pricing,
              bundles, availability, purchasing limits, bonus allocations, or promotional
              structures at any time. Unless otherwise required by applicable law,
              completed Seed purchases are final and non-refundable.
            </p>
          </SubSection>

          <SubSection title="6.3 Premium Services & Future Paid Features">
            <p>
              Growtt may introduce premium subscription services, including but not
              limited to Growtt Vault, advanced educational tools, enhanced simulations,
              premium research content, exclusive learning experiences, analytics,
              mentorship access, and other premium offerings ("Premium Services").
            </p>
            <p>
              Premium Services may require recurring subscription payments, Seed usage,
              one-time payments, or a combination thereof. Subscription fees, payment
              schedules, and applicable benefits shall be disclosed on the Platform at the
              point of subscription.
            </p>
            <p>
              Growtt reserves the right to introduce, modify, suspend, discontinue, or
              restructure Premium Services, pricing tiers, benefits, or access models at
              any time, subject to reasonable notice where required.
            </p>
          </SubSection>

          <SubSection title="6.4 Subscription Billing & Renewals">
            <p>
              Where Premium Services operate on a subscription basis, subscriptions may
              be billed monthly, quarterly, annually, or on any other billing cycle
              disclosed at the point of purchase.
            </p>
            <p>
              Unless cancelled before renewal, subscriptions shall automatically renew at
              the end of the applicable billing period, and Users authorise Growtt to
              charge their designated payment method on a recurring basis.
            </p>
            <p>
              Users may cancel subscriptions through their account settings, with
              cancellation taking effect at the end of the current billing cycle.
            </p>
          </SubSection>

          <SubSection title="6.5 Free Trials & Promotional Access">
            <p>
              Growtt may, at its discretion, provide free trials, bonus Seeds,
              promotional access, discounted subscriptions, referral rewards, or
              limited-time offers. Growtt reserves the right to modify, withdraw,
              restrict, or terminate any promotional offer at any time without liability.
              Promotional benefits are non-transferable and may be subject to additional
              terms.
            </p>
          </SubSection>

          <SubSection title="6.6 Refund Policy">
            <p>
              Except where required by applicable law, all purchases made on the
              Platform, including subscription payments and Seed purchases, are final and
              non-refundable.
            </p>
            <p>Refunds may only be granted where:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>required under applicable law;</li>
              <li>Growtt determines, in its sole discretion, that exceptional circumstances justify a refund; or</li>
              <li>a material platform failure attributable to Growtt substantially prevents access to purchased services.</li>
            </ul>
            <p>
              No refund shall be issued for partial usage, unused Seeds, dissatisfaction
              with content, inactivity, accidental purchases, or failure to utilise
              Platform features.
            </p>
          </SubSection>

          <SubSection title="6.7 Suspension, Abuse & Fraud Prevention">
            <p>
              Growtt reserves the right to suspend, remove, revoke, freeze, adjust, or
              terminate access to Seeds, subscriptions, promotional rewards, or Premium
              Services where Growtt reasonably suspects fraud, abuse, manipulation,
              payment reversal, misuse of gamification systems, exploitative conduct, or
              violations of these Terms.
            </p>
          </SubSection>
        </Section>

        <Section title="7. Educational Content Disclaimer">
          <p className="bg-red-50 border border-red-200 rounded p-4">
            <strong>IMPORTANT:</strong> This section contains critical legal disclaimers.
            By using the Platform, you acknowledge and accept these disclaimers in their
            entirety.
          </p>

          <SubSection title="7.1 Not Financial or Investment Advice">
            <p>No Content on the Platform, and no output, recommendation, insight, analysis, commentary, or tool available through the Platform, constitutes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Financial advice as defined under applicable Nigerian law or the laws of any other jurisdiction;</li>
              <li>Investment advice or investment recommendation, whether general or personalised;</li>
              <li>Fiduciary advice or the discharge of any fiduciary obligation to Users;</li>
              <li>A solicitation to purchase, sell, or hold any financial instrument, security, or asset;</li>
              <li>Tax advice, legal advice, actuarial advice, or any other form of professional regulated advice.</li>
            </ul>
          </SubSection>

          <SubSection title="7.2 Educational Purpose Only">
            <p>
              All Content on the Platform is provided strictly for the purposes of
              financial education, investment literacy development, and informational
              awareness. Users are expected to conduct their own independent research,
              seek qualified independent financial advice before making any investment or
              financial decision, and consider their own financial circumstances,
              objectives, risk tolerance, and tax position before acting on any
              information obtained from the Platform.
            </p>
          </SubSection>

          <SubSection title="7.3 Hypothetical & Simulated Outcomes">
            <p>Any projected returns, simulated investment outcomes, historical performance data, Demo Portfolio results, or forward-looking content presented on the Platform are:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hypothetical and for illustrative purposes only;</li>
              <li>Not indicative of actual, achievable, or guaranteed future results;</li>
              <li>Based on assumptions that may not materialise;</li>
              <li>Subject to market risks, economic conditions, and other factors beyond Growtt's control.</li>
            </ul>
            <p>
              Past or simulated performance is not indicative of future results. You
              acknowledge that all investment involves risk, including the potential loss
              of your entire capital.
            </p>
          </SubSection>

          <SubSection title="7.4 Content Accuracy">
            <p>
              While Growtt endeavours to ensure that Platform Content is accurate,
              current, and of high quality, Growtt does not warrant the accuracy,
              completeness, or timeliness of any Content. Content may be subject to
              errors, omissions, inaccuracies, and delays. Growtt shall not be liable for
              any loss or damage suffered as a result of reliance on Platform Content.
            </p>
          </SubSection>
        </Section>

        <Section title="8. Investment & Capital Risk Disclosures">
          <p>
            The following risk disclosures are provided to ensure that Users approach
            investment-related activity, advisory access, and capital market
            participation with a full understanding of the material risks involved.
            These disclosures apply to all Platform activities that involve or relate to
            investment decision-making.
          </p>

          <SubSection title="8.1 Risk of Loss of Capital">
            <p>
              Investment in securities, private market assets, start-ups, funds, and
              other financial instruments involves a material risk of partial or total
              loss of invested capital. No return on capital is guaranteed. Past
              performance is not a reliable indicator of future results. Users must be
              prepared for the possibility that the value of any investment may fall as
              well as rise.
            </p>
          </SubSection>

          <SubSection title="8.2 Market Risk">
            <p>
              Financial markets are subject to volatility driven by economic conditions,
              geopolitical events, regulatory changes, monetary policy decisions, and
              other macro and micro factors that are beyond any party's control. Market
              conditions can change rapidly and without warning.
            </p>
          </SubSection>

          <SubSection title="8.3 Liquidity Risk">
            <p>
              Certain investment types, particularly private market instruments, unlisted
              securities, and early-stage company investments, may be illiquid. Users may
              be unable to realise their investment at a desired time or price, or at
              all.
            </p>
          </SubSection>

          <SubSection title="8.4 Private Market & Start-up Risk">
            <p>
              Investment in early-stage companies and private markets carries heightened
              risk compared to public market investment. Start-up companies have a high
              rate of failure. Users considering such investments must conduct thorough
              due diligence and seek independent professional advice.
            </p>
          </SubSection>

          <SubSection title="8.5 No Guaranteed Returns">
            <p>
              Growtt makes no representation, warranty, or guarantee regarding the
              returns, performance, or financial outcomes of any investment or investment
              strategy discussed, referenced, or made accessible through the Platform.
              Any projections or estimates are illustrative only and should not be
              construed as forecasts or promises.
            </p>
          </SubSection>

          <SubSection title="8.6 Independent Decision-Making">
            <p>
              Users are solely and exclusively responsible for all investment decisions
              made in connection with information, tools, or insights accessed through
              the Platform. Growtt is not responsible for any loss, damage, or financial
              harm arising from your investment decisions. You should not make investment
              decisions based solely or primarily on Platform Content without seeking
              independent professional financial advice.
            </p>
          </SubSection>
        </Section>

        <Section title="9. AI & Analytics Disclaimer">
          <SubSection title="9.1 Nature of AI-Generated Outputs">
            <p>
              The Platform incorporates artificial intelligence and machine learning
              tools that may generate textual analysis, market commentary, educational
              content, portfolio simulations, learning pathway recommendations, and other
              outputs ("AI Outputs"). You acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI Outputs are generated algorithmically and reflect probabilistic assessments based on data inputs available at the time of generation;</li>
              <li>AI Outputs do not constitute financial advice, investment advice, or any form of personalised professional advice;</li>
              <li>AI Outputs may contain errors, inaccuracies, omissions, or outdated information;</li>
              <li>AI Outputs are informational assistance tools only and are not a substitute for independent professional judgment;</li>
              <li>AI Outputs are not personalised to your individual financial circumstances, investment objectives, tax position, or risk profile unless expressly stated in a licensed advisory context.</li>
            </ul>
          </SubSection>

          <SubSection title="9.2 User Responsibility for AI Outputs">
            <p>
              You retain full and independent responsibility for all decisions made on
              the basis of or in connection with AI Outputs. Growtt expressly disclaims
              all liability for any loss, damage, or harm arising from reliance on AI
              Outputs without independent professional verification.
            </p>
          </SubSection>

          <SubSection title="9.3 AI Limitations">
            <p>Users acknowledge that AI systems may produce outputs that are:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Inconsistent, contradictory, or contextually inappropriate;</li>
              <li>Based on training data that may be outdated or incomplete;</li>
              <li>Subject to technical failures, biases, or unexpected behaviour;</li>
              <li>Incapable of understanding or accounting for your unique personal financial circumstances.</li>
            </ul>
            <p>
              Growtt does not represent that AI Tools on the Platform are infallible,
              comprehensive, or suitable for any specific purpose beyond the educational
              context in which they are offered.
            </p>
          </SubSection>

          <SubSection title="9.4 Beta AI Features">
            <p>
              AI features available in Beta are subject to the Beta Features Disclaimer
              in Section 16.4 and are provided without warranty of any kind. Beta AI
              outputs carry additional uncertainty and should be treated with heightened
              critical scrutiny.
            </p>
          </SubSection>
        </Section>

        <Section title="10. Community, Rankings & Gamification Rules">
          <SubSection title="10.1 Educational Nature of Gamification">
            <p>
              Growtt's gamification features, including leader boards, rankings, badges,
              points, stars, challenges, and similar engagement mechanics, are designed
              exclusively to promote educational engagement and financial literacy
              development. Growtt expressly declares that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All Gamification Elements are fictional and educational constructs;</li>
              <li>Rankings and leader board positions are based on engagement with educational content and simulated learning activities, not real investment performance;</li>
              <li>Badges, stars, points, and other Gamification Elements have no monetary value and cannot be exchanged, redeemed, transferred, or converted into money, financial instruments, or any item of value;</li>
              <li>Demo Portfolio performance reflected in rankings does not constitute actual investment performance, financial track record, or evidence of investment skill.</li>
            </ul>
          </SubSection>

          <SubSection title="10.2 Prohibited Conduct in Community & Gamification Features">
            <p>The following conduct is strictly prohibited by all Users on the Platform, including in community forums, comment sections, ranking features, and any other interactive areas:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manipulation of rankings, leader boards, or challenge outcomes through fraudulent, deceptive, or automated means;</li>
              <li>Creating multiple accounts to inflate rankings, accumulate rewards, or gain unfair advantage;</li>
              <li>Harassment, intimidation, bullying, targeted abuse, or threatening behaviour directed at any User;</li>
              <li>Posting, sharing, or promoting financial misinformation, misleading investment claims, or fabricated market data;</li>
              <li>Impersonation of any person, entity, financial professional, or Growtt representative;</li>
              <li>Spam, solicitation, pyramid schemes, referral fraud, or unsolicited commercial communications;</li>
              <li>False performance claims — representing Demo Portfolio or simulated results as real investment performance;</li>
              <li>Promoting or soliciting any financial product, investment scheme, or financial service without Growtt's express written consent;</li>
              <li>Investment hype, FOMO-inducing content, or promotional content designed to manipulate other Users' financial behaviour;</li>
              <li>Any conduct that violates applicable Nigerian law, including the Cybercrimes Act, securities laws, or consumer protection laws.</li>
            </ul>
          </SubSection>

          <SubSection title="10.3 Content Moderation">
            <p>Growtt reserves the right, at its absolute discretion and without prior notice:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To remove any Content that violates these Terms or Growtt's Community Guidelines;</li>
              <li>To suspend or terminate accounts of Users who engage in prohibited conduct;</li>
              <li>To implement automated moderation tools;</li>
              <li>To report illegal activity to law enforcement or regulatory authorities.</li>
            </ul>
            <p>Moderation decisions are final and are not subject to appeal except at Growtt's discretion.</p>
          </SubSection>

          <SubSection title="10.4 Peer Interaction Disclaimer">
            <p>
              Interactions between Users in community features, comment sections, and
              peer messaging tools do not constitute and shall not be construed as
              financial advice, investment recommendations, or regulated financial
              communications. Growtt is not responsible for the accuracy, completeness,
              or legality of User-generated communications within the Platform.
            </p>
          </SubSection>
        </Section>

        <Section title="11. User Generated Content & Creator Content">
          <SubSection title="11.1 Content Ownership">
            <p>
              You retain ownership of any original content that you create and submit to
              the Platform ("User Content"). However, by submitting User Content to the
              Platform, you grant Growtt a worldwide, perpetual, irrevocable, royalty-free,
              sublicensable licence to use, display, reproduce, modify, adapt, distribute,
              and create derivative works from your User Content for the purposes of
              operating, improving, and promoting the Platform.
            </p>
          </SubSection>

          <SubSection title="11.2 Creator Content Standards">
            <p>Where Growtt enables educators, financial professionals, or content creators to upload educational materials or financial commentary ("Creator Content"), such creators:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Warrant that Creator Content does not violate applicable law, including securities laws, advertising standards, or intellectual property law;</li>
              <li>Warrant that Creator Content does not constitute unlicensed financial advice or investment recommendations;</li>
              <li>Accept that Growtt retains moderation rights over all Creator Content;</li>
              <li>Acknowledge that Creator Content may be reviewed, edited, restricted, or removed at Growtt's discretion.</li>
            </ul>
          </SubSection>

          <SubSection title="11.3 Prohibited User Content">
            <p>Users may not submit Content that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violates any applicable law or regulation;</li>
              <li>Infringes the intellectual property rights of any third party;</li>
              <li>Contains financial misinformation, false investment claims, or prohibited financial promotions;</li>
              <li>Is defamatory, obscene, discriminatory, or harmful;</li>
              <li>Contains malware, phishing links, or malicious code;</li>
              <li>Impersonates any person or entity.</li>
            </ul>
          </SubSection>

          <SubSection title="11.4 Copyright Infringement">
            <p>
              Growtt respects intellectual property rights and will respond to legitimate
              copyright infringement notices in accordance with applicable law. If you
              believe that Content on the Platform infringes your copyright, please submit
              a notice to Growtt at the designated contact address, including sufficient
              information to identify the claimed infringement, and Growtt will
              investigate and take appropriate action.
            </p>
          </SubSection>
        </Section>

        <Section title="12. Third-Party Providers & Integrations">
          <SubSection title="12.1 Independent Third Parties">
            <p>
              The Platform may enable Users to connect to, access, or interact with
              Third-Party Providers, including brokerages, exchanges, payment processors,
              data providers, identity verification services, and other financial service
              providers. These Third-Party Providers are entirely independent of Growtt
              and operate under their own terms, conditions, and regulatory frameworks.
            </p>
          </SubSection>

          <SubSection title="12.2 Growtt's Limitation of Responsibility for Third Parties">
            <p>
              Growtt may provide technology infrastructure, educational visibility,
              informational access, discovery mechanisms, introductions, integrations,
              referral pathways, or platform-enabled connectivity to independent
              Third-Party Providers. However, unless expressly stated in writing, Growtt
              does not act as a legal agent, fiduciary, representative, investment
              intermediary, mandated arranger, broker, or authorised representative of any
              Third-Party Provider.
            </p>
            <p>Accordingly, Growtt does not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>guarantee, warrant, or assure the quality, legality, suitability, performance, regulatory compliance, solvency, or reliability of any Third-Party Provider;</li>
              <li>independently verify all information, disclosures, claims, pricing, financial performance, licensing status, or representations made by Third-Party Providers;</li>
              <li>assume responsibility or liability for any investment outcome, service failure, misconduct, negligence, omission, fraud, insolvency, cybersecurity incident, operational disruption, or regulatory enforcement action involving a Third-Party Provider;</li>
              <li>guarantee uninterrupted access, platform availability, API functionality, service continuity, transaction execution, or data accuracy relating to Third-Party systems;</li>
              <li>become a party to any agreement, investment, transaction, arrangement, or contractual relationship entered into between a User and a Third-Party Provider unless expressly disclosed otherwise.</li>
              <li>Any engagement, reliance, transaction, investment, onboarding, or contractual arrangement entered into by a User with a Third-Party Provider shall be solely between the User and such Third-Party Provider, and Users are responsible for conducting their own due diligence and obtaining independent professional advice where necessary.</li>
            </ul>
          </SubSection>

          <SubSection title="12.3 User Responsibility for Third-Party Connections">
            <p>By connecting any Third-Party Provider account to the Platform, you acknowledge that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You have independently reviewed and accepted the Third-Party Provider's terms, conditions, and/or privacy policy;</li>
              <li>You authorise Growtt to interact with the Third-Party Provider's platform or API on your behalf solely to the extent necessary to provide the connected Platform feature;</li>
              <li>Growtt's access to your Third-Party Provider account is limited to the scope of permissions you authorise;</li>
              <li>You bear sole responsibility for all activity and transactions executed through connected Third-Party Provider accounts.</li>
            </ul>
          </SubSection>

          <SubSection title="12.4 Third-Party Failures">
            <p>
              Growtt shall not be liable for any loss, damage, or harm arising from the
              failure, malfunction, downtime, data breach, insolvency, or regulatory
              closure of any Third-Party Provider. This includes, without limitation,
              failure of brokerage platforms, payment processing failures, data feed
              interruptions, and loss of data held by Third-Party Providers.
            </p>
          </SubSection>

          <SubSection title="12.5 Third-Party Content">
            <p>
              Any information, data, market feeds, or content provided by Third-Party
              Providers and displayed on the Platform is provided as-is. Growtt does not
              warrant the accuracy, timeliness, or completeness of Third-Party Provider
              content.
            </p>
          </SubSection>
        </Section>

        <Section title="13. Referral, Rewards & Promotions">
          <SubSection title="13.1 Referral Programme">
            <p>Growtt may operate a referral programme that allows Users to invite new members to the Platform in exchange for rewards, credits, or other incentives. Participation in any referral programme is subject to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Compliance with these Terms and any additional referral programme terms published on the Platform;</li>
              <li>The prohibition against self-referral, bulk or automated referral generation, or any fraudulent referral activity;</li>
              <li>Growtt's right to verify the authenticity of referrals before issuing any reward;</li>
              <li>The understanding that referral rewards have no cash value and cannot be exchanged for currency unless expressly stated.</li>
            </ul>
          </SubSection>

          <SubSection title="13.2 Prohibition on Referral Abuse">
            <p>
              Any attempt to abuse, manipulate, or defraud Growtt's referral system,
              including creating fake accounts, using automated tools, or generating
              ineligible referrals, constitutes a material breach of these Terms and may
              result in account termination and recovery of any rewards improperly
              obtained.
            </p>
          </SubSection>

          <SubSection title="13.3 Regulatory Compliance of Incentives">
            <p>
              Growtt designs its incentive and reward structures to comply with
              applicable Nigerian law, including consumer protection regulations and
              financial promotions rules. Growtt reserves the right to modify or
              discontinue any incentive programme to ensure continued regulatory
              compliance without liability to participating Users.
            </p>
          </SubSection>

          <SubSection title="13.4 No Pyramid or Multi-Level Structures">
            <p>
              No aspect of Growtt's referral or rewards programme shall constitute, or be
              operated as, a pyramid scheme, Ponzi scheme, multi-level marketing
              arrangement, or similar structure. All rewards are tied to verified new
              User registrations and eligible activities, not to further referral chains.
            </p>
          </SubSection>
        </Section>

        <Section title="14. Privacy, Data Usage & Communications">
          <SubSection title="14.1 Privacy Policy">
            <p>
              Growtt's collection, use, storage, and sharing of personal data is governed
              by the Growtt Privacy Policy, which is incorporated by reference into these
              Terms. By using the Platform, you consent to the collection and use of your
              personal data as described in the Privacy Policy. The Privacy Policy is
              compliant with the Nigeria Data Protection Regulation (NDPR) and the
              Nigeria Data Protection Act 2023.
            </p>
          </SubSection>

          <SubSection title="14.2 Communications Consent">
            <p>By creating an account, you consent to receive communications from Growtt, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Transactional and account communications (required for service delivery);</li>
              <li>Product updates, feature announcements, and Platform evolution notifications;</li>
              <li>Educational newsletters and financial literacy content;</li>
              <li>Beta access invitations and pilot programme communications;</li>
              <li>Waitlist and launch notifications for new products and features.</li>
            </ul>
            <p>
              Where legally required, Growtt will obtain separate explicit consent for
              marketing communications. You may withdraw consent to marketing
              communications at any time by updating your preferences in your account
              settings or using the unsubscribe mechanism in any marketing email.
            </p>
          </SubSection>

          <SubSection title="14.3 Analytics & Tracking">
            <p>
              Growtt uses analytics tools and tracking technologies to monitor Platform
              usage, improve user experience, and optimise Platform performance. By using
              the Platform, you consent to the use of such technologies in accordance
              with the Privacy Policy. You may adjust your tracking preferences through
              the cookie consent mechanism on the Platform.
            </p>
          </SubSection>

          <SubSection title="14.4 Data Sharing & Third Parties">
            <p>
              Growtt does not sell personal data to third parties for marketing purposes.
              Data may be shared with authorised service providers, regulatory
              authorities as required by law, and in connection with a business transfer
              as described in the Privacy Policy.
            </p>
          </SubSection>
        </Section>

        <Section title="15. Intellectual Property">
          <SubSection title="15.1 Growtt Intellectual Property">
            <p>All intellectual property rights in and to the Platform, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The Growtt brand, name, logo, trademarks, and trade dress;</li>
              <li>Educational modules, courses, curricula, and learning frameworks;</li>
              <li>Gamification systems, mechanics, and proprietary engagement methodologies;</li>
              <li>AI Tools, AI algorithms, and AI-generated outputs produced by Growtt's systems;</li>
              <li>Proprietary research reports, market analysis, and financial commentary;</li>
              <li>Platform code, software architecture, APIs, and technical infrastructure;</li>
              <li>User interface design, visual design, and user experience frameworks;</li>
              <li>Any other original works created by or for Growtt, are and shall remain the exclusive property of Growtt Alternative Investment Solutions Limited and/or its licensors. All rights not expressly granted to you in these Terms are reserved.</li>
            </ul>
          </SubSection>

          <SubSection title="15.2 Licence to Users">
            <p>
              Subject to your compliance with these Terms, Growtt grants you a limited,
              non-exclusive, non-transferable, revocable licence to access and use the
              Platform and its Content for personal, non-commercial educational purposes
              only. This licence does not include the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Copy, reproduce, distribute, or create derivative works from any Platform Content;</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Platform;</li>
              <li>Use any Growtt intellectual property for commercial purposes without prior written consent;</li>
              <li>Scrape, crawl, or extract data from the Platform by automated or manual means beyond normal use.</li>
            </ul>
          </SubSection>

          <SubSection title="15.3 Feedback">
            <p>
              If you provide Growtt with any feedback, suggestions, or ideas regarding the
              Platform, you grant Growtt an irrevocable, royalty-free, perpetual licence
              to use such feedback without restriction or compensation.
            </p>
          </SubSection>
        </Section>

        <Section title="16. Platform Availability, Service Interruptions & Beta Features">
          <SubSection title="16.1 No Warranty of Uninterrupted Service">
            <p>
              Growtt does not warrant that the Platform will be available continuously,
              error-free, or free from technical interruptions. The Platform is provided
              on an "as is" and "as available" basis. Growtt shall not be liable for any
              loss, damage, or inconvenience arising from Platform downtime, technical
              failure, scheduled maintenance, or unexpected service interruptions.
            </p>
          </SubSection>

          <SubSection title="16.2 Scheduled Maintenance">
            <p>
              Growtt will endeavour to notify Users of scheduled maintenance that may
              affect Platform availability. However, Growtt reserves the right to conduct
              maintenance, updates, and improvements at any time and without prior notice
              in circumstances where delay would risk Platform integrity or security.
            </p>
          </SubSection>

          <SubSection title="16.3 Force Majeure">
            <p>
              Growtt shall not be liable for any failure or delay in performing its
              obligations under these Terms where such failure or delay arises from
              causes beyond Growtt's reasonable control, including but not limited to:
              acts of God, natural disasters, civil unrest, government actions,
              telecommunications failures, power outages, cyberattacks, epidemic or
              pandemic conditions, or acts of war. In such circumstances, Growtt's
              obligations shall be suspended for the duration of the force majeure event.
            </p>
          </SubSection>

          <SubSection title="16.4 Beta Features Disclaimer">
            <p>Growtt actively develops new Platform features and may make them available in Beta prior to full release. Beta Features are provided subject to the following conditions:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Beta Features are experimental, incomplete, and in active development;</li>
              <li>Beta Features may contain bugs, errors, technical limitations, or unexpected behaviour;</li>
              <li>Beta Features are provided without any warranty, express or implied, including any warranty of fitness for purpose;</li>
              <li>Growtt does not guarantee the continued availability of any Beta Feature and may withdraw, modify, or replace any Beta Feature at any time without notice;</li>
              <li>Users may not rely on any Beta Feature for any financial, investment, or commercial decision;</li>
              <li>Any output, recommendation, or insight generated by a Beta Feature should be treated with heightened critical scrutiny and verified independently before any reliance;</li>
              <li>Growtt is not liable for any loss, damage, or harm arising from use of or reliance on any Beta Feature.</li>
            </ul>
            <p>
              Beta Features covered by this disclaimer include, without limitation: Beta
              AI tools, experimental gamification systems, new investment readiness
              modules, partner integrations in pilot phase, and any feature designated as
              "Beta", "Preview", "Experimental", or "Early Access" on the Platform.
            </p>
          </SubSection>

          <SubSection title="16.5 Cyber Incident Disclaimer">
            <p>
              While Growtt maintains industry-standard cybersecurity measures, no digital
              platform can guarantee complete immunity from cyberattacks, data breaches,
              or security incidents. In the event of a security incident, Growtt will
              take all reasonable steps to contain the incident, notify affected Users in
              accordance with applicable law, and cooperate with relevant authorities.
              Growtt's liability for cybersecurity incidents is subject to the
              limitations set out in Section 18.
            </p>
          </SubSection>
        </Section>

        <Section title="17. Suspension & Termination">
          <SubSection title="17.1 Termination by User">
            <p>
              You may terminate your account at any time by submitting a written request
              to Growtt at the contact details provided herein. Termination requests will
              be processed within ten (10) business days. Termination does not affect any
              rights or obligations that have accrued prior to termination, and no
              refunds shall be issued for unused subscription periods except as required
              by law.
            </p>
          </SubSection>

          <SubSection title="17.2 Suspension & Termination by Growtt">
            <p>Growtt reserves the absolute right to suspend, restrict, or terminate your account at any time, with or without notice, in circumstances including but not limited to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Material breach of these Terms or any applicable policy;</li>
              <li>Fraudulent activity, financial crime, or suspected money laundering;</li>
              <li>Provision of false identity information or misrepresentation of eligibility;</li>
              <li>Conduct that poses a risk to the Platform, other Users, or Growtt;</li>
              <li>Failure to complete required KYC/AML verification within the specified timeframe;</li>
              <li>Receipt of a direction from a Regulatory Body or law enforcement authority;</li>
              <li>Insolvency, bankruptcy, or equivalent proceedings in respect of the User;</li>
              <li>Prolonged inactivity where permitted by applicable law.</li>
            </ul>
          </SubSection>

          <SubSection title="17.3 Consequences of Termination">
            <p>Upon account termination:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your licence to use the Platform shall immediately cease;</li>
              <li>Your access to all Platform features, Content, and data shall be revoked;</li>
              <li>Growtt will retain User data for the minimum period required by law;</li>
              <li>Any accrued obligations shall survive termination.</li>
            </ul>
            <p>The following sections of these Terms shall survive termination: Sections 7, 8, 9, 15, 18, 19, 20, and 21.</p>
          </SubSection>

          <SubSection title="17.4 Investigation & Platform Integrity">
            <p>
              Growtt reserves the right to investigate any suspected violation of these
              Terms or applicable law. During any investigation, Growtt may temporarily
              restrict or suspend account access without prior notice. Growtt shall
              cooperate with competent authorities in the investigation of suspected
              criminal activity and is not obligated to disclose the existence of any
              ongoing investigation to the User under investigation.
            </p>
          </SubSection>
        </Section>

        <Section title="18. Limitation of Liability">
          <SubSection title="18.1 Disclaimer of Warranties">
            <p className="uppercase">
              To the fullest extent permitted by applicable law, the platform and all
              content are provided on an "as is" and "as available" basis without any
              warranty of any kind, express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose,
              non-infringement, accuracy, completeness, or availability.
            </p>
          </SubSection>

          <SubSection title="18.2 Exclusion of Consequential Loss">
            <p>To the maximum extent permitted by applicable Nigerian law, Growtt shall not be liable for any:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Investment losses or diminution in the value of financial instruments or assets;</li>
              <li>Lost profits, lost revenue, or loss of anticipated savings;</li>
              <li>Loss of data or loss of access to data;</li>
              <li>Indirect, incidental, consequential, or punitive damages of any nature;</li>
              <li>Losses arising from User reliance on Platform Content, AI Outputs, or Third-Party Provider information;</li>
              <li>Losses arising from service interruptions, Beta Feature failures, or cyberattacks;</li>
              <li>Losses arising from the default, insolvency, or failure of any Third-Party Provider.</li>
            </ul>
          </SubSection>

          <SubSection title="18.3 Cap on Liability">
            <p>
              Where Growtt's liability cannot be fully excluded by law, Growtt's
              aggregate liability to any User in respect of all claims arising under or
              in connection with these Terms shall not exceed the greater of: (a) the
              total fees paid by the User to Growtt in the twelve (12) months preceding
              the claim; or (b) Twenty-Five Thousand Nigerian Naira (NGN 25,000).
            </p>
          </SubSection>

          <SubSection title="18.4 Mandatory Consumer Protection Rights">
            <p>
              Nothing in this Section 18 shall exclude or limit any liability that cannot
              be lawfully excluded or limited under mandatory provisions of Nigerian
              consumer protection law or any other mandatory applicable law.
            </p>
          </SubSection>
        </Section>

        <Section title="19. Indemnity">
          <SubSection title="19.1 User Indemnification Obligations">
            <p>You agree to fully indemnify, defend, and hold harmless Growtt Alternative Investment Solutions Limited, its directors, officers, employees, contractors, agents, licensors, and successors from and against any and all claims, losses, liabilities, damages, costs, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use of or access to the Platform;</li>
              <li>Your breach of these Terms or any applicable policy;</li>
              <li>Your violation of any applicable law or regulation;</li>
              <li>Any User Content you submit to the Platform;</li>
              <li>Your misrepresentation of age, identity, or eligibility;</li>
              <li>Your misuse of AI Tools, gamification features, or community features;</li>
              <li>Any third-party claim arising from your conduct on or through the Platform.</li>
            </ul>
          </SubSection>

          <SubSection title="19.2 Indemnification Process">
            <p>
              Growtt will promptly notify you of any claim for which indemnification is
              sought. You agree to cooperate fully with Growtt in the defence of any such
              claim. Growtt reserves the right to assume exclusive control of the defence
              of any claim at your expense.
            </p>
          </SubSection>
        </Section>

        <Section title="20. Governing Law & Dispute Resolution">
          <SubSection title="20.1 Governing Law">
            <p>
              These Terms and any dispute or claim arising out of or in connection with
              these Terms or the Platform shall be governed by and construed in
              accordance with the laws of the Federal Republic of Nigeria, without regard
              to conflict of laws principles.
            </p>
          </SubSection>

          <SubSection title="20.2 Informal Resolution">
            <p>
              Before initiating any formal dispute resolution process, Users agree to
              make good-faith efforts to resolve any dispute with Growtt informally. To
              initiate informal resolution, send a written notice to Growtt at the
              contact details below describing the nature of the dispute and your
              proposed resolution. Growtt will endeavour to respond within fourteen (14)
              business days.
            </p>
          </SubSection>

          <SubSection title="20.3 Mediation">
            <p>
              If a dispute cannot be resolved informally within thirty (30) days of
              notice, either party may refer the dispute to mediation conducted in
              accordance with the Rules of the Lagos Multi-Door Courthouse (LMDC) or the
              Abuja Multi-Door Courthouse, as agreed between the parties. Mediation shall
              be conducted in English in Lagos or Abuja, Nigeria.
            </p>
          </SubSection>

          <SubSection title="20.4 Litigation">
            <p>
              If a dispute cannot be resolved through mediation within sixty (60) days of
              mediation commencement, either party may initiate legal proceedings. The
              parties irrevocably submit to the exclusive jurisdiction of the courts of
              the Federal Republic of Nigeria, with venue in Lagos State or the Federal
              Capital Territory, Abuja, as determined by Growtt.
            </p>
          </SubSection>

          <SubSection title="20.5 Class Action Waiver">
            <p>
              To the fullest extent permitted by applicable law, you agree to resolve
              disputes with Growtt on an individual basis. You waive any right to
              participate in any class action lawsuit, class-wide arbitration, or any
              other proceeding in which you or any other person acts as a representative
              of others.
            </p>
          </SubSection>

          <SubSection title="20.6 Cross-Border Users">
            <p>
              Users accessing the Platform from jurisdictions outside Nigeria do so
              voluntarily and accept that Nigerian law governs these Terms. Such Users
              retain any mandatory legal rights afforded by the laws of their home
              jurisdiction that cannot be contractually waived, and nothing in these
              Terms is intended to contract out of such mandatory rights.
            </p>
          </SubSection>
        </Section>

        <Section title="21. General Provisions">
          <SubSection title="21.1 Severability">
            <p>
              If any provision of these Terms is found by a court of competent
              jurisdiction to be invalid, unlawful, or unenforceable, that provision shall
              be severed from these Terms, and the remaining provisions shall continue in
              full force and effect. The severed provision shall be replaced by a valid,
              enforceable provision that, to the greatest extent possible, achieves the
              original intent of the severed provision.
            </p>
          </SubSection>

          <SubSection title="21.2 Waiver">
            <p>
              Growtt's failure to exercise or enforce any right or provision of these
              Terms shall not constitute a waiver of such right or provision. Any waiver
              must be in writing and signed by an authorised representative of Growtt to
              be effective. A waiver of any particular breach shall not constitute a
              waiver of any subsequent breach.
            </p>
          </SubSection>

          <SubSection title="21.3 Assignment">
            <p>
              You may not assign, transfer, delegate, or otherwise dispose of your rights
              or obligations under these Terms without Growtt's prior written consent.
              Growtt may freely assign these Terms, or any rights or obligations
              hereunder, to any affiliate, successor entity, or purchaser of all or
              substantially all of Growtt's assets, without your consent.
            </p>
          </SubSection>

          <SubSection title="21.4 Survival">
            <p>
              All provisions of these Terms that by their nature should survive
              termination shall so survive, including without limitation: Section 7
              (Educational Content Disclaimer), Section 8 (Risk Disclosures), Section 9
              (AI Disclaimer), Section 15 (Intellectual Property), Section 18 (Limitation
              of Liability), Section 19 (Indemnity), Section 20 (Governing Law), and this
              Section 21.
            </p>
          </SubSection>

          <SubSection title="21.5 Entire Agreement">
            <p>
              These Terms, together with the Privacy Policy and any other policies
              incorporated by reference herein, constitute the entire agreement between
              you and Growtt with respect to the Platform and supersede all prior
              agreements, representations, and understandings, whether written or oral,
              relating to the subject matter hereof.
            </p>
          </SubSection>

          <SubSection title="21.6 No Third-Party Beneficiaries">
            <p>
              These Terms are for the benefit of Growtt and Users only. Nothing in these
              Terms shall create or imply any rights in any third party, whether by way
              of the Contracts (Rights of Third Parties) Act or otherwise.
            </p>
          </SubSection>

          <SubSection title="21.7 Notices">
            <p>
              Notices to Growtt under these Terms should be sent to: Growtt Alternative
              Investment Solutions Limited, Email: info@growtt.com (or such updated
              address as Growtt may publish on the Platform). Notices to Users will be
              sent to the email address provided during registration.
            </p>
          </SubSection>

          <SubSection title="21.8 Language">
            <p>
              These Terms are drafted in the English language. In the event of any
              conflict between an English version and any translation, the English
              version shall prevail.
            </p>
          </SubSection>
        </Section>

        <p className="text-sm text-gray-500 mt-10">
          © 2026 Growtt Alternative Investment Solutions Ltd.
        </p>
      </section>
    </div>
  );
};

export default Terms;
