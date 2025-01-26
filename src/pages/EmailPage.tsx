import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { InputField } from "../components/emailGenerator/InputField";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const EmailPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    // Add logic for handling the generated email here
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />

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

        <form
          onSubmit={handleGenerate}
          className="flex overflow-hidden flex-wrap gap-10 justify-center items-start px-2.5 py-5 w-full bg-white font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full"
        >
          <div className="flex flex-col p-6 w-80 bg-white rounded-lg border border-solid border-zinc-300 min-w-[320px] max-md:px-5">
            <InputField
              label="First Name"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
            />
            <div className="mt-6">
              <InputField
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange(setLastName)}
              />
            </div>
            <div className="mt-6">
              <InputField
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange(setEmail)}
              />
            </div>
            <button
              type="submit"
              className="mt-6 overflow-hidden flex-1 shrink gap-2 self-stretch p-3 w-full rounded-lg border border-solid bg-zinc-800 border-zinc-800 min-w-[240px] text-white"
            >
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
              value={`Dear Representative,`}
            />
          </div>
        </form>

        <button className="flex overflow-hidden justify-center items-center p-3 border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]">
          <Button asChild className="self-stretch bg-black text-white rounded-full hover:bg-gray-800">
            <Link to="/representatives">Continue</Link>
          </Button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/4606baba77ecde594d9c31e92e8d89281c163fda004f0c5ac9e5860fe6594733?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </button>
      </main>
      <Footer />
    </div>
  );
};
