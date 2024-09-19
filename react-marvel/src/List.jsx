import ListCards from "./ListCards";

export default function List({ characters }) {
  return (
    <>
      <div>
        <ul className="character-list">
          {characters.map((char) => {
            return (
              <>
                <li className="list-item" key={char.id}>
                  <img
                    className="char-img-container"
                    src={`${char.thumbnail.path}/portrait_xlarge.jpg`}
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
      <button className="btn more-btn">See more</button>
    </>
  );
}
