import styled from 'styled-components';

export const ChatStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background-color: #0b0312;
  max-height: 100vh;
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1200px;
  height: 100px;
  background-color: #150f1b;
  border-radius: 5px;
`;

export const MessageWindowWrapper = styled.div`
  min-height: 90vh;
  width: 100%;
  max-width: 1050px;
  margin: auto;
  padding: 100px 25px 0 25px;
`;

export const MessageContainerWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  &.positionRight {
    justify-content: end;
  }

  &.positionLeft {
    justify-content: start;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;

  &.logoRight {
    justify-content: end;
  }

  &.logoLeft {
    justify-content: start;
  }

  .userName {
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export const ImageWrapper = styled.div`
  .image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const MessageField = styled.div`
  display: inline-block;
  max-width: 500px;
  background-color: #241c2b;
  word-break: break-all;
  color: white;
  padding: 10px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.3px;

  &.textRight {
    float: right;
    border-radius: 15px 0 15px 15px;
  }

  &.textLeft {
    float: left;
    border-radius: 0 15px 15px 15px;
  }

  .imageMessage {
    width: 200px;
    height: 200px;
  }
`;
