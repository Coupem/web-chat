import styled from 'styled-components';

export const SignInStyles = styled.div`
  width: 300px;
  background-color: #150f1b;
  height: 400px;
  margin: 100px auto;
  border-radius: 25px;
  box-shadow: 0 0 10px 0 #99c3c1;

  .signInContainer {
    .title {
      width: 100%;
      max-width: 190px;
      margin: auto;
      color: #b9eafd;
      font-size: 20px;
      font-weight: 600;
      padding-top: 120px;
    }

    .signInButton {
      width: 200px;
      font-family: monospace;
      font-weight: 600;
      font-size: 20px;
      display: flex;
      margin: 50px auto;
    }
  }
`;
