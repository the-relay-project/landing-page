import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Server, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation | The Relay Project',
  description: 'Documentation for The Relay Project - the all-in-one platform for communication, content, and commerce.',
};

export default function DocsPage() {
  const features = [
    {
      title: 'User Guides',
      description: 'Learn how to use the platform effectively for your daily workflow.',
      icon: <Users className="h-6 w-6" />,
      href: '/docs/user-guide/workspaces',
    },
    {
      title: 'API Documentation',
      description: 'Integrate with our platform using our comprehensive API.',
      icon: <Code className="h-6 w-6" />,
      href: '/docs/api/authentication',
    },
    {
      title: 'Deployment Guides',
      description: 'Set up and manage your own instance of the platform.',
      icon: <Server className="h-6 w-6" />,
      href: '/docs/deployment/self-hosting',
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step guides to help you get the most out of Relay.',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/docs/tutorials',
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Relay Documentation</h1>
        <p className="text-xl text-gray-300 mb-6">
          Welcome to the official documentation for The Relay Project, your all-in-one platform that unifies communication, content, and commerce.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/docs/api/authentication"
            className="inline-flex items-center px-4 py-2 border border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800 rounded-md text-sm font-medium transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>

      <div className="py-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-8">
            Browse Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/50 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">
            Still in Development
          </h2>
          <p className="text-gray-300 mb-4">
            The Relay Project is currently in active development. Features and documentation may change as we continue to improve the platform.
          </p>
          <p className="text-gray-300">
            Want to contribute or report an issue? Check out our
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              GitHub repository
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}