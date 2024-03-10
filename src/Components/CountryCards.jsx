import React, { useEffect, useState } from "react";
import { getCountrydata } from "../Api";
import Grid from "@mui/material/Grid";
import CountryCard from "./CountryCard";

const CountryCards = () => {
  const [countryData, setCountryData] = useState([]);
  const fetchCountrydata = async () => {
    const data = await getCountrydata();
    setCountryData(data);
  };
  useEffect(() => {
    fetchCountrydata();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {countryData?.map((country, index) => (
          <Grid key={index} item xs={6} lg={2}>
            <CountryCard country={country} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CountryCards;
