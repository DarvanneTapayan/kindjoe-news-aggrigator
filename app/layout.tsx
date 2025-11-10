// app/layout.tsx
import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'KindJoe News — Aggregator',
  description: 'A clean, fast news aggregator built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/* Force strong base text color on body */}
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />
        {/* Ensure everything below inherits solid text color */}
        <div className="text-gray-900">{children}</div>
      </body>
    </html>
  );
}
