import styled from "styled-components";

export const UlStyled = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 0;
  li {
    list-style: none;
  }
  li a img {
    width: 70px;
    border-radius: 50%;
    border: 1.5px solid #443e54;
  }
`;
