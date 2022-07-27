import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

export default function SearchPics() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const unsplash = new Unsplash({
    accessKey: "kP6CPCBTwzr20wHxjp2wvBGNBaGfhYeZjWystOkeqlY",
  });

  const searchPics = async (e) => {
    e.preventDefault(); //Prevents the page from reloading when search is clicked
    unsplash.search
      .photos(query, 1, 20)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };

  return (
    <>
      <form className="form" onSubmit={searchPics}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "sheep" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {
          pics.map((pic) => 
          <div className="card">
            <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
          </div>)
        }
      </div>
    </>
  );
}
