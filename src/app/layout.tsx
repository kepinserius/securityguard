import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Security Guard - Solusi Keamanan Cerdas",
  description: "Security Guard menyediakan solusi keamanan digital dengan teknologi AI terdepan. Kenali produk unggulan kami: CyberLens, aplikasi mobile untuk mendeteksi penipuan dan ancaman keamanan.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased min-h-screen">
        <Preloader />
        {children}
        <ScrollToTop />
        <Script id="scroll-parallax">{`
          document.addEventListener('DOMContentLoaded', function() {
            window.addEventListener('scroll', function() {
              const parallaxSlows = document.querySelectorAll('.parallax-slow');
              const parallaxFasts = document.querySelectorAll('.parallax-fast');
              const scrollY = window.scrollY;
              
              // Apply parallax effect to slow elements
              parallaxSlows.forEach(function(element) {
                element.style.setProperty('--parallax-y', scrollY * 0.05 + 'px');
              });
              
              // Apply parallax effect to fast elements
              parallaxFasts.forEach(function(element) {
                element.style.setProperty('--parallax-y', scrollY * 0.1 + 'px');
              });
            });
            
            // Reveal elements on scroll
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
              observer.observe(el);
            });
          });
        `}</Script>
      </body>
    </html>
  );
}
