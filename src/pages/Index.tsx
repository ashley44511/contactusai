import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ImageGallery from '@/components/home/ImageGallery';
import Features from '@/components/home/Features';

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <ImageGallery />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;