"use client";

import axios from "axios";
import { useEffect, useState } from "react";

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
  console.log(data);
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
        {/* <div className="main-area-in"> */}
        {data.map(
          (item: {
            image: string;
            name: string;
            status: string;
            species: string;
            origin: { name: string; url: string };
            location: {name: string; url: string};
          }) => (
            <div>
              <div className="charcter-card">
                <div className="charcter-card-left">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="charcter-card-right">
                  <div className="charcter-card-content-wrapper">
                    <section className="sec1">
                      <a href="https://rickandmortyapi.com/">
                        <h2>{item.name}</h2>
                      </a>
                      <span className="status">
                        <span className="status-icon">
                          {item.status === "Alive" && (
                            <img className="alive"
                            src="./icons/circle-alive.png"
                            alt="alive"
                          /> 
                          )}
                           {item.status === "Dead" && (
                            <img className="dead"
                            src="./icons/circle-dead.png"
                            alt="dead"
                          /> 
                          )} 
                           {item.status === "unknown" && (
                            <img className="unknown"
                            src="./icons/circle-unknown.png"
                            alt="unknown"
                          /> 
                          )}  
                         
                        </span>
                        <p>
                          {item.status} - {item.species}
                        </p>
                      </span>
                    </section>
                    <section className="sec2">
                      <span className="text-gray" >Last known location :</span>
                      <a href="http://rickandmortyapi.com/api/location/20" target="_blank" rel="noopener ">{item.location.name}</a>
                    </section>
                    <section className="sec3">
                      <span className="text-gray">First seen in :</span>
                       <a href="http://rickandmortyapi.com/api/episode8" target="_blank" rel="noopener ">{item.origin.name}</a>
                    </section>
                  </div>
                </div>
              </div>
              {/* <div className="clear-fix"></div> */}
            </div>
          )
        )}
        {/* </div> */}
        <div className="clear-fix"></div>
      </div>
      <div className="footer"><h1>FOOTER</h1></div>
    </div>
  );
}
