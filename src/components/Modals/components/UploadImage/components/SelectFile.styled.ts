import styled from 'styled-components';

export const UploadImageUploadArea = styled.div`
  border: 1px dashed #808080;
  background-color: #f5f5f5;
  height: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 0 20px;
  position: relative;
`;

export const UploadImageIcon = styled.img`
  width: 110px;
`;

export const UploadHelpTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 14px;
  color: #787878;
`;

export const UploadImageHelpText = styled.div`
  color: #787878;
`;

export const UploadImageSelectText = styled.div`
  color: #000000;
  padding: 0 5px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

export const UploadImageOverlay = styled.div`
  border-radius: 15px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
