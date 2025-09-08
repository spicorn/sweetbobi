import { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import EmailCard from "../components/EmailCard";
import AppCard from "../components/AppCard";

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-init");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-pink-500/40">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
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
            Let's <span className="text-pink-600">Connect</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I'm here to help you find the perfect beauty products and answer all
            your questions
          </motion.p>
        </div>
      </motion.section>

      {/* Quick Contact Options */}
      <motion.section
        className="py-16 bg-gradient-to-b from-gray-50 to-pink-500/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 place-items-center">
            <motion.div
              className="text-center p-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Card />
            </motion.div>

            <motion.div
              className="text-center p-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <EmailCard />
            </motion.div>

            <motion.div
              className="text-center p-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <AppCard />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - Animated Accordion */}
      <motion.section
        className="relative py-24 bg-gradient-to-b from-gray-50 to-pink-50/40 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Quick answers about our quality, services, and policies.
            </p>
          </div>
          <motion.div
            className="divide-y divide-gray-200 bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                q: "How do you ensure product quality?",
                a: "I personally test every product and partner only with trusted suppliers that meet strict quality and safety standards.",
              },
              {
                q: "Do you offer bulk ordering for businesses?",
                a: "Yes. I work with salons, spas, and retailers. Contact me directly for bulk pricing and wholesale options.",
              },
              {
                q: "Can you help me choose the right products?",
                a: "Absolutely. I offer personalized consultations tailored to your skin type, concerns, and goals.",
              },
              {
                q: "What's your return policy?",
                a: "If a product doesn't suit you, contact me within 30 days for an exchange, recommendation, or return assistance.",
              },
            ].map((item, idx) => (
              <details key={idx} className="group">
                <summary className="cursor-pointer select-none list-none p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                  <span className="mt-1 w-6 h-6 rounded-md bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center text-sm shadow">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.q}
                    </h3>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <motion.div
                  className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35 }}
                >
                  {item.a}
                </motion.div>
              </details>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow hover:shadow-md transition"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Still have questions? Contact me
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
