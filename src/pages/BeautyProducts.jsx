import { AnimatedTestimonials } from "../components/AnimatedTestimonials";
import { ExpandableCardDemo } from "../components/Product";
import { AnimatedListDemo } from "../components/ListAnime";
import { motion } from "framer-motion";
import pic1 from "../assets/img/pic1.jpg";
import pic2 from "../assets/img/pic2.jpg";
import pic3 from "../assets/img/pic3.jpg";
import pic4 from "../assets/img/pic4.jpg";

const BeautyProducts = () => {
  const testimonials = [
    {
      src: pic1,
      name: "Maria M",
      designation: "Beauty Enthusiast",
      quote:
        "There is just something about Arthur Ford that hits different one spray and I feel like I have stepped into my best version of the day. It is not just a scent, it is a whole mood.",
    },
    {
      src: pic2,
      name: "Emma T",
      designation: "Lifestyle Blogger",
      quote:
        "The tissue oil has been a game changer since I started using it. My face is flawless💯.",
    },
    {
      src: pic3,
      name: "Sophie C",
      designation: "Stylist",
      quote:
        "No a day passes without someone asking which spray i use. Arthur Ford products💯💯💯.",
    },
    {
      src: pic4,
      name: "Chena C",
      designation: "Stylist",
      quote:
        "A combination of the roll on body lotion and the perfume is out of this world . The scent is a💯.",
    },
  ];

  return (
    <div className="min-h-screen">
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
            Beauty <span className="text-pink-500">Products</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Discover our carefully curated collection of premium cosmetics and
            skincare products, personally tested and selected for your beauty
            journey
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              ✨ 100% Tested Products
            </span>
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              🌟 Premium Quality
            </span>
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              💎 Luxury Brands
            </span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl  shadow-sm">
          <div className="marquee">
            <div className="marquee-track flex items-center gap-6 py-4">
              {[
                {
                  label: "Skincare",
                  icon: "🧴",
                  color: "from-pink-100 to-pink-50 text-pink-700 ring-pink-200",
                },
                {
                  label: "Body Care",
                  icon: "🛁",
                  color:
                    "from-purple-100 to-purple-50 text-purple-700 ring-purple-200",
                },
                {
                  label: "Anti Aging",
                  icon: "⏳",
                  color: "from-rose-100 to-rose-50 text-rose-700 ring-rose-200",
                },
                {
                  label: "Eye Care",
                  icon: "👁️",
                  color: "from-blue-100 to-blue-50 text-blue-700 ring-blue-200",
                },
                {
                  label: "Sun Protection",
                  icon: "☀️",
                  color:
                    "from-amber-100 to-amber-50 text-amber-700 ring-amber-200",
                },
                {
                  label: "Lip Care",
                  icon: "💄",
                  color:
                    "from-fuchsia-100 to-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
                },
                {
                  label: "Hand Care",
                  icon: "🤲",
                  color:
                    "from-green-100 to-green-50 text-green-700 ring-green-200",
                },
              ].map((item, index) => (
                <motion.span
                  key={`cat-a-${index}`}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-br ${item.color} px-6 py-2 text-sm font-semibold ring-1 shadow-sm`}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </motion.span>
              ))}
              {[
                {
                  label: "Skincare",
                  icon: "🧴",
                  color: "from-pink-100 to-pink-50 text-pink-700 ring-pink-200",
                },
                {
                  label: "Body Care",
                  icon: "🛁",
                  color:
                    "from-purple-100 to-purple-50 text-purple-700 ring-purple-200",
                },
                {
                  label: "Anti Aging",
                  icon: "⏳",
                  color: "from-rose-100 to-rose-50 text-rose-700 ring-rose-200",
                },
                {
                  label: "Eye Care",
                  icon: "👁️",
                  color: "from-blue-100 to-blue-50 text-blue-700 ring-blue-200",
                },
                {
                  label: "Sun Protection",
                  icon: "☀️",
                  color:
                    "from-amber-100 to-amber-50 text-amber-700 ring-amber-200",
                },
                {
                  label: "Lip Care",
                  icon: "💄",
                  color:
                    "from-fuchsia-100 to-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
                },
                {
                  label: "Hand Care",
                  icon: "🤲",
                  color:
                    "from-green-100 to-green-50 text-green-700 ring-green-200",
                },
              ].map((item, index) => (
                <motion.span
                  key={`cat-b-${index}`}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-br ${item.color} px-6 py-2 text-sm font-semibold ring-1 shadow-sm`}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Categories Showcase */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-50 to-pink-500/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you need with our organized product categories
            </p>
          </div>

          <ExpandableCardDemo />
        </div>
      </motion.section>

      {/* Product Quality Assurance */}
      <motion.section
        className="py-2 bg-gradient-to-b from-gray-50 to-pink-500/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Our Products Are Special
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Every product in our collection has been personally tested and
                selected by me, ensuring you get only the highest quality
                cosmetics and skincare items.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Personal Testing
                    </h4>
                    <p className="text-gray-600">
                      I test every product myself before adding it to our
                      collection
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Ingredients
                    </h4>
                    <p className="text-gray-600">
                      Only products with premium, safe ingredients make the cut
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Customer Feedback
                    </h4>
                    <p className="text-gray-600">
                      Products are chosen based on real customer experiences and
                      reviews
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="gap-1 justify-items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <AnimatedListDemo />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Customer Reviews Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-50 to-pink-500/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from women who've transformed their beauty routines
              with our products
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </motion.section>
    </div>
  );
};

export default BeautyProducts;
