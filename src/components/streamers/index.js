import { UlStyled } from "./styles";
import "../global.css";
export const Streamers = ({ StreamersArray, StreamersImagens }) => {
  return (
    <section>
      <div>
        <h2>Canais e streamers</h2>
        <p>Lista de canais e transmissões que não perco!</p>
        <UlStyled>
          {StreamersArray?.map((streamer, index) => (
            <li key={index}>
              <a href={streamer} target="_blank" rel="noreferrer">
                <img src={StreamersImagens[index]} alt="" />
              </a>
            </li>
          ))}
        </UlStyled>
      </div>
    </section>
  );
};
