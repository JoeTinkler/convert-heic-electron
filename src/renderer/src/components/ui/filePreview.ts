import styled from "styled-components";

export const DropFilePreview = styled.div`
  margin: 30px;
`;

export const DropFilePreviewItem = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  background-color: #ddd;
  padding: 15px;
  border-radius: 5px;

  &:hover {
   opacity: 1;
  }
`;

export const DropFilePreviewItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const FilePreviewImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

export const FilePreviewStatus = styled.p<{ $status: FileStatus }>`
  font-size: 12px;
  border-radius: 3px;
  padding: 2px 8px;
  color: #fff;
  text-align: center;
  background-color: ${({ $status }) => {
    switch ($status) {
      case 'Converting': return '#0074D9';
      case 'Converted': return '#2ECC40 ';
      case 'Error': return '#FF4136';
    }
  }};
`;

export const DropFilePreviewItemAction = styled.span`
  background-color: #bc3e44;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: #000;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #fff;

  &:hover {
   opacity: 1;
  }
`;