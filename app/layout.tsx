import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/navbar';
import { Chatbot } from '@/components/chatbot';
import { Footer } from '@/components/footer';

// Remove Google Fonts imports and use local font fallbacks
// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// });

// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
// });

export const metadata: Metadata = {
  title: 'Marketing Collective Asia | Digital Growth Agency',
  description: 'We create digital marketing strategies that scale businesses across Asia. Performance-driven, ROI-focused, and powered by insights.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}