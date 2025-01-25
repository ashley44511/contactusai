import * as React from "react";
import { NavItem } from "../components/causes/NavItem";
import { CauseItem } from "../components/causes/CauseItem";
import { FooterSection } from "../components/causes/FooterSection";

const navItems = ["Causes", "Generate Email", "Representatives", "Contact"];

const causes = [
  "Agriculture and Food",
  "Animals",
  "Armed Forces and National Security",
  "Arts, Culture, Religion",
  "Civil Rights & Liberties, Minority Issues",
  "Commerce",
  "Congress",
  "Crime and Law Enforcement",
  "Economics and Public Finance",
  "Education",
  "Emergency Management",
  "Energy",
  "Environmental Protection",
  "Families",
  "Finance and Financial Sector",
  "Foreign Trade and International Finance",
  "Government Operations and Politics",
  "Health",
  "Housing & Community Development",
  "Immigration",
  "International Affairs",
  "Labor and Employment",
  "Law",
  "Native Americans",
  "Public Lands and Natural Resources",
  "Science, Technology, and Communication",
  "Social Science and History",
  "Social Welfare",
  "Sports and Recreation",
  "Taxation",
  "Transportation and Public Works",
  "Water Resources Development",
];

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

export const CausesPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex justify-center items-start w-full leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-6 items-center p-8 w-full bg-gray-400 border-b basis-0 border-zinc-300 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/87005295dc18543d068b0b04f89b4d5b24855b7ed8c3236439b5dcca211f1a1f?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
            alt="Logo"
            className="object-contain shrink-0 gap-6 self-stretch my-auto w-10 aspect-[1.14]"
          />
          <div className="flex flex-wrap flex-1 shrink gap-2 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            {navItems.map((item, index) => (
              <NavItem key={index} text={item} />
            ))}
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/41713e3a252f87b0c9f3537fc468565fb10dc258d8c62001d717751a2a78883f?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
        alt="Banner"
        className="object-contain self-center max-w-full aspect-[10.2] w-[1058px]"
      />

      <div className="flex overflow-hidden flex-wrap gap-4 justify-center items-center py-16 pr-16 w-full bg-white text-[color:var(--sds-color-text-default-default)] max-md:pr-5 max-md:max-w-full">
        <div className="grow shrink self-stretch my-auto tracking-tighter leading-tight text-center font-[number:var(--sds-typography-title-page-font-weight)] text-[length:var(--sds-typography-title-page-size-base)] w-[999px] max-md:max-w-full max-md:text-4xl">
          Select causes to support:
        </div>

        <div className="flex flex-col grow shrink self-stretch my-auto leading-6 rounded-md font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[length:var(--sds-typography-body-size-medium)] w-[804px] max-md:max-w-full">
          <div className="grid grid-cols-4 gap-4">
            {causes.map((cause, index) => (
              <CauseItem key={index} label={cause} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10 w-full tracking-tight leading-tight text-center whitespace-nowrap font-[number:var(--sds-typography-heading-font-weight)] min-w-[420px] pl-[525px] pr-[524px] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-heading-size-base)] max-md:px-5 max-md:max-w-full">
        <button className="flex overflow-hidden justify-center items-center p-3 border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]">
          <span className="self-stretch my-auto">Continue</span>
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
                  {[4, 5, 6, 7].map((num) => (
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
