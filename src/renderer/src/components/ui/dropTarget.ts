import styled from "styled-components";

export const OutputTypeSelectWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 999;
`;

export const DropWrapper = styled.div<{ $dragActive: boolean }>`
  border: 2px dashed ${({ $dragActive, theme }) => ($dragActive ? theme.text.highlight : theme.text.normal )};
  border-radius: 10px;
  position: relative;
  margin: 30px;
  height: 355px;
  width: calc(100% - 60px);
  background-color: ${({ $dragActive, theme }) => ($dragActive ? `p { color: ${theme.text.highlight}; }` : '')};
`;

export const DropFileLabel = styled.div<{ $dragActive: boolean }>`
  text-align: center;
  padding: 10px;

  svg {
    width: 100px;
    margin-top: 100px
  }

  p {
    color: ${({ $dragActive, theme  }) => ($dragActive ? theme.text.highlight : theme.text.normal)};
    font-size: 18px;
    margin-top: 20px;
  }

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
  color: ${({ theme }) => theme.text.normal};
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0 0 calc(50vw - 70px);

  &:hover {
    color: ${({ theme }) => theme.text.highlight};
  }
`;