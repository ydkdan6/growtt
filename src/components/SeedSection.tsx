import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function SeedsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Gill_Sans_MT',sans-serif]">
            <span className="text-gray-900">Seeds: Your Currency for Smarter </span>
            <span className="text-[#FF9800]">Growtt</span>
          </h2>
          <p className="text-lg text-gray-900 max-w-5xl mx-auto font-['Gill_Sans_MT',sans-serif]">
            Introducing Seeds, a new way to access premium features and content within our
            platform. Earn Seeds by engaging with educational content and redeem them for
            exclusive investment tools, personalized advisory services, and more.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {/* Card 1 - Placeholder Image */}
          <motion.div
            variants={fadeInUp}
            className="relative h-[301px] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/affc96d2a25ef361abfee5fb12a5fa5ce8766ee5"
              alt="Investment"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 p-4 backdrop-blur-sm">
              <h3 className="text-[#F5F5F5] text-center font-['Gill_Sans_MT',sans-serif] mb-1">
                Invest with Seeds
              </h3>
              <p className="text-[#F5F5F5]/60 text-sm text-center font-['Gill_Sans_MT',sans-serif]">
                Our algorithm matches your experience in investing
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Invest with Seeds */}
          <motion.div
            variants={fadeInUp}
            className="relative h-[301px] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e1429284bf60c17dc6ec67bc0f63e2a262621999"
              alt="Invest with Seeds"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 p-4 backdrop-blur-sm">
              <h3 className="text-[#F5F5F5] text-center font-['Gill_Sans_MT',sans-serif] mb-1">
                Invest with Seeds
              </h3>
              <p className="text-[#F5F5F5]/60 text-sm text-center font-['Gill_Sans_MT',sans-serif]">
                Our algorithm matches your experience in investing
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Advisory with Seeds */}
          <motion.div
            variants={fadeInUp}
            className="relative h-[301px] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cd2bf3b5cce97af2b128ed603606181936235e37"
              alt="Advisory with Seeds"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 p-4 backdrop-blur-sm">
              <h3 className="text-[#F5F5F5] text-center font-['Gill_Sans_MT',sans-serif] mb-1">
                Advisory with Seeds
              </h3>
              <p className="text-[#F5F5F5]/60 text-sm text-center font-['Gill_Sans_MT',sans-serif]">
                Redeem Seeds for personalized financial advice from experts.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Content with Seeds */}
          <motion.div
            variants={fadeInUp}
            className="relative h-[301px] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ff04d73a0bb8176c0d58bef7cfe0d1826fb7561c"
              alt="Content with Seeds"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 p-4 backdrop-blur-sm">
              <h3 className="text-[#F5F5F5] text-center font-['Gill_Sans_MT',sans-serif] mb-1">
                Content with Seeds
              </h3>
              <p className="text-[#F5F5F5]/60 text-sm text-center font-['Gill_Sans_MT',sans-serif]">
                Exchange Seeds for exclusive market insights and research reports.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
