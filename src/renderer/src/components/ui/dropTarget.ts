import styled from "styled-components";

export const DropWrapper = styled.div<{ $dragActive: boolean }>`
  border: 2px dashed ${({ $dragActive }) => ($dragActive ? '#edf0fa' : '#45484c')};
  border-radius: 10px;
  position: relative;
  margin: 30px;
  height: 355px;
  width: calc(100% - 60px);
  background-color:
  ${({ $dragActive }) => ($dragActive ? 'p { color: #edf0fa; }' : '')};
`;

export const DropFileLabel = styled.div`
  text-align: center;
  padding: 10px;

  img {
    width: 100px;
    margin-top: 100px
  }

  p {
    color: #45484c;
    font-weight: bold;
  }
`;

export const DropFileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BrowseLink = styled.a`
  color: #45484c;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0 0 calc(50vw - 70px);
`;