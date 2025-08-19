import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";
import recent1 from "../assets/recent1.jpeg"
import recent2 from "../assets/recent2.jpeg"
import recent3 from "../assets/recent3.jpeg"
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
// ===================== Recent Works =====================
const RecentWorks = () => {
  const works = [
    {
      img: recent1,
      location: "Borawar,Rajasthan",
    },
    {
      img: recent2,
      location: "Makrana,Rajasthan",
    },
    {
      img: recent3,
      location: "Borawar,Rajasthan",
    }
    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring"} },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent <span className="text-indigo-600">Works</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {works.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white transition cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.location}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 font-medium text-center text-lg">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ===================== Home Page =====================
const Home = () => {
  return (
    <div className="w-full">
      {/* ================= Hero / Banner ================= */}
      <section className="h-screen w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {[banner1,banner2].map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-screen w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-transparent bg-opacity-40 p-8 rounded-2xl text-center text-white max-w-2xl"
                >
                
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= Recent Works ================= */}
      <RecentWorks />

      {/* ================= Services ================= */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="text-indigo-600">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Interior Design",
                desc: "Modern, stylish, and functional interior designs tailored to your taste.",
                icon: "🎨",
              },
              {
                title: "2D and 3D",
                desc: "High-quality 2d and 3d Models that bring life and elegance to your home.",
                icon: "🖌️",
              },
              {
                title: "Renovation",
                desc: "Complete renovation solutions to give your space a fresh new look.",
                icon: "🏡",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="p-8 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= About ================= */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px] bg-black rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src={logo}
                alt="About Us"
                className="max-h-full max-w-full object-fill scale-200 rounded-2xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-800"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About <span className="text-indigo-600">Us</span>
            </motion.h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              With over 20 years of experience, we specialize in interior
              designing and Home Planning works(2D&3d). Our mission is to
              transform houses into beautiful, welcoming homes that reflect your
              style.
              <br />
              <br />
              We take contracts for designing, and complete renovation work with
              professional craftsmanship and quality assurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= Call to Action ================= */}
      <section
        id="contact"
        className="py-24 bg-indigo-300 text-white text-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="mb-10 text-lg max-w-2xl mx-auto">
            Contact us today for a free consultation and bring your dream
            interiors to life.
          </p>
          <a
            href="https://wa.me/917568807817"
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
