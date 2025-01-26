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
  const [response, setResponse] = useState("Dear Representative,");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `Generate an email to a representative introducing myself. My first name is ${firstName}, my last name is ${lastName}, and my email address is ${email}.`;

    try {
      const res = await fetch("http://localhost:3000/api/generate-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.response || "Error generating email.");
    } catch (error) {
      console.error("Error generating email:", error);
      setResponse("Failed to generate email.");
    }
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

      <main className="flex flex-col justify-center items-center self-center p-16 w-full">
        <h1 className="text-4xl">Generate your personalized email with AI</h1>
        <form onSubmit={handleGenerate} className="flex flex-wrap gap-10">
          <div className="flex flex-col p-6 w-80">
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
              className="mt-6 bg-zinc-800 text-white rounded-lg p-3"
            >
              Generate
            </button>
          </div>
          <div className="w-full">
            <label htmlFor="response">Response</label>
            <textarea
              id="response"
              className="w-full p-4 mt-2 border rounded-lg"
              readOnly
              value={response}
            />
          </div>
        </form>
        <Button asChild>
          <Link to="/representatives">Continue</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};
