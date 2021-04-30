import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPodcast,
  faFutbol,
  faFlag,
  faMars,
} from "@fortawesome/free-solid-svg-icons";

import maleImage from "../../images/male.png";
import femaleImage from "../../images/male.png";
import "./LeagueCardDetail.css";

const foundIcon = <FontAwesomeIcon icon={faPodcast} />;
const footballIcon = <FontAwesomeIcon icon={faFutbol} />;
const flagIcon = <FontAwesomeIcon icon={faFlag} />;
const genderIcon = <FontAwesomeIcon icon={faMars} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;

const LeagueCardDetail = () => {
  const [getLeague, setLeague] = useState({});
  const { idLeague } = useParams();
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, [idLeague]);

  return (
    <div>
      <div className="header">
        <div className="header-banner">
          <img
            src={
              getLeague.strFanart1 ||
              getLeague.strFanart2 ||
              getLeague.strFanart3 ||
              getLeague.strFanart4
            }
            alt=""
          />
        </div>
        <div className="logo">
          <img src={getLeague.strLogo} alt="" />
        </div>
      </div>

      {/* {console.log(getLeague)} */}
      <div className="league-container">
        <div className="league-details">
          <div className="league-details-left">
            <h1>{getLeague.strLeague}</h1>
            <h4>
              <span className="league-details-icon">{foundIcon}</span>Founded:{" "}
              {getLeague.intFormedYear}
            </h4>
            <h4>
              <span className="league-details-icon">{flagIcon}</span>Country:{" "}
              {getLeague.strCountry}
            </h4>
            <h4>
              <span className="league-details-icon">{footballIcon}</span>Sport
              Type: {getLeague.strSport}
            </h4>
            <h4>
              <span className="league-details-icon">{genderIcon}</span>Gender:{" "}
              {getLeague.strGender}
            </h4>
          </div>
          <div className="league-details-right">
            <img
              src={getLeague.strGender === "Male" ? maleImage : femaleImage}
              alt=""
            />
          </div>
        </div>
        <div className="league-description">
          <p className="description-one">{getLeague.strDescriptionEN}</p>
          <p>
            {getLeague.strDescriptionES ||
              getLeague.strDescriptionRU ||
              getLeague.strDescriptionFR}
          </p>
        </div>
        <div className="sociai-link-address">
          <a
            id="fb-icon"
            rel={"external"}
            target="_blank"
            href={`https://${getLeague.strFacebook}`}
          >
            {facebookIcon}
          </a>
          <a
            id="twit-icon"
            rel={"external"}
            target="_blank"
            href={`https://${getLeague.strTwitter}`}
          >
            {twitterIcon}
          </a>
          <a
            id="youtube-icon"
            rel={"external"}
            target="_blank"
            href={`https://${getLeague.strYoutube}`}
          >
            {youtubeIcon}
          </a>
        </div>
      </div>

      <div className="footer">
        <h3>
          2021 &copy; All Rights Reserved. Made with love 💖 by{" "}
          <a id="user-address" href="https://github.com/Mizzan" target="_blank">
            Mizanur Rahman
          </a>{" "}
        </h3>
      </div>
    </div>
  );
};

export default LeagueCardDetail;
