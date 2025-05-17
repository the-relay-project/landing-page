import DocsLayout from '@/components/layouts/DocsLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}