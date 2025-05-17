'use client'

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Check, Code, Layers, MessageSquare, Settings, ShoppingCart, Building2, Users, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at top left, rgba(255,255,255,0.1) 0%, transparent 50%)",
          y: y1
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(255,255,255,0.1) 0%, transparent 60%)",
          y: y2
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Where <span className="relative">
            <span className="relative z-10">Work</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-3 bg-white opacity-20"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span> Flows
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The complete platform that unifies communication, content, and commerce for both enterprises and consumers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "bg-white text-black px-8 py-3 rounded-md font-medium",
              "flex items-center justify-center"
            )}
          >
            Enterprise Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "border border-white bg-transparent px-8 py-3 rounded-md font-medium",
              "flex items-center justify-center"
            )}
          >
            Consumer Platform
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="floating"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Features section
const Features = () => {
  const features = [
    { 
      title: "Communication Hub", 
      icon: <MessageSquare className="h-8 w-8" />,
      description: "Seamlessly integrate chat, video calls, and file sharing in one place."
    },
    { 
      title: "Knowledge Base", 
      icon: <Code className="h-8 w-8" />,
      description: "Create, share and collaborate on documents, wikis, and databases."
    },
    { 
      title: "Commerce Platform", 
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Manage inventory, process sales, and run an integrated marketplace."
    },
    { 
      title: "Team Management", 
      icon: <Users className="h-8 w-8" />,
      description: "Organize workflows, assign tasks, and track project progress."
    },
    { 
      title: "Content Delivery", 
      icon: <Layers className="h-8 w-8" />,
      description: "Distribute and manage content across your entire organization."
    },
    { 
      title: "Enterprise Controls", 
      icon: <Settings className="h-8 w-8" />,
      description: "Advanced security, compliance, and administrative tools."
    },
  ];

  return (
    <div className="bg-white text-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            One Platform, Endless Possibilities
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Relay Project replaces the need for multiple disconnected tools with a single unified experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-black text-white p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Split section for Enterprise vs Consumer
const SplitSection = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block">
              <Building2 className="h-12 w-12 mb-4" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
            <ul className="space-y-4">
              {[
                "Advanced security and compliance controls",
                "Custom workflows and automation",
                "Dedicated support and SLAs",
                "User management and analytics",
                "Seamless integration with existing tools"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <Check className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-black px-6 py-3 rounded-md font-medium inline-flex items-center max-w-xs"
            >
              Explore Enterprise
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block">
              <User className="h-12 w-12 mb-4" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Consumer Platform</h2>
            <ul className="space-y-4">
              {[
                "Personal workspace and organization",
                "Integrated shopping and marketplace",
                "Social features and community",
                "Simplified content creation",
                "Cross-device synchronization"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <Check className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 border border-white bg-transparent px-6 py-3 rounded-md font-medium inline-flex items-center max-w-xs"
            >
              Discover Consumer
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Animated UI showcase with 3D effect
const UIShowcase = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0.3, 1]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.5], [5, 0]);
  
  return (
    <div className="bg-gray-50 py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Beautiful User Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clean, intuitive interfaces designed for both power users and beginners.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative mx-auto"
          style={{
            scale,
            opacity,
            rotateX: rotate,
            transformPerspective: "1000px"
          }}
        >
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="h-8 bg-gray-900 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-48 flex-shrink-0">
                  <div className="h-10 bg-gray-800 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-8 bg-gray-800 rounded w-full"></div>
                    <div className="h-8 bg-gray-800 rounded w-full"></div>
                    <div className="h-8 bg-gray-800 rounded w-full"></div>
                    <div className="h-8 bg-gray-800 rounded w-full"></div>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="h-10 bg-gray-800 rounded mb-4"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="h-24 bg-gray-800 rounded"></div>
                    <div className="h-24 bg-gray-800 rounded"></div>
                    <div className="h-24 bg-gray-800 rounded"></div>
                    <div className="h-24 bg-gray-800 rounded"></div>
                  </div>
                  <div className="h-40 bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
    </div>
  );
};

// Testimonial Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nexus has transformed how our global team collaborates. We've eliminated 8 separate tools and simplified our workflow.",
      author: "Sarah Johnson",
      title: "CTO, Global Innovations Inc."
    },
    {
      quote: "As a freelancer, having all my work, communication, and shop in one place has been game-changing for productivity.",
      author: "Michael Chen",
      title: "Independent Designer"
    },
    {
      quote: "The enterprise controls give us the security we need while the intuitive interface means minimal training for staff.",
      author: "Amara Okafor",
      title: "Operations Director, Nexgen Solutions"
    }
  ];
  
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Trusted by Teams Everywhere</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Relay is transforming the way people work and connect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CTA Section
const CTA = () => {
  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to transform how you work?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the thousands of teams and individuals who have simplified their digital lives with Nexus.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-md font-medium flex items-center justify-center"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white bg-transparent px-8 py-4 rounded-md font-medium flex items-center justify-center"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">The Relay Project</h3>
            <p className="text-gray-400">The all-in-one platform for work and life.</p>
          </div>
          
          {[
            {
              title: "Product",
              links: ["Features", "Enterprise", "Consumer", "Security", "Pricing"]
            },
            {
              title: "Resources",
              links: ["Documentation", "Tutorials", "Blog", "Community", "Support"]
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Contact", "Partners"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 The Relay Project. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">Nexus</a>
        
        <div className="hidden md:flex space-x-8">
          {["Features", "Enterprise", "Consumer", "Pricing"].map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-5 py-2 rounded-md font-medium hidden md:block"
        >
          Early Access
        </motion.button>
        
        <button className="text-white md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

// 3D Animation Component (simplified version without Three.js for better compatibility)
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -500 - 100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="bg-white">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <SplitSection />
      <UIShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;