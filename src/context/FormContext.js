"use client";

import { createContext, useContext, useState, useEffect } from "react";
import allScreenings from "@/data/allScreenings";

// Create context
const FormContext = createContext();

export function useFormContext() {
  return useContext(FormContext);
}

function getAgeFromISO(isoString) {
  const birthDate = new Date(isoString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // If birthday hasn't happened yet this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

function hasMatchingFactor(allFactors, selectedFactors) {
  if (allFactors?.length == 0) {
    return true;
  }
  return selectedFactors.some((factor) => allFactors.includes(factor));
}

// Provider component
export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    dob: null,
    gender: "male",
    factors: [],
  });
  const [deviceType, setDeviceType] = useState("mobile");
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("");
  const [screening, setScreening] = useState(null);

  useEffect(() => {
    const age = Number(getAgeFromISO(formData?.dob));

    const _data = allScreenings.filter(
      (item) =>
        item.minage <= age &&
        item.maxage >= age &&
        item.gender.includes(formData.gender) &&
        hasMatchingFactor(item.factors, formData.factors)
    );

    console.log({ _data, age, formData, allScreenings });

    setFilteredData([..._data]);
  }, [formData]);

  // ✅ Update device type based on screen width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setDeviceType("desktop");
      } else {
        setDeviceType("mobile");
      }
    }

    // Run on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update function
  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateField,
        deviceType,
        filteredData,
        category,
        screening,
        setCategory,
        setScreening,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
