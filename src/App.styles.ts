import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    max-width: 200px; 
  }
  
  @media screen and (max-width: 765px) {
    
    h1 {
      font-size: 50px;
    }
    .start, .next {
      max-width: 150px;
      padding: 0 30px;
    }
  }
`;
