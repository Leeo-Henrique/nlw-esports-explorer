import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  gap: 24px;

  width: 93%;
  max-width: 580px;
  margin: 32px auto;
`;

export const ContainerImgPrincipal = styled.header`
  padding-top: 32px;
  height: calc(120px + 32px);
  div {
    background-image: linear-gradient(
      90deg,
      #9572fc 0%,
      #43e7ad 50.52%,
      #e2d45c 100%
    );
    width: 120px;
    height: 100%;
    margin: 0 auto;
    padding: 4px;
    display: flex;
    border-radius: 50%;

    transition: transform 0.3s;

    animation: imageFromTop 0.7s 0.1s backwards;
  }
  div:hover {
    transform: scale(1.1);
  }
  div img {
    border-radius: 50%;
    width: 100%;
  }

  @keyframes imageFromTop {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
