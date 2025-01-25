import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex w-full text-[length:var(--sds-typography-body-size-medium)] text-[color:var(--sds-color-text-default-default)] font-[number:var(--sds-typography-body-font-weight-regular)] leading-none justify-center max-md:max-w-full">
      <nav className="bg-[rgba(170,200,185,1)] flex min-w-60 w-full items-center gap-6 overflow-hidden flex-wrap flex-1 shrink basis-[0%] p-8 border-[rgba(217,217,217,1)] border-b max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?placeholderIfAbsent=true"
          className="aspect-[1.14] object-contain w-10 self-stretch shrink-0 gap-6 my-auto"
          alt="Logo"
        />
        <div className="self-stretch flex min-w-60 gap-2 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Link to="/" className="self-stretch gap-2 whitespace-nowrap p-2 rounded-lg hover:bg-white/20 transition-colors">
            Home
          </Link>
          <Link to="/causes" className="self-stretch gap-2 whitespace-nowrap p-2 rounded-lg hover:bg-white/20 transition-colors">
            Causes
          </Link>
          <Link to="/email" className="self-stretch gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors">
            Generate Email
          </Link>
          <Link to="/representatives" className="self-stretch gap-2 whitespace-nowrap p-2 rounded-lg hover:bg-white/20 transition-colors">
            Representatives
          </Link>
          <Link to="/contact" className="self-stretch gap-2 whitespace-nowrap p-2 rounded-lg hover:bg-white/20 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;