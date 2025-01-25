import * as React from "react";
import Header from '@/components/layout/Header';
import { NavItem } from "../components/emailGenerator/NavItem";
import { InputField } from "../components/emailGenerator/InputField";
import { FooterSection } from "../components/emailGenerator/FooterSection";

const navItems = ["Causes", "Generate Email", "Representatives", "Contact"];
const footerSections = [
  {
    title: "Steps",
    links: ["Causes", "Email", "Representatives"],
  },
  {
    title: "Contact",
    links: ["GitHub", "Email"],
  },
  {
    title: "Pages",
    links: ["Home", "Causes", "Email", "Representatives"],
  },
];

export const EmailPage: React.FC = () => {
  return (
    
    <div className="flex overflow-hidden flex-col bg-white">
      <Header/>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/3e4410870497195ed4de97ee9a8fe4a70ee1d0a5450ee1f89017dbdce28ebd8d?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
        alt="Email Generation Banner"
        className="object-contain self-center max-w-full aspect-[10.2] w-[1058px]"
      />

      <main className="flex flex-col justify-center items-center self-center p-16 w-full tracking-tighter leading-tight text-center bg-white font-[number:var(--sds-typography-title-page-font-weight)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-title-page-size-base)] max-md:px-5 max-md:max-w-full">
        <h1 className="max-w-full w-[998px] max-md:max-w-full max-md:text-4xl">
          Generate your personalized email with AI
        </h1>

        <form className="flex overflow-hidden flex-wrap gap-10 justify-center items-start px-2.5 py-5 w-full bg-white font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
          <div className="flex flex-col p-6 w-80 bg-white rounded-lg border border-solid border-zinc-300 min-w-[320px] max-md:px-5">
            <InputField label="First Name" placeholder="First Name" />
            <div className="mt-6">
              <InputField label="Last Name" placeholder="Last Name" />
            </div>
            <div className="mt-6">
              <InputField label="Email" type="email" placeholder="Email" />
            </div>
            <div className="mt-6">
              <label
                htmlFor="extra-info"
                className="text-[color:var(--sds-color-text-default-default)]"
              >
                Extra Information for Email Generation
              </label>
              <textarea
                id="extra-info"
                className="flex overflow-hidden relative gap-1 items-start px-4 py-3 mt-2 w-full bg-white rounded-lg border border-solid border-zinc-300 min-h-[80px] min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)]"
                placeholder="Include specific topics you want to address in your email."
              />
            </div>
            <button className="mt-6 overflow-hidden flex-1 shrink gap-2 self-stretch p-3 w-full rounded-lg border border-solid bg-zinc-800 border-zinc-800 min-w-[240px] text-[color:var(--sds-color-text-brand-on-brand)]">
              Generate
            </button>
          </div>

          <div className="flex flex-col leading-snug whitespace-nowrap min-h-[504px] min-w-[240px] text-[color:var(--sds-color-text-default-default)] w-[655px] max-md:max-w-full">
            <label htmlFor="response" className="max-md:max-w-full">
              Response
            </label>
            <textarea
              id="response"
              className="flex overflow-hidden relative flex-1 gap-1 items-start px-4 py-3 mt-2 bg-white rounded-lg border border-solid border-zinc-300 min-h-[80px] min-w-[240px] size-full max-md:max-w-full"
              readOnly
              value="Dear"
            />
          </div>
        </form>
      </main>

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
                      alt={`Social Icon ${num}`}
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  ))}
                </div>
              </div>
              {footerSections.map((section, index) => (
                <FooterSection
                  key={index}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
