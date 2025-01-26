import * as React from "react";
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
import { NavItem } from "../components/representatives/NavItem";
import { SocialIcon } from "../components/representatives/SocialIcon";
import { FooterLinkSection } from "../components/representatives/FooterLinkSection";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Iframe from "react-iframe";
import { useState } from "react";

const RepresentativesPage = () => {
  const [address, setAddress] = useState("");
  const [representatives, setRepresentatives] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address.trim()) {
      setError("Please enter a valid address.");
      return;
    }
    setError("");
    await fetchRepresentatives(address);
  };

  const fetchRepresentatives = async (address) => {
    try {
      const API_KEY = "AIzaSyBYPOo3zZUmGGb9c0zJocmoDinx_4gBhV4"; // Replace with your actual API key
      const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${encodeURIComponent(address)}&levels=country&roles=legislatorLowerBody&key=${API_KEY}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch representatives.");
      }
      const data = await response.json();
      setRepresentatives(data.officials || []);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b48d2253945d4989949efbb42fb5c9e0/eb6db2e5a381c7102e26eb611104c867d4b6797f875c90becabe69c8b8ebdbbc?apiKey=b48d2253945d4989949efbb42fb5c9e0&"
        alt="Banner"
        className="object-contain self-center max-w-full aspect-[10.2] w-[1058px]"
      />
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center self-center w-1/2 bg-white max-md:px-5 max-md:max-w-full">
        <h1 className="text-2xl mb-4">Find Your Member of Congress</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="address" className="text-lg flex flex-col items-center">
              Enter your address:
            </label>
            <input
              id="address"
              type="text"
              placeholder="123 Main St, City, State, ZIP"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="mt-6 overflow-hidden flex-1 shrink gap-2 self-stretch p-3 w-full rounded-lg border border-solid  bg-black text-white rounded-full hover:bg-gray-800 border-zinc-800 min-w-[240px] text-[color:var(--sds-color-text-brand-on-brand)]"
            >
              Find My Representative
            </button>
          </form>

        <div className="mt-6">
          {representatives.length > 0 ? (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Representative:</h2>
              <ul className="list-disc pl-6">
                {representatives.map((rep, index) => (
                  <li key={index} className="mb-2">
                    <strong>{rep.name}</strong> - {rep.party || "Unknown Party"}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No representative found yet.</p>
          )}
        </div>
        <button className="border-gray-400 bg-[color:var(--sds-color-background-brand-default)] gap-[var(--sds-size-space-200)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]">
        <Button asChild className="text-white mt-6 overflow-hidden flex-1 shrink gap-2 self-stretch p-3 w-full rounded-lg border border-solid  bg-black  rounded-full hover:bg-gray-800 border-zinc-800 min-w-[240px] ">
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
      <div className="flex overflow-hidden flex-col justify-center p-16 w-1/2 min-h-[723px] max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center p-4">
          {/* Sources for Iframe:
        https://www.npmjs.com/package/react-iframe
        // https://www.govtrack.us/congress/members/map */}
          <Iframe
            url="https://www.govtrack.us/congress/members/embed/mapframe?&bounds=-140.001,45.978,-57.241,20.932"
            width="100%"
            height="575r"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </div>
      
    </div>
  
  
      
   
    <Footer/>
  </div>
  );
};

export default RepresentativesPage;