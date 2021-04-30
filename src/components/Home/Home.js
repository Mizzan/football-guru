import React, { useEffect, useState } from "react";
import "./Home.css";
import LeagueCard from "../LeagueCard/LeagueCard";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.leagues.slice(0, 16); // slicing up data and getting particular number leagues
        const removingOneItems = items.splice(2, 1); // removing a particular league because of bad logo :D
        return setLeagues(items);
      });
  }, []);

  // getting the banner image from the api
  const [getBanner, setBanner] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBanner(data.leagues[0].strFanart4));
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="header-banner">
          <img src={getBanner} alt="" />
        </div>
        <h1
          title="Pick The League and Be a Guru in Football"
          className="header-title"
        >
          Football Guru
        </h1>
      </div>

      <main>
        <div className="container">
          {leagues.map((league) => (
            <LeagueCard key={league.idLeague} league={league}></LeagueCard>
          ))}
        </div>
        <div className="footer">
          <h3>
            2021 &copy; All Rights Reserved. Made with love 💖 by{" "}
            <a
              id="user-address"
              href="https://github.com/Mizzan"
              target="_blank"
            >
              Mizanur Rahman
            </a>{" "}
          </h3>
        </div>
      </main>
    </div>
  );
};

export default Home;
