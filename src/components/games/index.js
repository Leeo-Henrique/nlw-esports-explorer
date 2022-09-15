import { UlStyled } from "./styles";
import "../global.css";
export const Games = ({ games, imageGames }) => {
  return (
    <section>
      <div>
        <h2>Meus jogos</h2>
        <p>Games que eu gosto de jogar!</p>
        <UlStyled>
          {games?.map((game, index) => (
            <li key={index}>
              <a href={game} target="_blank" rel="noreferrer">
                <img src={imageGames[index]} alt="" />
              </a>
            </li>
          ))}
        </UlStyled>
      </div>
    </section>
  );
};
