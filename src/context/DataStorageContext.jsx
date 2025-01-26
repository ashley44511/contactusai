import React, { createContext, useContext, useState } from "react";

const DataStorageContext = createContext();

// Provider Component
export const DataStorageProvider = ({ children }) => {
  const [repWebsite, setRepWebsite] = useState("");
  const [repName, setRepName] = useState("");
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  return (
    <DataStorageContext.Provider value={{ repWebsite, setRepWebsite, repName, setRepName, selectedCauses, setSelectedCauses, firstName, setFirstName, lastName, setLastName, email, setEmail, response, setResponse }}>
      {children}
    </DataStorageContext.Provider>
  );
};

// Custom Hook to Use Context
export const useDataStorageContext = () => useContext(DataStorageContext);