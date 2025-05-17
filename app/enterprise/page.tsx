'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Building2, Shield, Users, Database, UserCog, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function EnterprisePage() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Enterprise features
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Enterprise-Grade Security",
      description: "Advanced security protocols, SSO integration, custom compliance controls, and dedicated security team."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Dedicated Infrastructure",
      description: "Isolated cloud environment, premium SLAs with 99.99% uptime, and priority resource allocation."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Unlimited Organization Size",
      description: "Support for unlimited users, workspaces, and content with no overage charges."
    },
    {
      icon: <UserCog className="h-10 w-10" />,
      title: "Advanced Administration",
      description: "Custom user roles, granular permissions, and comprehensive audit logs for complete oversight."
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Data Sovereignty",
      description: "Regional data residency options, bring your own key encryption, and custom retention policies."
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "White-Glove Support",
      description: "Dedicated account manager, 24/7 premium support, and custom onboarding & training services."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Enterprise Solutions</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Secure, scalable, and customizable platform for your organization's most important work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  "bg-white text-black px-8 py-3 rounded-md font-medium inline-flex items-center justify-center",
                  "hover:bg-gray-200 transition-colors"
                )}
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/docs/enterprise"
                className={cn(
                  "border border-white bg-transparent px-8 py-3 rounded-md font-medium inline-flex items-center justify-center",
                  "hover:bg-white/10 transition-colors"
                )}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enterprise-Grade Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most secure and scalable implementation of the Relay platform, custom-built for enterprise needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-xl"
              >
                <div className="bg-blue-900/30 p-3 rounded-lg inline-block mb-4 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-10 border border-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your organization?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our enterprise team is ready to help you deploy Relay across your organization with custom solutions tailored to your specific needs.
            </p>
            <Link
              href="/contact"
              className={cn(
                "bg-white text-black px-8 py-4 rounded-md font-medium inline-flex items-center justify-center",
                "hover:bg-gray-200 transition-colors"
              )}
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Trusted by Global Enterprises</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See why leading organizations choose Relay for their critical workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Relay has transformed how our 10,000+ employee organization collaborates across 23 countries. We've consolidated 8 separate tools and improved productivity by 32%.",
                author: "Sarah Chen",
                title: "CIO, Global Innovations Inc."
              },
              {
                quote: "The enterprise security features and dedicated support team made our company-wide deployment simple. Our sensitive data has never been more secure yet accessible to the right people.",
                author: "Michael Rodriguez",
                title: "VP of Technology, Nexgen Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-xl"
              >
                <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg mb-6 text-gray-300">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enterprise vs Standard</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our Enterprise plan compares to our standard offerings.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b border-gray-800"></th>
                  <th className="p-4 text-center border-b border-gray-800 text-gray-400">Standard</th>
                  <th className="p-4 text-center border-b border-gray-800 bg-blue-900/20 text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Users", standard: "Up to 500", enterprise: "Unlimited" },
                  { feature: "Storage", standard: "1TB", enterprise: "Unlimited" },
                  { feature: "Security", standard: "Standard encryption", enterprise: "Advanced security + compliance" },
                  { feature: "Support", standard: "Email & community", enterprise: "24/7 dedicated support" },
                  { feature: "SLA", standard: "99.9% uptime", enterprise: "99.99% uptime" },
                  { feature: "Custom Integrations", standard: "Limited", enterprise: "Unlimited + API" },
                  { feature: "Data Residency", standard: "US only", enterprise: "Custom regions available" },
                  { feature: "Implementation", standard: "Self-service", enterprise: "White-glove onboarding" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-gray-400">{row.standard}</td>
                    <td className="p-4 text-center bg-blue-900/10">
                      <div className="flex items-center justify-center">
                        {row.enterprise}
                        {row.enterprise !== row.standard && (
                          <Check className="ml-2 h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              View full pricing details
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start your enterprise journey</h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact our enterprise team to discuss your organization's specific requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-md font-medium inline-flex items-center justify-center"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white bg-transparent px-8 py-4 rounded-md font-medium inline-flex items-center justify-center"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}