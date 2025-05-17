'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Clock, ExternalLink, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// Mock current status data - in a real app, this would come from an API
const MOCK_STATUS = {
  overall: 'operational', // operational, degraded, partial_outage, major_outage
  lastUpdated: '2025-05-17T10:30:00Z',
  components: [
    {
      name: 'API',
      status: 'operational',
      description: 'Relay API services including authentication and data access'
    },
    {
      name: 'Web Application',
      status: 'operational',
      description: 'The Relay web client and all related services'
    },
    {
      name: 'Mobile App',
      status: 'operational',
      description: 'iOS and Android mobile applications'
    },
    {
      name: 'Desktop App',
      status: 'operational',
      description: 'Windows, macOS, and Linux desktop applications'
    },
    {
      name: 'Communication Services',
      status: 'operational',
      description: 'Chat, video calls, and messaging infrastructure'
    },
    {
      name: 'Content Services',
      status: 'operational',
      description: 'Document storage, wiki, and knowledge base'
    },
    {
      name: 'Commerce Platform',
      status: 'operational',
      description: 'Marketplace, payments, and inventory management'
    },
    {
      name: 'Notification System',
      status: 'operational',
      description: 'Push, email, and in-app notifications'
    }
  ],
  incidents: [
    {
      id: 'INC-2025-05-15-001',
      title: 'Scheduled Maintenance',
      status: 'completed',
      created: '2025-05-15T01:00:00Z',
      updated: '2025-05-15T05:00:00Z',
      components: ['API', 'Web Application'],
      updates: [
        {
          timestamp: '2025-05-15T01:00:00Z',
          status: 'scheduled',
          message: 'Scheduled maintenance has begun. Expected downtime: 4 hours.'
        },
        {
          timestamp: '2025-05-15T04:30:00Z',
          status: 'in_progress',
          message: 'Maintenance is nearly complete. Final testing in progress.'
        },
        {
          timestamp: '2025-05-15T05:00:00Z',
          status: 'completed',
          message: 'Scheduled maintenance completed successfully. All systems operational.'
        }
      ]
    },
    {
      id: 'INC-2025-05-10-001',
      title: 'API Performance Degradation',
      status: 'resolved',
      created: '2025-05-10T14:23:00Z',
      updated: '2025-05-10T16:45:00Z',
      components: ['API'],
      updates: [
        {
          timestamp: '2025-05-10T14:23:00Z',
          status: 'investigating',
          message: 'We are investigating reports of API slowdowns affecting some users.'
        },
        {
          timestamp: '2025-05-10T15:10:00Z',
          status: 'identified',
          message: 'The issue has been identified as database connection pooling. Our team is implementing a fix.'
        },
        {
          timestamp: '2025-05-10T16:45:00Z',
          status: 'resolved',
          message: 'The API performance issue has been resolved. We have optimized database connections and restored normal operation.'
        }
      ]
    }
  ]
};

// Helper function to format dates
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Status indicator component
const StatusIndicator = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'partial_outage':
        return 'text-orange-500';
      case 'major_outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className={`h-5 w-5 ${getStatusColor(status)}`} />;
      case 'degraded':
      case 'partial_outage':
      case 'major_outage':
        return <AlertCircle className={`h-5 w-5 ${getStatusColor(status)}`} />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded';
      case 'partial_outage':
        return 'Partial Outage';
      case 'major_outage':
        return 'Major Outage';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex items-center">
      {getStatusIcon(status)}
      <span className={`ml-2 ${getStatusColor(status)}`}>{getStatusText(status)}</span>
    </div>
  );
};

export default function StatusPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock refresh function
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">System Status</h1>
            <p className="text-lg text-gray-300">
              Current status of The Relay Project services
            </p>
          </motion.div>

          {/* Overall Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center mb-8"
          >
            <div className="flex justify-center mb-3">
              {MOCK_STATUS.overall === 'operational' ? (
                <CheckCircle className="h-12 w-12 text-green-500" />
              ) : (
                <AlertCircle className="h-12 w-12 text-yellow-500" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {MOCK_STATUS.overall === 'operational' 
                ? 'All Systems Operational' 
                : 'Some Systems Are Experiencing Issues'}
            </h2>
            <div className="text-gray-400 text-sm flex justify-center items-center mt-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Last updated: {formatDate(MOCK_STATUS.lastUpdated)}</span>
              </div>
              <button 
                onClick={handleRefresh}
                className="ml-4 text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-4 w-4 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Components Status Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-2xl font-bold mb-6"
          >
            Components
          </motion.h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {MOCK_STATUS.components.map((component, index) => (
                  <motion.tr 
                    key={component.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{component.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusIndicator status={component.status} />
                    </td>
                    <td className="px-6 py-4 text-gray-400 hidden md:table-cell">{component.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Incidents Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-2xl font-bold mb-6"
          >
            Recent Incidents
          </motion.h2>
          {MOCK_STATUS.incidents.map((incident, index) => (
            <motion.div 
              key={incident.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
              className="mb-6 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{incident.title}</h3>
                    <div className="text-sm text-gray-400 mb-4">
                      {incident.status === 'resolved' || incident.status === 'completed' ? (
                        <span className="inline-flex items-center text-green-500">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {incident.status === 'resolved' ? 'Resolved' : 'Completed'}
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-yellow-500">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {incident.status === 'investigating' ? 'Investigating' : 'In Progress'}
                        </span>
                      )}
                      <span className="mx-2">•</span>
                      <span>{formatDate(incident.created)}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Affected: </span>
                      {incident.components.join(', ')}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 border-t border-gray-800 pt-4">
                  <h4 className="text-sm font-medium mb-3">Updates</h4>
                  <div className="space-y-4">
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-gray-700 before:rounded-full">
                        <div className="text-sm">
                          <div className="text-gray-400 mb-1">{formatDate(update.timestamp)}</div>
                          <div>{update.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-center mt-8"
          >
            <Link 
              href="/status/history"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              View full incident history
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Subscribe to Updates</h2>
            <p className="text-gray-300 mb-8">
              Get notified about incidents and maintenance notifications via email.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              You can unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}