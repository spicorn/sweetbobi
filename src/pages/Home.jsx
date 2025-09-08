import { ThreeDMarquee } from "../components/ThreeDMarquee";
import { motion } from "framer-motion";
import { SparklesText } from "../components/SparklesText";
import AnimatedText from "../components/AnimatedText";

const Home = () => {
  // Sample cosmetic product images for the 3D marquee using placeholder services
  const cosmeticImages = [
    "https://images.yaga.co.za/c9gr1t3jsh8/e1c90d.jpeg?s=600",
    "https://arthur-ford.com/cdn/shop/files/WebsiteCollection_1080x1080_Blue_2_NoVariants_d274b1ca-43d1-4c86-8dec-2d0f07f39471.png?v=1751463599",
    "https://arthur-ford.com/cdn/shop/files/white.png?v=1751985918&width=1500",
    "https://arthur-ford.com/cdn/shop/files/black.png?v=1752062723&width=1500",
    "https://www.citizen.co.za/zululand-observer/wp-content/uploads/sites/56/2017/02/arthur-ford-products.jpg",
    "https://ucarecdn.com/b261200e-6b4e-4336-a814-2bd873abd0b6/-/format/auto/-/preview/3000x3000/-/quality/lighter/black.jpg",
    "https://images.ctfassets.net/jm2gu7mo3iyi/6QaA65qnyjlldnYLRfwh1/9c51027ee4080f6d0b025bc847494274/1005003.jpg",
    "https://cdn.shopify.com/s/files/1/0275/2351/4468/files/1198_116_6752e4ca1b6787.86857396_20-arthur_ford_body_lotion_blue_231_creative_large_cb5ba1a6-193b-4967-b1e2-226563bdc6ee_large.jpg?v=1748723933",
    "https://aqualogica.in/cdn/shop/files/shoot_a938da08-e236-4451-94c3-cf8652f0cf2e.jpg?v=1726640760",
    "https://arthur-ford.com/cdn/shop/files/534_548_619607ee4e3c19.61468627_black_235_large_3e77a6ce-a8a2-414a-9ce6-cedf40637f62.jpg?v=1748722405&width=533",
    "https://www.goodvibesonly.in/cdn/shop/products/1_94406be2-9d09-4c17-b4a7-da1698cf8a43_1080x.jpg?v=1680671235",
    "https://www.supermart.ng/cdn/shop/files/spmzz1248_f196f1fb-53aa-4937-943e-d5518dfca133.jpg?v=1738219613",
    "https://plumgoodness.com/cdn/shop/files/0001_ae2eacc0-5b86-4fb1-98e8-663d2dd2acfb.jpg?v=1731391326",
    "https://rubysorganics.in/cdn/shop/products/lipstcikshootimage_b804d088-2db4-499d-8964-014ba4e5170f_1100x.jpg?v=1720004675",
    "https://www.zeromakeup.com/cdn/shop/files/Lipstick-RoseNude-2.jpg?v=1727073912&width=480",
    "https://i.ebayimg.com/images/g/K7EAAOSwKyZlrBSe/s-l1200.jpg",
    "https://i.ebayimg.com/images/g/IKoAAOSwupJlrBt5/s-l400.jpg",
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-pink-500/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section with 3D Marquee and Overlaid Content */}
      <div className="relative mb-16">
        {/* 3D Marquee Background */}
        <motion.div
          className="w-full h-[600px]"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <ThreeDMarquee images={cosmeticImages} className="w-full h-full" />
        </motion.div>

        {/* Overlaid Text Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end items-start lg:flex-row lg:items-center lg:justify-end z-10 pb-4 md:pb-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="max-w-md ml-8 md:ml-16 lg:ml-0 lg:mr-16 space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight drop-shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Cosmetics that
                </motion.span>
                <motion.span
                  className="block text-pink-600"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <SparklesText>Everyone loves!</SparklesText>
                </motion.span>
              </motion.h1>
              <motion.span
                className=" leading-relaxed max-w-md drop-shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <AnimatedText
                  text={[
                    "I have a huge collection of cosmetic products.",
                    "Come shop with Sweetbobi❤️",
                    "Where Quality products are sold.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </motion.span>
            </div>

            <motion.a
              href="#products"
              className="inline-block bg-white hover:bg-pink-50 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Explore Products
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Social Links and Footer moved to App.jsx for single-page layout */}
    </motion.div>
  );
};

export default Home;
