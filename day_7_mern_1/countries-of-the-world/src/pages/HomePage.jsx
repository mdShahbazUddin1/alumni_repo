// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { HistoryContext } from "../contexts/HistoryContext";
import CountryCard from "../components/CountryCard";
import SortButtons from "../components/SortButtons";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [currencyCode, setCurrencyCode] = useState("");
  const { addSearch } = useContext(HistoryContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fetchCountries = async (code) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/currency/${code}`
      );
      setCountries(response.data);
      addSearch(code);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedFetchCountries = debounce(fetchCountries, 300);

  const handleInputChange = (e) => {
    const code = e.target.value;
    setCurrencyCode(code);
    debouncedFetchCountries(code);
  };

  return (
    <div>
      <input
        type="text"
        value={currencyCode}
        onChange={handleInputChange}
        ref={inputRef}
        placeholder="Search by currency code..."
      />
      <SortButtons countries={countries} setCountries={setCountries} />
      <div>
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
