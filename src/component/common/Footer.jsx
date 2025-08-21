import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-30"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-white mb-4 gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              RV Home Sol
            </motion.h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
              Professional interior design and home planning solutions with 2D & 3D visualization. 
              We transform your spaces with creativity, quality, and 20+ years of expertise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <div className="p-2 bg-indigo-600/20 rounded-lg">
                  <MapPin size={18} />
                </div>
                <span>Makrana, Rajasthan, India</span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <div className="p-2 bg-indigo-600/20 rounded-lg">
                  <Phone size={18} />
                </div>
                <a href="tel:+917568807817">+91 7568807817</a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <div className="p-2 bg-indigo-600/20 rounded-lg">
                  <Mail size={18} />
                </div>
                <a href="mailto:ramvijaysahani49@gmail.com">ramvijaysahani49@gmail.com</a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 text-gray-300"
              >
                <div className="p-2 bg-indigo-600/20 rounded-lg">
                  <Clock size={18} />
                </div>
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Our Services" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#process", label: "Design Process" },
                { href: "#testimonials", label: "Client Reviews" },
                { href: "#about", label: "About Us" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Interior Design",
                "2D & 3D Planning",
                "Home Renovation",
                "Space Planning",
                "Color Consultation",
                "Custom Furniture"
              ].map((service, index) => (
                <motion.li
                  key={service}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow us:</span>
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Twitter, href: "#", label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="https://wa.me/917568807817"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 pulse-glow"
          >
            Start Your Project Today
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500"
        >
          <p>&copy; {currentYear} RV Home Sol by Ram Vijay Sahani. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}