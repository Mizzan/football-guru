import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./LeagueCard.css";

const rightArrow = <FontAwesomeIcon icon={faLongArrowAltRight} />;
const Post = ({ league }) => {
  const { idLeague, strLeague, strSport } = league;
  const history = useHistory();
  const showLeagueDetails = (idLeague) => {
    const url = `/league/${idLeague}`;
    history.push(url);
  };

  const [getLeagueLogo, setLeagueLogo] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueLogo(data.leagues[0].strBadge));
  }, [idLeague]);
  return (
    <div className="league-card">
      <div className="league-logo">
        <img src={getLeagueLogo} alt="" />
      </div>

      <div className="league-desc">
        <h3>{strLeague}</h3>
        <p>Sport Type : {strSport}</p>
        <button
          className="main-btn"
          onClick={() => showLeagueDetails(idLeague)}
        >
          Explore <span id="icon-right-arrow">{rightArrow}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
