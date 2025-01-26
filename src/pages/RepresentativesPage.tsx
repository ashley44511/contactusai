import * as React from "react";
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
import { NavItem } from "../components/representatives/NavItem";
import { SocialIcon } from "../components/representatives/SocialIcon";
import { FooterLinkSection } from "../components/representatives/FooterLinkSection";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Iframe from "react-iframe";

const navItems = ["Causes", "Generate Email", "Representatives", "Contact"];
const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/b107b4d77b35e3707793121b0a0c0febd845f880f665d5dc3d5a2402e8338ef5?apiKey=b48d2253945d4989949efbb42fb5c9e0&",
    alt: "Social Media Icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/44bacd0e433568efb289653de4eb54ceb58a9e18ac8df12c17d6edcf7876daef?apiKey=b48d2253945d4989949efbb42fb5c9e0&",
    alt: "Social Media Icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/bb3144348c5ddf7a616d7285c88e66d8f95bc44e7745b632b2188a641b6b84e1?apiKey=b48d2253945d4989949efbb42fb5c9e0&",
    alt: "Social Media Icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/77b0ce98c615230b347050570ba2a431e9342258433f64a04e426c4f05dd1068?apiKey=b48d2253945d4989949efbb42fb5c9e0&",
    alt: "Social Media Icon 4",
  },
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

export const RepresentativesPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/eb6db2e5a381c7102e26eb611104c867d4b6797f875c90becabe69c8b8ebdbbc?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
        alt="Banner"
        className="object-contain self-center max-w-full aspect-[10.2] w-[1058px]"
      />

      <div className="flex flex-col items-center self-center p-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full leading-tight text-center w-[651px]">
          <h1 className="tracking-tighter font-[number:var(--sds-typography-title-page-font-weight)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-title-page-size-base)] max-md:max-w-full max-md:text-4xl">
            Find your representatives
          </h1>
          <label
            htmlFor="zipcode"
            className="mt-2 font-[number:var(--sds-typography-subheading-font-weight)] text-[color:var(--sds-color-text-default-secondary)] text-[length:var(--sds-typography-subheading-size-medium)] max-md:max-w-full"
          >
            Enter your zip code:
          </label>
        </div>
        <form className="flex gap-3 items-start mt-6 max-w-full w-[338px]">
          <div className="flex flex-col leading-none whitespace-nowrap font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)] w-[249px]">
            <input
              type="text"
              id="zipcode"
              placeholder="Zipcode"
              className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 max-w-full bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] w-[249px]"
              aria-label="Enter zipcode"
            />
          </div>
          <button
            type="submit"
            className="flex overflow-hidden gap-2 justify-center items-center px-3 w-11 h-11 border border-solid bg-zinc-800 border-zinc-800 rounded-[32px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/4bb2f8b7c4080382c751fb738394d74a8e5fbfcfc5df1227843d4e4303498a49?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
              alt="Search"
              className="object-contain self-stretch my-auto w-5 aspect-square"
            />
          </button>
        </form>
      </div>

      <div className="flex overflow-hidden flex-col justify-center p-16 w-full min-h-[723px] max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center p-4">
          {/* Sources for Iframe:
        https://www.npmjs.com/package/react-iframe
        // https://www.govtrack.us/congress/members/map */}
          <Iframe
            url="https://www.govtrack.us/congress/members/embed/mapframe?&bounds=-123.54,43.603,-77.816,28.009"
            width="100%"
            height="575r"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-16 py-10 w-full tracking-tight leading-tight text-center whitespace-nowrap font-[number:var(--sds-typography-heading-font-weight)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-heading-size-base)] max-md:px-5 max-md:max-w-full">
      <button className="flex overflow-hidden justify-center items-center p-3 border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]">
        <Button asChild className="self-stretch bg-black text-white rounded-full hover:bg-gray-800">
            <Link to='/submit'>Continue</Link>
        </Button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/4606baba77ecde594d9c31e92e8d89281c163fda004f0c5ac9e5860fe6594733?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
      </div>

      <Footer/>
    </div>
  );
};
