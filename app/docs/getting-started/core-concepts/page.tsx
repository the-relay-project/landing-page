import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Layers, MessageSquare, ShoppingCart, Database, Lock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Core Concepts | The Relay Project Documentation',
  description: 'Learn about the fundamental concepts and architecture of The Relay Project.',
};

export default function CoreConceptsPage() {
  return (
    <div>
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
        <Link href="/docs" className="hover:text-white">
          Documentation
        </Link>
        <span>/</span>
        <Link href="/docs/getting-started" className="hover:text-white">
          Getting Started
        </Link>
        <span>/</span>
        <span className="text-white">Core Concepts</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Core Concepts</h1>
      
      <p className="mb-8 text-lg text-gray-300">
        Understanding the core concepts behind Relay will help you get the most out of the platform. This guide covers the essential ideas and architecture that make Relay a unified platform for communication, content, and commerce.
      </p>

      <div className="space-y-16 mb-12">
        {/* Workspaces */}
        <section>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 mr-6 mt-1 flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Workspaces</h2>
              <p className="mb-4 text-gray-300">
                Workspaces are the top-level containers that organize your team, content, and activities. Think of a workspace as a digital office where everything related to a specific team, project, or organization lives.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Workspace Concepts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Workspace Types</h4>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-2">
                      <li><span className="text-white font-medium">Team Workspaces</span>: For business teams and organizations</li>
                      <li><span className="text-white font-medium">Personal Workspaces</span>: For individual use and organization</li>
                      <li><span className="text-white font-medium">Community Workspaces</span>: For open communities and public projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Workspace Components</h4>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-2">
                      <li><span className="text-white font-medium">Members</span>: Users with different permission levels</li>
                      <li><span className="text-white font-medium">Channels</span>: Spaces for communication and collaboration</li>
                      <li><span className="text-white font-medium">Content</span>: Documents, files, and knowledge bases</li>
                      <li><span className="text-white font-medium">Settings</span>: Configurations and permissions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                A single user can be a member of multiple workspaces, each with its own unique configuration and purpose. Switching between workspaces is seamless within the Relay interface.
              </p>
            </div>
          </div>
        </section>
        
        {/* Communication Hub */}
        <section>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 mr-6 mt-1 flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Communication Hub</h2>
              <p className="mb-4 text-gray-300">
                The Communication Hub is the central nervous system of your Relay workspace, connecting team members through various communication channels and formats.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Communication Modules</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Channels</h4>
                    <p className="text-gray-400 mb-2">
                      Channels are topic-based spaces where team members can share messages, files, and collaborate. Channels can be:
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li><span className="text-white">Public</span>: Visible to all workspace members</li>
                      <li><span className="text-white">Private</span>: Restricted to specific members</li>
                      <li><span className="text-white">Announcement</span>: One-way communication channels</li>
                      <li><span className="text-white">Automated</span>: Channels that integrate with external services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Direct Messages</h4>
                    <p className="text-gray-400">
                      Private conversations between two or more individuals, separate from channels. Direct messages are ideal for quick exchanges, private discussions, and building one-on-one relationships.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Video & Voice Calls</h4>
                    <p className="text-gray-400">
                      Integrated real-time communication allows for seamless transitions from text to voice or video. Features include screen sharing, recording, virtual backgrounds, and call transcriptions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status & Presence</h4>
                    <p className="text-gray-400">
                      Users can set status messages and availability indicators (online, away, do not disturb, etc.) to communicate their current state to teammates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4 text-sm">
                <p className="text-indigo-400 font-medium">
                  Communication Philosophy:
                </p>
                <p className="text-gray-300 mt-1">
                  Relay's communication system is designed around the principle of "right message, right channel" - helping teams determine the appropriate medium for different types of communication to reduce noise and increase clarity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Management */}
        <section>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 mr-6 mt-1 flex-shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Content Management</h2>
              <p className="mb-4 text-gray-300">
                Relay's content management system allows teams to create, organize, and collaborate on various types of content, from simple documents to complex knowledge bases.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Content Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Documents & Notes</h4>
                    <p className="text-gray-400 mb-2">
                      Create and collaborate on rich-text documents with formatting, media embedding, and real-time co-editing.
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>Markdown support</li>
                      <li>Version history</li>
                      <li>Comments and suggestions</li>
                      <li>Templates and formatting tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Wikis & Knowledge Bases</h4>
                    <p className="text-gray-400 mb-2">
                      Build structured information repositories with interconnected pages, categories, and search capabilities.
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>Page hierarchies and nesting</li>
                      <li>Cross-linking between pages</li>
                      <li>Permission-based access</li>
                      <li>Full-text search</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Projects & Tasks</h4>
                    <p className="text-gray-400 mb-2">
                      Manage work with kanban boards, task lists, and project timelines to track progress and responsibilities.
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>Customizable workflows</li>
                      <li>Task assignment and tracking</li>
                      <li>Due dates and reminders</li>
                      <li>Progress visualization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Media & File Management</h4>
                    <p className="text-gray-400 mb-2">
                      Organize and access all workspace files, images, videos, and attachments in a central repository.
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>Advanced search capabilities</li>
                      <li>File preview and versioning</li>
                      <li>Tagging and organization</li>
                      <li>Access controls and sharing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                All content in Relay is:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="font-medium mb-1">Searchable</p>
                  <p className="text-sm text-gray-400">Find anything instantly</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="font-medium mb-1">Interconnected</p>
                  <p className="text-sm text-gray-400">Link between any content</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="font-medium mb-1">Accessible</p>
                  <p className="text-sm text-gray-400">Available across devices</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Commerce Platform */}
        <section>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 mr-6 mt-1 flex-shrink-0">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Commerce Platform</h2>
              <p className="mb-4 text-gray-300">
                Relay's commerce platform allows teams and organizations to sell products, services, and digital goods directly within their workspace ecosystem, providing a seamless experience for both sellers and customers.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Commerce Components</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Marketplace</h4>
                    <p className="text-gray-400">
                      Create a branded storefront to showcase and sell products or services. Marketplaces can be public (accessible to anyone) or private (limited to specific users or groups).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Inventory Management</h4>
                    <p className="text-gray-400">
                      Track physical and digital inventory, set stock alerts, and manage product variants. Supports both physical products and digital downloads.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Payment Processing</h4>
                    <p className="text-gray-400">
                      Secure payment processing with support for multiple currencies, payment methods, and subscription models. Integrated with major payment gateways.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Order Management</h4>
                    <p className="text-gray-400">
                      Track and manage orders from placement to fulfillment. Includes order history, status updates, and customer communication tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 text-sm mb-6">
                <p className="text-green-400 font-medium">
                  Use Cases:
                </p>
                <ul className="list-disc list-inside pl-2 text-gray-300 space-y-1 mt-2">
                  <li>Internal company stores for branded merchandise</li>
                  <li>Digital product sales (ebooks, courses, software)</li>
                  <li>Service booking and appointment scheduling</li>
                  <li>Subscription-based content or membership programs</li>
                  <li>Community marketplaces for member-to-member transactions</li>
                </ul>
              </div>
              <p className="text-gray-400 text-sm">
                The commerce platform is fully integrated with Relay's communication and content systems, allowing for seamless transitions between selling, supporting customers, and managing business operations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Security & Permissions */}
        <section>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 mr-6 mt-1 flex-shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Security & Permissions</h2>
              <p className="mb-4 text-gray-300">
                Relay's security model is built on the principle of granular access control, allowing workspace administrators to precisely manage who can access, view, and modify different elements of the workspace.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Permission Hierarchy</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Workspace-Level Permissions</h4>
                    <p className="text-gray-400 mb-2">
                      Control overall access and capabilities within the workspace. Defined by user roles:
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li><span className="text-white">Owners</span>: Full control over all aspects of the workspace</li>
                      <li><span className="text-white">Administrators</span>: Can manage users, channels, and settings</li>
                      <li><span className="text-white">Members</span>: Standard access to workspace features</li>
                      <li><span className="text-white">Guests</span>: Limited access to specific areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Channel & Content Permissions</h4>
                    <p className="text-gray-400 mb-2">
                      Fine-grained control over who can access specific channels, documents, or content sections:
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li><span className="text-white">View</span>: Can see but not modify content</li>
                      <li><span className="text-white">Comment</span>: Can add comments to content</li>
                      <li><span className="text-white">Edit</span>: Can modify existing content</li>
                      <li><span className="text-white">Manage</span>: Can control settings and permissions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Security Features</h4>
                    <p className="text-gray-400 mb-2">
                      Enterprise-grade security features to protect your data:
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>End-to-end encryption for sensitive communications</li>
                      <li>Two-factor authentication</li>
                      <li>Single Sign-On (SSO) integration</li>
                      <li>Data retention policies and compliance controls</li>
                      <li>Audit logs and security monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 text-sm">
                <p className="text-yellow-400 font-medium">
                  Best Practice:
                </p>
                <p className="text-gray-300 mt-1">
                  Apply the principle of least privilege: Users should have access only to the information and functions they need to perform their roles. Regularly review and audit permissions to ensure they remain appropriate as your team evolves.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Integration & Extensibility */}
        <section>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 mr-6 mt-1 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Integration & Extensibility</h2>
              <p className="mb-4 text-gray-300">
                Relay is designed to work seamlessly with your existing tools and workflows, while also providing powerful ways to extend its functionality through APIs and custom development.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Integration Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Pre-built Integrations</h4>
                    <p className="text-gray-400 mb-2">
                      Connect with popular third-party services:
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>Productivity tools (Google Workspace, Microsoft 365)</li>
                      <li>Project management (Jira, Asana, Trello)</li>
                      <li>CRM systems (Salesforce, HubSpot)</li>
                      <li>Development tools (GitHub, GitLab, Bitbucket)</li>
                      <li>Marketing platforms (Mailchimp, Marketo)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">API & Developer Tools</h4>
                    <p className="text-gray-400 mb-2">
                      Build custom integrations and extensions:
                    </p>
                    <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                      <li>RESTful API with comprehensive documentation</li>
                      <li>Webhook support for event-driven integrations</li>
                      <li>SDK for custom app development</li>
                      <li>Bot framework for automated interactions</li>
                      <li>Custom UI extensions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 text-sm mb-6">
                <p className="text-purple-400 font-medium">
                  Integration Philosophy:
                </p>
                <p className="text-gray-300 mt-1">
                  Relay doesn't aim to replace all your tools but to provide a central hub where information flows seamlessly between systems. This approach allows teams to leverage their existing investments while gaining the benefits of a unified platform.
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                For organizations with unique requirements, Relay offers Enterprise API access and custom development services to create tailored solutions.
              </p>
            </div>
          </div>
        </section>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-16">Putting It All Together</h2>
      <p className="mb-6 text-gray-300">
        Relay's core strength lies in how these concepts work together to create a cohesive experience. Information flows naturally between communication channels, content repositories, and commerce functions, creating a seamless digital workspace.
      </p>

      <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-800/30 p-6 mb-10">
        <h3 className="text-xl font-bold mb-4">Example Workflow</h3>
        <p className="text-gray-300 mb-4">
          Here's how the different components of Relay might work together in a typical scenario:
        </p>
        <ol className="list-decimal list-inside pl-2 text-gray-300 space-y-3">
          <li>
            <span className="font-medium">A team discusses a new product idea</span> in a channel (Communication Hub)
          </li>
          <li>
            <span className="font-medium">They create a collaborative document</span> to outline the concept (Content Management)
          </li>
          <li>
            <span className="font-medium">A project board is set up</span> to track development tasks (Content Management)
          </li>
          <li>
            <span className="font-medium">The team integrates with development tools</span> to track code changes (Integration)
          </li>
          <li>
            <span className="font-medium">Access is carefully managed</span> to protect sensitive product information (Security & Permissions)
          </li>
          <li>
            <span className="font-medium">When ready, the product is listed</span> in the organization's marketplace (Commerce Platform)
          </li>
        </ol>
        <p className="text-gray-300 mt-4">
          Throughout this process, all information, communications, and transactions remain within the Relay ecosystem, creating a complete record and eliminating the need to switch between multiple tools.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
      <p className="mb-6 text-gray-300">
        Now that you understand the core concepts of Relay, you're ready to dive deeper into specific features and functionalities:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <Link 
          href="/docs/user-guide/workspaces"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Workspace Configuration
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Learn how to set up and manage your workspaces effectively.
          </p>
        </Link>
        
        <Link 
          href="/docs/user-guide/communication"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Communication Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Master the various communication tools and features.
          </p>
        </Link>
        
        <Link 
          href="/docs/user-guide/content-creation"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Content Creation Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Create, organize, and manage different types of content.
          </p>
        </Link>
        
        <Link 
          href="/docs/features/commerce"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Commerce Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Set up and manage your marketplace and transactions.
          </p>
        </Link>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:flex-grow">
            <h3 className="text-xl font-bold mb-2">Need help understanding a specific concept?</h3>
            <p className="text-gray-300 mb-4 md:mb-0">
              Our support team is available to answer any questions you might have about Relay's architecture and functionality.
            </p>
          </div>
          <div className="md:ml-6">
            <Link 
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              Contact Support
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}