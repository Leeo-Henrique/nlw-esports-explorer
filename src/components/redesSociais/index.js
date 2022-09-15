/* eslint-disable no-array-constructor */
import { UlStyled } from "./styles";
import { twitchLogo, instagramLogo, youtubeLogo } from "./svg";
import "../global.css";
export const RedesSociais = () => {
  const RedesSociaisArray = new Array(twitchLogo, instagramLogo, youtubeLogo);
  const links = [
    "https://www.twitch.tv/leeo_ziito",
    "https://www.instagram.com/leeo_henrique.17/",
    "https://www.youtube.com/channel/UCWLbHAXsYcKQYWvDpUyctuQ",
  ];

  return (
    <section>
      <div>
        <h2>Minhas redes sociais</h2>
        <p>Se conecte comigo agora mesmo!</p>
        <UlStyled>
          {RedesSociaisArray?.map((redes, index) => (
            <li key={index}>
              <a href={links[index]} target="_blank" rel="noreferrer">
                {redes}
              </a>
            </li>
          ))}
        </UlStyled>
      </div>
    </section>
  );
};
