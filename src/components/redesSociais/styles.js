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
    width: 90px;
    height: 120px;
    border-radius: 8px;
  }
`;
