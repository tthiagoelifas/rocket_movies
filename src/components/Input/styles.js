import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 5.6rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700 };
  color: ${({theme}) => theme.COLORS.WHITE_200 };
  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_300 };
  }
`;
