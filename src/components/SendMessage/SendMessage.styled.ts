import styled from 'styled-components';

export const SendMessageStyles = styled.div`
  margin: 30px auto 0;
  max-width: 800px;
  background-color: #241c2b;
  border-radius: 10px;

  .sendMessageWrapper {
    padding: 10px 20px;
  }
`;

export const InteractionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .inputField {
    input {
      font-size: 22px;
      font-weight: 500;
      color: #b9eafd;
    }
  }

  .iconButton {
    span {
      width: 30px;
      height: 30px;
    }
  }

  .sendButton {
    width: 100%;
    max-width: 150px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    color: #5d6a7a;
  }
`;
