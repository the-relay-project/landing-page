'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { label: 'Features', href: '/features' },
    { 
      label: 'Solutions', 
      href: '#',
      dropdown: [
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Teams', href: '/teams' },
        { label: 'Personal', href: '/personal' }
      ]
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Docs', href: '/docs' },
    { label: 'Blog', href: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 shadow-lg backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-white text-xl font-bold">Relay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div key={index} className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                  <button 
                    className={cn(
                      "flex items-center text-gray-300 hover:text-white transition-colors",
                      isDropdownOpen && "text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-gray-800">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-gray-300 hover:text-white transition-colors",
                    pathname === item.href && "text-white font-medium"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/status" 
              className="text-sm text-gray-300 hover:text-white"
            >
              Status
            </Link>
            <Link 
              href="/login" 
              className="text-sm text-gray-300 hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.dropdown ? (
                  <>
                    <div className="px-3 py-2 text-gray-300 font-medium">
                      {item.label}
                    </div>
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-base text-gray-400 hover:text-white hover:bg-gray-800 rounded-md"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800 rounded-md",
                      pathname === item.href && "bg-gray-800 text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-800">
              <div className="space-y-1">
                <Link
                  href="/status"
                  className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Status
                </Link>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {children}
    </header>
  );
}