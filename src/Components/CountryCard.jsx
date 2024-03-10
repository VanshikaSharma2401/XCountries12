import React from "react";
import styles from "../../src/styles.module.css";

const CountryCard = ({ country }) => {
  return (
    <div className={styles.card}>
      <img className={styles.flagImg} src={country?.flags?.svg} alt="dummt alt" />
      <h5>{country?.name?.common}</h5>
    </div>
  );
};

export default CountryCard;
