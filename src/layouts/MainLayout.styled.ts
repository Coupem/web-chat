import styled from 'styled-components';

export const MainLayoutStyles = styled.section`
  background-color: #150721;
  height: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: monospace;

  .header {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -3px 20px 0 #99c3c1;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 20px;
    background-color: #1b0a29;
    margin-bottom: 50px;

    h3 {
      color: #b9eafd;
      font-weight: 800;
      font-size: 36px;
    }
  }

  .mainContainer {
    height: 100%;
  }
`;
