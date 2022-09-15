import { UlStyled } from "./styles";
import "../global.css";
import { Logos } from "./svg";
export const RedesSociais = ({ StreamersArray, StreamersImagens }) => {
  const RedesSociaisArray = new Array(Logos);
  return (
    <section>
      <div>
        <h2>Minhas redes sociais</h2>
        <p>Se conecte comigo agora mesmo!</p>
        <UlStyled>
          {RedesSociaisArray?.map((redes, index) => (
            <li key={index}>
              <a href="google.com" target="_blank" rel="noreferrer">
                {redes}
              </a>
            </li>
          ))}
        </UlStyled>
      </div>
    </section>
  );
};
