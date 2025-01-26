import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-[rgba(170,200,185,1)] min-h-[75px] w-full max-md:max-w-full">
      <div className="flex items-center justify-center text-center">
        <div className="text-[length:var(--sds-typography-body-size-medium)] text-[color:var(--sds-color-text-brand-on-brand)] font-[number:var(--sds-typography-body-font-weight-regular)] leading-[1.4]">
          <h3 className="font-[number:var(--sds-typography-body-font-weight-strong)]">
            Copyright 2025 - Tyler Audino and Ashley Maurer -{" "}
            <a href="https://github.com" className="hover:underline" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;