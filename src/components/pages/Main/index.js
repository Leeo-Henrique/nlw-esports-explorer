import { Games } from "../../games";
import { RedesSociais } from "../../redesSociais";
import { Streamers } from "../../streamers";
import { StyledMain, ContainerImgPrincipal } from "./styles";
import "../../global.css";

export const MainPage = () => {
  const ArrayDeGames = [
    "https://www.twitch.tv/directory/game/Mobile%20Legends%3A%20Bang%20Bang",
    "https://www.twitch.tv/directory/game/Rocket%20League",
    "https://www.twitch.tv/directory/game/Ultimate%20Mortal%20Kombat%203",
    "https://www.twitch.tv/directory/game/Minecraft",
  ];
  const imageDeGames = [
    "https://static-cdn.jtvnw.net/ttv-boxart/494184_IGDB-144x192.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/30921-144x192.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/1999_IGDB-144x192.jpg",
    "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
  ];

  const StreamersArray = [
    "https://www.twitch.tv/alanzoka",
    "https://www.twitch.tv/zikzira",
    "https://www.twitch.tv/gosugeneraltv",
  ];
  const StreamersImagens = [
    "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/1eb292da-e87d-4adf-a2b0-f994e9ca18c5-profile_image-70x70.png",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/52e6b8d1-def7-465f-998a-65602197b728-profile_image-70x70.png",
  ];
  return (
    <StyledMain>
      <ContainerImgPrincipal>
        <div>
          <img
            src={require("../../../assets/MyProfile.png")}
            alt="My profile"
          />
        </div>
      </ContainerImgPrincipal>
      <Games games={ArrayDeGames} imageGames={imageDeGames} />
      <Streamers
        StreamersArray={StreamersArray}
        StreamersImagens={StreamersImagens}
      />
      <RedesSociais />
    </StyledMain>
  );
};
