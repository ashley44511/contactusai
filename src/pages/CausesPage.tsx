import React, {useState} from "react";
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
import { NavItem } from "../components/causes/NavItem";
import { CauseItem } from "../components/causes/CauseItem";
import { FooterSection } from "../components/causes/FooterSection";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {useDataStorageContext} from '@/context/DataStorageContext';


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


export const CausesPage: React.FC = () => {
  const {selectedCauses, setSelectedCauses} = useDataStorageContext();

  const toggleCause = (cause: string) => {
    setSelectedCauses((prevSelected) =>
      prevSelected.includes(cause)
        ? prevSelected.filter((item) => item !== cause) // Remove if already selected
        : [...prevSelected, cause] // Add if not selected
    );
  };

  const handleSaveCauses = () => {
    console.log("Selected Causes: " + selectedCauses);
  }

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/41713e3a252f87b0c9f3537fc468565fb10dc258d8c62001d717751a2a78883f?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
        alt="Banner"
        className="object-contain self-center max-w-full aspect-[10.2] w-[1058px]"
      />

      <div className="flex overflow-hidden flex-wrap gap-4 justify-center items-center py-16 pr-16 w-full bg-white text-[color:var(--sds-color-text-default-default)] max-md:pr-5 max-md:max-w-full p-10">
        <h1 className="text-4xl">1. Select Causes To Support</h1>
       </div>

       <div className="flex overflow-hidden flex-wrap gap-4 justify-center items-center py-16 pr-16 w-full bg-white text-[color:var(--sds-color-text-default-default)] max-md:pr-5 max-md:max-w-full p-10">
        <div className="flex flex-col grow shrink self-stretch my-auto leading-6 rounded-md font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[length:var(--sds-typography-body-size-medium)] w-[804px] max-md:max-w-full">
          <div className="grid grid-cols-4 gap-4 ">
            {causes.map((cause, index) => (
              <CauseItem
                key={index}
                label={cause}
                isChecked={selectedCauses.includes(cause)}
                onToggle={() => toggleCause(cause)}
                
              />
            ))}
          </div>
          <div className="mt-4">
            <strong>Selected Causes:</strong> {selectedCauses.join(", ")}
          </div>
        </div>
      </div>
      

      <div className="flex flex-col justify-center items-center py-10 w-full tracking-tight leading-tight text-center whitespace-nowrap font-[number:var(--sds-typography-heading-font-weight)] min-w-[420px] pl-[525px] pr-[524px] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-heading-size-base)] max-md:px-5 max-md:max-w-full">
        <button onClick={handleSaveCauses} className="flex overflow-hidden justify-center items-center p-3 border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]">
        <Button asChild className="self-stretch bg-black text-white rounded-full hover:bg-gray-800">
            <Link to='/email'>Continue</Link>
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
