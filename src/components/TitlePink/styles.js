import styled from "styled-components";

export const Container = styled.div`
  width:16.4rem;
  height: 3.2rem;
  > h1{
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    background: transparent;

    color: ${({theme}) => theme.COLORS.PINK_100}
  }

`;