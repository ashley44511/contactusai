import * as React from "react";
import { CauseCard } from "../components/emailBuilder/CauseCard";
import { NavLink } from "../components/emailBuilder/NavLink";
import { FooterSection } from "../components/emailBuilder/FooterSection";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';


const navLinks = [
  { label: "Causes" },
  { label: "Generate Email" },
  { label: "Representatives" },
  { label: "Contact" },
];

const causes = Array(6).fill({ title: "My Cause", subtitle: "Cause" });

const footerSections = [
  {
    title: "Steps",
    links: [
      { label: "Causes" },
      { label: "Email" },
      { label: "Representatives" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "GitHub" }, { label: "Email" }],
  },
  {
    title: "Pages",
    links: [
      { label: "Home" },
      { label: "Causes" },
      { label: "Email" },
      { label: "Representatives" },
    ],
  },
];

export function EmailBuilder() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/dabc10873c81ca8d2b9660d000ca028c998306c3ae911a63bd3fe593fac35535?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
        alt=""
        className="object-contain self-center max-w-full aspect-[10.2] w-[1058px]"
      />
      <div className="flex flex-col justify-center items-center self-center p-16 w-full tracking-tighter leading-tight text-center bg-white font-[number:var(--sds-typography-title-page-font-weight)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-title-page-size-base)] max-md:px-5 max-md:max-w-full">
        <div className="max-w-full w-[595px] max-md:max-w-full max-md:text-4xl">
          Finalize Your Response
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-12 justify-center items-start p-5 w-full text-center bg-white text-[color:var(--sds-color-text-default-default)] max-md:max-w-full">
        {causes.map((cause, index) => (
          <CauseCard key={index} {...cause} />
        ))}
      </div>
      <div className="flex overflow-hidden gap-10 justify-center items-start px-2.5 py-5 w-full leading-snug whitespace-nowrap bg-white font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
        <div className="flex flex-col min-h-[504px] min-w-[240px] w-[655px]">
          <label htmlFor="responseInput" className="max-md:max-w-full">
            Response
          </label>
          <div className="flex overflow-hidden relative flex-1 gap-1 items-start px-4 py-3 mt-2 bg-white rounded-lg border border-solid border-zinc-300 min-h-[80px] min-w-[240px] size-full max-md:max-w-full">
            <textarea
              id="responseInput"
              className="z-0 flex-1 shrink basis-0 max-md:max-w-full resize-none border-none focus:outline-none"
              placeholder="Dear"
              aria-label="Email response"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/eb0d5d791da3bfcf9d6ca1458adebce54542f7daa830d31fdbd63f9b236ceccc?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
              alt=""
              className="object-contain absolute right-1.5 bottom-1.5 z-0 shrink-0 w-1.5 aspect-[0.86] h-[7px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 w-full tracking-tight leading-tight text-center font-[number:var(--sds-typography-heading-font-weight)] px-[514px] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-heading-size-base)] max-md:px-5 max-md:max-w-full">
      <button className="flex overflow-hidden justify-center items-center p-3 border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]">
        <Button asChild className="self-stretch bg-black text-white rounded-full hover:bg-gray-800">
            <Link to='/submit'>Submit</Link>
        </Button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/4606baba77ecde594d9c31e92e8d89281c163fda004f0c5ac9e5860fe6594733?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
      </div>
      <footer className="flex flex-col w-full max-md:max-w-full">
        <div className="flex items-start w-full min-h-[212px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap flex-1 gap-16 content-start items-start px-8 pt-8 pb-40 border-solid bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),#AAC8B9)] border-t-[color:var(--sds-color-border-default-default)] border-t-[length:var(--sds-size-stroke-border)] pb-[var(--sds-size-space-4000)] pl-[var(--sds-size-space-800)] pr-[var(--sds-size-space-800)] pt-[var(--sds-size-space-800)] size-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-col items-start min-w-[240px] w-[262px]">
                <div className="flex gap-4 items-center">
                  {[5, 6, 7, 8].map((num) => (
                    <img
                      key={num}
                      loading="lazy"
                      src={`http://b.io/ext_${num}-`}
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  ))}
                </div>
              </div>
              {footerSections.map((section, index) => (
                <FooterSection key={index} {...section} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
