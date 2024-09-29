import ListCards from "./ListCards";
import { useState } from "react";
export default function List({ characters }) {
  return (
    <>
      <div id="char-list-container">
        <ul id="char-list" className="character-list">
          {characters.map((char) => {
            return (
              <>
                <li className="card" key={char.id}>
                  <img
                    className="card"
                    src={`${char.thumbnail.path}/portrait_incredible.jpg`}
                  ></img>
                  <div className="details">
                    <label className="details" htmlFor="">
                      <a
                        className="anton-sc-regular details"
                        target="_blank"
                        href={`/character/${char.id}`}
                      >
                        {char.name}
                      </a>
                    </label>
                    <p className="anton-sc-regular">
                      <i>Click on my name to learn more</i>
                    </p>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

/*<div class="card">
  <div class="remove-when-use">
    <label>Hover over me to show details</label>
  </div>
  <div class="details">
    <label>Title</label>
    <p>
      <i>Click to learn more</i>
    </p>
  </div>
</div>
*/

/*
<div class="card">
<div class="card-img"> </div>

<div class="card-info">
<p class="title">Name</p>
<p class="subtitle">Web Dev</p>
</div>
</div>*/
