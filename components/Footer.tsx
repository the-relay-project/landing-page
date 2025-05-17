'use client';

import Link from 'next/link';
import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">The Relay Project</h3>
            <p className="text-gray-400">
              The all-in-one platform that unifies communication, content, and commerce.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Enterprise', href: '/enterprise' },
                { label: 'Security', href: '/security' },
                { label: 'Status', href: '/status' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { label: 'Documentation', href: '/docs' },
                { label: 'API Reference', href: '/docs/api' },
                { label: 'Tutorials', href: '/docs/tutorials' },
                { label: 'Blog', href: '/blog' },
                { label: 'Community', href: '/community' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press', href: '/press' },
                { label: 'Contact', href: '/contact' },
                { label: 'Legal', href: '/legal' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} The Relay Project. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Cookies', 'Sitemap'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}