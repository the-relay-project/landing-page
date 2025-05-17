'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocsSidebar from '@/components/docs/DocsSidebar';
import { ChevronRight } from 'lucide-react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header children={undefined} />

      <div className="flex-grow flex">
        <DocsSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main className="flex-1 pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto w-full">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
          
          {/* Content footer */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h5 className="text-sm font-medium text-gray-400">Still need help?</h5>
                <p className="mt-1 text-sm text-gray-400">
                  Can't find what you're looking for?
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  Contact Support
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link 
                href="#" 
                className="text-sm text-gray-400 hover:text-white inline-flex items-center"
              >
                Edit this page on GitHub
              </Link>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="#" 
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Previous
                </Link>
                <Link 
                  href="#" 
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}