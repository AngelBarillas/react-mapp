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
                <li className="list-item">
                  <img
                    className="char-img-container"
                    src={`${char.thumbnail.path}/portrait_incredible.jpg`}
                  ></img>
                  <a
                    target="_blank"
                    className="char-name"
                    href={`/character/${char.id}`}
                  >
                    {char.name}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
