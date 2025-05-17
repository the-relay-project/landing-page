'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Search } from 'lucide-react';
import { DOCUMENTATION_NAV } from '@/lib/docs-navigation';
import { UrlObject } from 'url';

interface DocsSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function DocsSidebar({ sidebarOpen, setSidebarOpen }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full p-3 shadow-lg"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 bg-gray-900 pt-24 pb-10 overflow-y-auto transition-transform transform md:translate-x-0 md:sticky md:top-0 md:h-screen",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md text-sm border border-gray-700 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <nav className="px-4 space-y-8">
          {DOCUMENTATION_NAV.map((section: { title: string; items: { href: string | number | bigint | UrlObject | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }[]; }) => (
            <div key={section.title}>
              <h5 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.items
  .filter((item): item is { href: string | UrlObject; title: React.ReactNode } => 
    typeof item.href === 'string' || typeof item.href === 'object' && item.href !== null)
  .map((item) => (
    <li key={typeof item.href === 'string' ? item.href : JSON.stringify(item.href)}>
      <Link 
        href={item.href}
        className={cn(
          "block py-2 px-3 rounded-md text-sm transition-colors",
          pathname === item.href 
            ? "bg-blue-900/40 text-blue-400"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        )}
      >
        {item.title}
      </Link>
    </li>
))}

              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}