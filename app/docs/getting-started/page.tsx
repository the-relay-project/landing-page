import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Getting Started | The Relay Project Documentation',
  description: 'Learn how to get started with The Relay Project, the all-in-one platform for communication, content, and commerce.',
};

export default function GettingStartedPage() {
  return (
    <div>
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
        <Link href="/docs" className="hover:text-white">
          Documentation
        </Link>
        <span>/</span>
        <span className="text-white">Getting Started</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Getting Started with Relay</h1>
      
      <div className="rounded-md bg-blue-900/20 border border-blue-700/30 p-4 mb-8">
        <p className="text-sm">
          <span className="font-medium text-blue-400">Note:</span> Relay is currently in early access. Features and documentation may change as we continue to develop the platform.
        </p>
      </div>
      
      <p className="mb-6 text-lg text-gray-300">
        The Relay Project is a unified platform that brings together communication, content management, and commerce capabilities into a single, seamless experience. This guide will help you get up and running quickly.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">What is Relay?</h2>
      
      <p className="mb-4">
        Relay is designed to replace the need for multiple disconnected tools with a cohesive experience that connects teams, content, and customers in one place. Whether you're an individual creator, a small team, or a large enterprise, Relay simplifies your workflow and reduces tool switching.
      </p>
      
      <h3 className="text-xl font-bold mb-4 mt-8">Key Features</h3>
      
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Communication Hub:</strong> Seamlessly integrate chat, video calls, and file sharing in one place.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Knowledge Base:</strong> Create, share and collaborate on documents, wikis, and databases.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Commerce Platform:</strong> Manage inventory, process sales, and run an integrated marketplace.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Team Management:</strong> Organize workflows, assign tasks, and track project progress.</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">System Requirements</h2>
      
      <p className="mb-4">
        Relay can be accessed through your web browser or via our desktop and mobile applications:
      </p>
      
      <ul className="space-y-2 mb-6">
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Web:</strong> Modern browsers like Chrome, Firefox, Safari, or Edge</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Desktop:</strong> Windows 10/11, macOS 10.14+, or Linux</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-blue-400">•</span>
          <span><strong>Mobile:</strong> iOS 13+ or Android 8+</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Next Steps</h2>
      
      <p className="mb-6">
        Ready to dive in? Follow our quick start guide to set up your first workspace and start exploring the platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Link 
          href="/docs/getting-started/quick-start"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Quick Start Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Get up and running with Relay in minutes.
          </p>
        </Link>
        
        <Link 
          href="/docs/getting-started/core-concepts"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Core Concepts
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Learn about the fundamental concepts in Relay.
          </p>
        </Link>
      </div>

      <div className="mt-8 p-4 border border-gray-700 rounded-lg bg-gray-800">
        <h3 className="text-lg font-bold mb-2">Need Help?</h3>
        <p className="text-gray-300 mb-4">
          If you encounter any issues or have questions, our support team is here to help.
        </p>
        <Link 
          href="/contact"
          className="text-blue-400 hover:text-blue-300 inline-flex items-center"
        >
          Contact Support
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}