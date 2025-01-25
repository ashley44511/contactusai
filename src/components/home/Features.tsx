import React from 'react';

const Features = () => {
  return (
    <section className="flex w-full gap-2.5 justify-center flex-wrap max-md:max-w-full">
      <div className="bg-white min-w-60 w-full flex-1 shrink basis-[0%] p-16 max-md:max-w-full max-md:px-5">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-heading-size-base)] font-[number:var(--sds-typography-heading-font-weight)] leading-[1.2] tracking-[-0.48px] max-md:max-w-full">
            Contact your representatives now to make your voice heard!
          </h2>
          <p className="text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-subheading-size-medium)] font-[number:var(--sds-typography-subheading-font-weight)] leading-6 mt-2 max-md:max-w-full">
            ContactUS.ai makes contacting your representatives as easy as possible. Harness the power of AI to generate impactful emails and send them directly to your Representative.
          </p>
        </div>
        <div className="flex w-full items-center gap-16 justify-center flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
          <div className="self-stretch flex min-w-60 gap-6 flex-wrap w-[301px] my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea772f6ee902ff191fd3db460c543d3323d52d2aefdb3f77198363230a2986b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-8 shrink-0"
              alt="Who is your rep icon"
            />
            <div className="min-w-40 flex-1 shrink basis-[0%]">
              <h3 className="text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-heading-size-base)] font-[number:var(--sds-typography-heading-font-weight)] leading-[1.2] tracking-[-0.48px]">
                Who Is YOUR Rep?
              </h3>
              <p className="text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-body-size-medium)] font-[number:var(--sds-typography-body-font-weight-regular)] leading-[22px] mt-2">
                Make your vote count by talking directly to your congressional district representative
              </p>
            </div>
          </div>
          
          <div className="self-stretch flex min-w-60 gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed316db6f2f4a28f21991cfe3ec2bbe3f7f5f335c3486f08704303e3d4bccf26?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-8 shrink-0"
              alt="Causes icon"
            />
            <div className="min-w-40 flex-1 shrink basis-[0%]">
              <h3 className="text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-heading-size-base)] font-[number:var(--sds-typography-heading-font-weight)] leading-[1.2] tracking-[-0.48px]">
                Causes YOU Care About
              </h3>
              <p className="text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-body-size-medium)] font-[number:var(--sds-typography-body-font-weight-regular)] leading-[22px] mt-2">
                Need ideas about what to write about? Select causes that are important to you before writing to your congress representative.
              </p>
            </div>
          </div>

          <div className="self-stretch flex min-w-60 gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a2451ef7bf8a6dbec336add357cf6265d0dc917b7b26c8eda5394a9257fbf?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-8 shrink-0"
              alt="Voice icon"
            />
            <div className="min-w-40 flex-1 shrink basis-[0%]">
              <h3 className="text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-heading-size-base)] font-[number:var(--sds-typography-heading-font-weight)] leading-[1.2] tracking-[-0.48px]">
                Let YOUR Voice Shine
              </h3>
              <p className="text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-body-size-medium)] font-[number:var(--sds-typography-body-font-weight-regular)] leading-[22px] mt-2">
                Not a writer? No problem! AI can generate impactful emails about issues you care about with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;