import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { SpinningText } from "../components/SpinningText";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-50 to-pink-500/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <img src={logo} />
              </div>
              <span className="text-xl font-bold text-gray-900">SweetBobi</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting premium cosmetics that celebrate individuality and
              enhance natural beauty.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.tiktok.com/@sweetbobi"
                className="text-gray-500 hover:text-pink-500 transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaTiktok />
              </motion.a>
              <motion.a
                href="https://wa.me/+263712505368"
                className="text-gray-500 hover:text-pink-500 transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sweetbobi"
                className="text-gray-500 hover:text-pink-500 transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/christelletarisirochimukoko"
                className="text-gray-500 hover:text-pink-500 transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-4"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm">
              Get the latest beauty tips and exclusive offers.
            </p>
            <div className="space-y-3">
              <motion.div
                className="w-full  text-gray-600 text-sm px-4 my-16 "
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <SpinningText>
                  SweetBobi ❤️ Smell Good ❤️ Look Good ❤️
                </SpinningText>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center">
            <span className="text-sm text-gray-500">
              &copy; 2025 SweetBobi. All rights reserved.
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
