import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Clock,
  Palette,
  Home as HomeIcon,
  Lightbulb,
  Eye,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Quote
} from "lucide-react";

// Hero Images
const heroImages = [
  "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTU3NTk2NTB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1649083048770-82e8ffd80431?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTU3NTk2NTB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc1NTc1OTY1NXww&ixlib=rb-4.1.0&q=85"
];

// Portfolio Images
const portfolioImages = [
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTU3NTk2ODR8MA&ixlib=rb-4.1.0&q=85",
    location: "Modern Living Room, Borawar",
    type: "Interior Design"
  },
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTU3NTk2ODR8MA&ixlib=rb-4.1.0&q=85",
    location: "Luxury Suite, Makrana",
    type: "Complete Renovation"
  },
  {
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NTU3NTk2ODR8MA&ixlib=rb-4.1.0&q=85",
    location: "Contemporary Space, Jaipur",
    type: "2D & 3D Planning"
  },
  {
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxiZWRyb29tfGVufDB8fHx8MTc1NTc1OTY5MHww&ixlib=rb-4.1.0&q=85",
    location: "Master Bedroom, Udaipur",
    type: "Interior Design"
  },
  {
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxiZWRyb29tfGVufDB8fHx8MTc1NTc1OTY5MHww&ixlib=rb-4.1.0&q=85",
    location: "Elegant Bedroom, Ajmer",
    type: "Luxury Design"
  },
  {
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    location: "Family Home, Jodhpur",
    type: "Full Renovation"
  }
];

// Testimonial Data
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1NTc1OTcyOHww&ixlib=rb-4.1.0&q=85",
    rating: 5,
    review: "RV Home Sol transformed our house into a dream home! Their attention to detail and creative vision exceeded our expectations. The 3D designs helped us visualize everything perfectly."
  },
  {
    name: "Rajesh Gupta",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1584940121730-93ffb8aa88b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1NTc1OTcyOHww&ixlib=rb-4.1.0&q=85",
    rating: 5,
    review: "Professional service from start to finish. Ram Vijay's team delivered our office renovation on time and within budget. Highly recommend their expertise in interior design."
  },
  {
    name: "Anita Mehta",
    role: "Interior Enthusiast",
    image: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg",
    rating: 5,
    review: "Amazing work! They completely renovated our kitchen and living room. The modern design perfectly matches our lifestyle. Worth every penny!"
  },
  {
    name: "Vikram Singh",
    role: "Hotel Owner",
    image: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1NTc1OTcyOHww&ixlib=rb-4.1.0&q=85",
    rating: 5,
    review: "Outstanding commercial interior design for our boutique hotel. Their creative approach and quality craftsmanship brought our vision to life beautifully."
  }
];

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-2"
    >
      {count}{suffix}
    </motion.div>
  );
};

// Typing Animation Component
const TypingAnimation = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return <span className={className}>{currentText}<span className="animate-pulse">|</span></span>;
};

// Hero Section Component
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Parallax */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{ y }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Transform Your{" "}
              <TypingAnimation 
                texts={["Dream Home", "Living Space", "Interior Design"]} 
                className="gradient-text"
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            We bring your ideas to life with modern interior designs, 2D & 3D planning, and renovation expertise. Creating beautiful, functional spaces for over 20 years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 70, 229, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.a>
            
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "20+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Hundreds of Clients
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our numbers speak for our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 500, suffix: "+", label: "Projects Completed", icon: HomeIcon },
              { number: 20, suffix: "+", label: "Years Experience", icon: Award },
              { number: 450, suffix: "+", label: "Happy Clients", icon: Users },
              { number: 98, suffix: "%", label: "Satisfaction Rate", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 backdrop-blur-md p-4 rounded-2xl inline-block mb-4"
                >
                  <stat.icon size={32} className="text-white" />
                </motion.div>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with enhanced animations continues in next part... */}
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234f46e5" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive interior design solutions tailored to your unique style and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Interior Design",
                desc: "Modern, stylish, and functional interior designs tailored to your taste and lifestyle preferences.",
                icon: Palette,
                color: "from-blue-500 to-indigo-600",
                features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"]
              },
              {
                title: "2D & 3D Visualization",
                desc: "High-quality 2D plans and 3D models that bring life and elegance to your design vision.",
                icon: Eye,
                color: "from-purple-500 to-pink-600", 
                features: ["Floor Plans", "3D Renderings", "Virtual Walkthroughs", "Material Boards"]
              },
              {
                title: "Complete Renovation",
                desc: "Full-service renovation solutions to give your space a fresh new look with quality craftsmanship.",
                icon: HomeIcon,
                color: "from-green-500 to-teal-600",
                features: ["Project Management", "Contractor Coordination", "Timeline Planning", "Quality Control"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-block p-4 bg-gradient-to-br ${service.color} text-white rounded-2xl mb-6 shadow-lg`}
                  >
                    <service.icon size={32} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section continues in next file due to length... */}
    </div>
  );
}