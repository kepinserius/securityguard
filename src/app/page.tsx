import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductFeatures from '../components/ProductFeatures';
import Showcase from '../components/Showcase';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductFeatures />
        <Showcase />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
