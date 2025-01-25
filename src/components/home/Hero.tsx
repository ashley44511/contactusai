import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-center leading-[1.2] justify-center max-md:max-w-full">
      <div className="bg-[rgba(255,255,255,0.8)] flex w-full flex-col items-center justify-center px-6 py-[100px] max-md:max-w-full max-md:px-5">
        <div className="w-[879px] max-w-full text-[color:var(--sds-color-text-utilities-text-on-overlay)]">
          <h1 className="text-[length:var(--sds-typography-title-hero-size)] font-[number:var(--sds-typography-title-hero-font-weight)] tracking-[-2.16px] max-md:max-w-full max-md:text-[40px]">
            ContactUS.ai
          </h1>
          <p className="text-[length:var(--sds-typography-subtitle-size-base)] font-[number:var(--sds-typography-subtitle-font-weight)] mt-2 max-md:max-w-full">
            Contact your representatives quickly with the power of AI
          </p>
        </div>
        <div className="flex items-center gap-4 justify-center mt-8">
          <Button 
            className="self-stretch rounded-[var(--sds-size-radius-200)] bg-[color:var(--sds-color-background-brand-default)] text-[color:var(--sds-color-text-brand-on-brand)] font-[number:var(--sds-typography-heading-font-weight)] tracking-[-0.48px]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;