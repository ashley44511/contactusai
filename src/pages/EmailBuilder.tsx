import * as React from "react";
import { CauseCard } from "../components/emailBuilder/CauseCard";
import { NavLink } from "../components/emailBuilder/NavLink";
import { FooterSection } from "../components/emailBuilder/FooterSection";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
import {useDataStorageContext} from '@/context/DataStorageContext';


const causes = Array(6).fill({ title: "My Cause", subtitle: "Cause" });

const addRepName = (repName: string, response: string) => {
  return response.replace("Dear Representative", `Dear ${repName}`);
}

export function EmailBuilder() {
  const {address, setAddress, repName, setRepName, repWebsite, setRepWebsite, firstName, setFirstName, lastName, setLastName, email, setEmail, response, setResponse} = useDataStorageContext();
  console.log("Response: " + response);
  setResponse(addRepName(repName, response));
  
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
      <h1 className="text-4xl">4. Finalize Your Response</h1>
      </div>
      <div className="flex overflow-hidden gap-10 justify-center items-start px-2.5 py-5 w-full leading-snug whitespace-nowrap bg-white font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
        <div className="flex flex-col min-h-[504px] min-w-[240px] w-[655px]">
          <label htmlFor="responseInput" className="max-md:max-w-full">
            Your AI-Generated Response:
          </label>
          <div className="flex overflow-hidden relative flex-1 gap-1 items-start px-4 py-3 mt-2 bg-white rounded-lg border border-solid border-zinc-300 min-h-[80px] min-w-[240px] size-full max-md:max-w-full">
            <textarea
              id="responseInput"
              className="z-0 flex-1 shrink basis-0 max-md:max-w-full min-h-[450px] resize-none border-none focus:outline-none"
              placeholder="Dear"
              aria-label="Email response"
              value={response}
              onChange={(e) => setResponse(e.target.value)}/>
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
      <button className="flex overflow-hidden justify-center items-center p-3 border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]"
        onClick={() => {
          // Copy the response value to the clipboard
          navigator.clipboard.writeText(response)}}>
        <Button asChild className="self-stretch bg-black text-white rounded-full hover:bg-gray-800">
            <Link to={repWebsite} target="_blank">Copy Message and go to Representative's Website</Link>
        </Button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/4606baba77ecde594d9c31e92e8d89281c163fda004f0c5ac9e5860fe6594733?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
      </div>
      <Footer />
    </div>
  );
}
