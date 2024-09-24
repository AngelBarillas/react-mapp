import ListCards from "./ListCards";
import { useState } from "react";
export default function List({ characters }) {
  return (
    <>
      <div>
        <ul className="character-list">
          {characters.map((char) => {
            return (
              <>
                <li className="list-item">
                  <img
                    className="char-img-container"
                    src={`${char.thumbnail.path}/portrait_incredible.jpg`}
                  ></img>
                  <a className="char-name" href="">
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
