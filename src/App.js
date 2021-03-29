import React, { useState, useEffect } from 'react';
import './App.css';
import CardsComp from './components/CardsComp';
import CountryTable from './components/CountryTable';
import Header from './components/Header'
const App = () => {
  const [countries, setcountries] = useState([]);
  const [countryname, setcountryname] = useState("Worldwide");
  const [countryinfo, setcountryinfo] = useState({});
  
  /*
  // sorting countries by the largest number of cases
  const sortData = (arrayofobject) => {
    const sortedData = [...arrayofobject]; 
    sortedData.sort((a, b) => {
      if(a.cases > b.cases) {
        return -1;
      }
      else {
        return 1;
      }
    });
    return sortedData;
  }
  */

  // on component load fetch globle data
  useEffect(() => {
    const getallData = async () => {
      const alldata = await fetch("https://disease.sh/v3/covid-19/all");
      const alldataJson = await alldata.json();
      setcountryinfo(alldataJson);
    }
    getallData();
  }, [])

  // on component load fetch country names and country codes
  useEffect(()=>{
    async function fetchAPIData() {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const respJson = await response.json();
      
      // sorting the respJson data (typeof : object)
      // const sortedData = sortData(respJson);

      const country_data = respJson.map((eachItem, index) => {
        return {
          cKey : index,
          cName : eachItem.country,
          cCode : eachItem.countryInfo.iso2,
          cCases : eachItem.cases,
        }
      });
      setcountries(country_data);
    }
    fetchAPIData();
  },[])

  // on chnage fecth country data according to country code
  const countryInputEvent = async (event) => {
    const countrycode = event.target.value;
    var apiurlCI = ""; // apiurlCountryInfo
    setcountryname(countrycode);
    apiurlCI = `https://disease.sh/v3/covid-19/countries/${countrycode}`;
    const countryInfoResponse = await fetch(apiurlCI);
    const countryInfoJson = await countryInfoResponse.json();
    setcountryinfo(countryInfoJson);
    console.log(countryInfoJson);
  }
  
  return (<>
    <Header country_data={countries} inputEvent={countryInputEvent} cname={countryname} />
    <CardsComp countryInfo={countryinfo} />
    <CountryTable country_data={countries} />
  </>);
}

export default App;
