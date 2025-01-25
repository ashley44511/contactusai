import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex min-h-[212px] w-full max-md:max-w-full">
      <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="content-start flex-wrap border-t-[length:var(--sds-size-stroke-border)] border-t-[color:var(--sds-color-border-default-default)] bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#AAC8B9] flex w-full gap-[16px_var(--sds-size-space-400)] overflow-hidden flex-1 h-full pt-[var(--sds-size-space-800)] pr-[var(--sds-size-space-800)] pb-[var(--sds-size-space-4000)] pl-[var(--sds-size-space-800)] pt-8 pb-40 px-8 border-solid max-md:max-w-full max-md:pb-[100px] max-md:px-5">
          <div className="flex min-w-60 flex-col w-[262px]">
            <div className="flex items-center gap-4">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b107b4d77b35e3707793121b0a0c0febd845f880f665d5dc3d5a2402e8338ef5?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Social icon 1" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2991479fb8e2c313fa76d1fa50816da3913f40bbb89881e0cfa04f128b9b4fe8?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Social icon 2" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2692f2c2c3498e370cf606c0d4461de7731b87c7d4739a3d03bd305098a7b1d?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Social icon 3" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04fcced03b357b65259638cc10cecb6704d8bd1117ef666fd69f9b122db52bdb?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Social icon 4" />
            </div>
          </div>

          <div className="flex min-w-60 flex-col text-[length:var(--sds-typography-body-size-medium)] text-[color:var(--sds-color-text-brand-on-brand)] font-[number:var(--sds-typography-body-font-weight-regular)] whitespace-nowrap leading-[1.4] w-[262px]">
            <h3 className="self-stretch w-full font-[number:var(--sds-typography-body-font-weight-strong)]">Steps</h3>
            <Link to="/causes" className="w-[89px] mt-3 hover:underline">Causes</Link>
            <Link to="/email" className="w-[89px] mt-3 hover:underline">Email</Link>
            <Link to="/representatives" className="w-[89px] mt-3 hover:underline">Representatives</Link>
          </div>

          <div className="flex min-w-60 flex-col text-[length:var(--sds-typography-body-size-medium)] text-[color:var(--sds-color-text-brand-on-brand)] font-[number:var(--sds-typography-body-font-weight-regular)] whitespace-nowrap leading-[1.4] w-[262px]">
            <h3 className="self-stretch w-full font-[number:var(--sds-typography-body-font-weight-strong)]">Contact</h3>
            <a href="https://github.com" className="w-[89px] mt-3 hover:underline">GitHub</a>
            <a href="mailto:contact@contactus.ai" className="w-[89px] mt-3 hover:underline">Email</a>
          </div>

          <div className="flex min-w-60 flex-col text-[length:var(--sds-typography-body-size-medium)] text-[color:var(--sds-color-text-brand-on-brand)] font-[number:var(--sds-typography-body-font-weight-regular)] whitespace-nowrap leading-[1.4] w-[262px]">
            <h3 className="self-stretch w-full font-[number:var(--sds-typography-body-font-weight-strong)]">Pages</h3>
            <Link to="/" className="w-[89px] mt-3 hover:underline">Home</Link>
            <Link to="/causes" className="w-[89px] mt-3 hover:underline">Causes</Link>
            <Link to="/email" className="w-[89px] mt-3 hover:underline">Email</Link>
            <Link to="/representatives" className="w-[89px] mt-3 hover:underline">Representatives</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;