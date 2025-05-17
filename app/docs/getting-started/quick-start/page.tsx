import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Terminal, Code, Wrench, Copy, CheckSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quick Start | The Relay Project Documentation',
  description: 'Learn how to quickly get started with The Relay Project, the all-in-one platform for communication, content, and commerce.',
};

export default function QuickStartPage() {
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
        <span className="text-white">Quick Start</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Quick Start Guide</h1>
      
      <div className="rounded-md bg-blue-900/20 border border-blue-700/30 p-4 mb-8">
        <p className="text-sm">
          <span className="font-medium text-blue-400">Note:</span> This guide will help you set up your first Relay workspace in under 10 minutes.
        </p>
      </div>
      
      <p className="mb-8 text-lg text-gray-300">
        Follow these simple steps to get up and running with Relay quickly. This guide covers the basics of creating your account, setting up your first workspace, and inviting team members.
      </p>

      <div className="space-y-12 mb-12">
        {/* Step 1 */}
        <div>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 mr-4 mt-1">
              <span className="font-bold">1</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
              <p className="mb-4 text-gray-300">
                Visit <Link href="https://relay.app/signup" className="text-blue-400 hover:text-blue-300">https://relay.app/signup</Link> and create your account. You can sign up using your email address or with your Google, Microsoft, or GitHub account.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-medium">Required Information</span>
                </div>
                <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Password (minimum 8 characters)</li>
                </ul>
              </div>
              <p className="text-gray-400 text-sm">
                After signing up, you'll receive a verification email. Click the link in the email to verify your account.
              </p>
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 mr-4 mt-1">
              <span className="font-bold">2</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Create Your First Workspace</h2>
              <p className="mb-4 text-gray-300">
                Once your account is verified, you'll be prompted to create your first workspace. A workspace is where you and your team will collaborate.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-grow">
                    <div className="font-medium mb-2">Workspace Setup</div>
                    <ol className="list-decimal list-inside pl-2 text-gray-400 space-y-2">
                      <li>Enter a name for your workspace (e.g., "Marketing Team" or "Project Alpha")</li>
                      <li>Select your workspace type:
                        <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                          <li>Team (for business/collaborative work)</li>
                          <li>Personal (for individual use)</li>
                          <li>Community (for open communities)</li>
                        </ul>
                      </li>
                      <li>Choose your workspace URL: relay.app/[your-workspace-name]</li>
                    </ol>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your workspace URL must be unique across the Relay platform. Workspace names can be changed later, but changing the URL is not recommended once you've shared it with others.
              </p>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 mr-4 mt-1">
              <span className="font-bold">3</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Customize Your Workspace</h2>
              <p className="mb-4 text-gray-300">
                Now it's time to customize your workspace to fit your team's needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-400" />
                    Workspace Settings
                  </h3>
                  <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                    <li>Upload a workspace logo</li>
                    <li>Set a workspace description</li>
                    <li>Configure workspace timezone</li>
                    <li>Set default language</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-400" />
                    Channel Setup
                  </h3>
                  <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                    <li>Create channels for different topics</li>
                    <li>Set channel permissions</li>
                    <li>Set up default channels for new members</li>
                    <li>Create private channels for sensitive discussions</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                You can access workspace settings anytime by clicking on the workspace name in the top-left corner and selecting "Workspace Settings" from the dropdown menu.
              </p>
            </div>
          </div>
        </div>
        
        {/* Step 4 */}
        <div>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 mr-4 mt-1">
              <span className="font-bold">4</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Invite Your Team</h2>
              <p className="mb-4 text-gray-300">
                Now that your workspace is set up, it's time to invite your team members to join.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="font-medium mb-3">Invitation Options</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Terminal className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Email Invitations</span>
                      <p className="text-sm text-gray-400 mt-1">
                        Send personalized email invitations directly from Relay. Go to "Members" → "Invite" and enter email addresses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Terminal className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Invitation Links</span>
                      <p className="text-sm text-gray-400 mt-1">
                        Generate invitation links that you can share with your team via your preferred channels. From "Members" → "Invite" → "Create Invitation Link".
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Terminal className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Bulk Import</span>
                      <p className="text-sm text-gray-400 mt-1">
                        For larger teams, you can import users in bulk using a CSV file. Go to "Members" → "Import".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 text-sm">
                <p className="text-yellow-400 font-medium">
                  Pro Tip:
                </p>
                <p className="text-gray-300 mt-1">
                  You can set member roles during invitation (Admin, Member, Guest). Admins have full control over the workspace, Members can create and participate in channels, and Guests have limited access.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 5 */}
        <div>
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 mr-4 mt-1">
              <span className="font-bold">5</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Start Collaborating</h2>
              <p className="mb-4 text-gray-300">
                Congratulations! Your Relay workspace is now set up and ready for collaboration. Here are some things you can do right away:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-400" />
                    Communication
                  </h3>
                  <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                    <li>Send messages in channels</li>
                    <li>Start direct conversations</li>
                    <li>Create group chats</li>
                    <li>Schedule video meetings</li>
                    <li>Share files and media</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-400" />
                    Content Creation
                  </h3>
                  <ul className="list-disc list-inside pl-2 text-gray-400 space-y-1">
                    <li>Create shared documents</li>
                    <li>Build a knowledge base</li>
                    <li>Collaborate on wikis</li>
                    <li>Set up project boards</li>
                    <li>Organize files and resources</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Explore the platform to discover more features and capabilities. The more you use Relay, the more customized and valuable it becomes for your team.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold mb-3">Need help getting started?</h3>
                <p className="text-gray-300 mb-4">
                  Check out our interactive tutorials that guide you through key features step-by-step.
                </p>
                <Link
                  href="/docs/tutorials/basics"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  Launch Interactive Tutorials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-12">Next Steps</h2>
      <p className="mb-6 text-gray-300">
        Now that you've set up your basic workspace, you might want to explore these advanced features:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Link 
          href="/docs/features/integrations"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Integrations
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Connect Relay with your favorite tools and services.
          </p>
        </Link>
        
        <Link 
          href="/docs/features/automation"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Workflow Automation
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Automate repetitive tasks and streamline your workflows.
          </p>
        </Link>
        
        <Link 
          href="/docs/features/commerce"
          className="block p-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 rounded-lg transition-all"
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Commerce Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </h3>
          <p className="text-sm text-gray-400">
            Set up your marketplace and manage transactions.
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
            Learn about the fundamental concepts behind Relay.
          </p>
        </Link>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-800/30">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:flex-grow">
            <h3 className="text-xl font-bold mb-2">Ready to unlock more features?</h3>
            <p className="text-gray-300 mb-4 md:mb-0">
              Upgrade to our Pro or Business plan to access advanced features and capabilities.
            </p>
          </div>
          <div className="md:ml-6">
            <Link 
              href="/pricing"
              className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}