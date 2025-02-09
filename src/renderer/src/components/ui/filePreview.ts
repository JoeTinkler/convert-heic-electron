import styled from "styled-components";

export const DropFilePreview = styled.div`
  margin: 30px;
`;

export const DropFilePreviewItem = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.item.background};
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
  flex: 1;
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
  padding: 10px 20px;
  color: ${({ theme }) => theme.item.text};
  text-align: center;
  flex: 1;
  background-color: ${({ $status, theme }) => {
    switch ($status) {
      case 'Converting': return theme.item.pending;
      case 'Converted': return theme.item.success;
      case 'Error': return theme.item.error;
    }
  }};
`;

export const DropFilePreviewItemAction = styled.span`
  background-color: ${({ theme }) => theme.item.remove};
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
  color: ${({ theme }) => theme.item.text};

  &:hover {
   opacity: 1;
  }
`;