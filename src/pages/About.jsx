import { motion } from "framer-motion";
import tarisiro from "../assets/img/tarisiro.jpg"

const About = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-b from-gray-50 to-pink-500/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About <span className="text-pink-600">SweetBobi</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Your trusted beauty partner, connecting you with the world's finest
            cosmetics and skincare products.
          </motion.p>
        </div>

        {/* Founder Story Section */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Meet Your Beauty Expert
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Hi, I'm Christelle! A passionate beauty enthusiast who turned my
                love for cosmetics into a thriving business. I started SweetBobi
                with one simple mission: to bring premium beauty products
                directly to amazing women like you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 4 years of experience in the beauty industry, I've
                carefully curated a collection of products that I personally use
                and love. Every item in our store has been tested, approved, and
                selected with your beauty journey in mind.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💄</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Christelle Tarisiro Chimukoko(Sweetbobi❤️)
                  </p>
                  <p className="text-pink-600">Founder & Beauty Curator</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center"
                initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-4xl text-pink-600 font-bold">
                  <img
                    src={tarisiro}
                    className=" rounded-full object-cover shadow-lg"
                  />
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
