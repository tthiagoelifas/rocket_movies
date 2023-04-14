import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  grid-area: "header";

  border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_500};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;