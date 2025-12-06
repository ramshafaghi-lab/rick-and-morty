"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "./component/CharacterCard";


export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character?page=1$per_page=2", {
        method: "get",
      })
      .then((respons) => {
        setData(respons.data.results);
      });
  }, []);
  
  return (
    <div className="main">
      <div className="header">
        <div className="container">
          <div className="navbar">
            <a href="https://rickandmortyapi.com/" title="support us">
              <span className="icon2">
              <img className="heart-icon" src="./icons/heart-icon.png" alt="menu"/>
            </span>
            </a>
            <ul>
              <li>
                <a href="https://rickandmortyapi.com/">Doc</a>
              </li>
              <li>
                <a href="https://rickandmortyapi.com/">About</a>
              </li>
              <li>
                <a href="https://rickandmortyapi.com/">
                  <span className="supportUs">SUPPORT US</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="clear-fix"></div>
        </div>
      </div>
      <div className="container">
        <div className="page-intro">
          <h1>The Rick and Morty API</h1>
        </div>
      </div>
      <div className="main-area">
       
        {data.map(
          (item: {
            image: string;
            name: string;
            status: string;
            species: string;
            origin: { name: string; url: string };
            location: {name: string; url: string};
          }) => (
            <div key={item.name}>
              <CharacterCard img={item.image} name={item.name} status={item.status} species={item.species} origin={item.origin} location={item.location} /> 
             
            </div>
          )
        )}
       
      </div>
      <div className="footer"><h1>FOOTER</h1></div>
    </div>
  );
}
