import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetch_status } from "../assets/fetchstatus";
import React from "react";
export default function ListCards() {
  let { charId } = useParams();
  const [character, setCharacter] = useState();
  const [cardStatus, setCardStatus] = useState(fetch_status.idle);

  useEffect(() => {
    setCardStatus(fetch_status.loading);
    const fetchedChar = async () => {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${charId}?apikey=c5b21bcd83f9cb497db19d4a57fb1837`
      );
      try {
        const charData = await response.json();
        const charInfo = await charData.data.results[0];
        setCharacter(charInfo);

        setCardStatus(fetch_status.success);
      } catch (error) {
        setCardStatus(fetch_status.error);
        console.log(error);
      }
    };
    fetchedChar();
  }, []);
  console.log(character);

  if (cardStatus === fetch_status.loading)
    return <div className="loader"></div>;

  if (cardStatus === fetch_status.success) {
    return (
      <>
        <div className="character-container">
          <p className="name-container">{character.name}</p>
          <img
            className="img-container"
            src={`${character.thumbnail.path}/portrait_incredible.jpg`}
            alt={`${character.name} image`}
          />
          <p className="desc-container">
            {character.description
              ? character.description
              : "Sorry, there is no description available for this character"}
          </p>
        </div>
      </>
    );
  }
}
