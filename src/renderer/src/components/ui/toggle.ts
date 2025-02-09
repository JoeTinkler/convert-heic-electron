import styled from 'styled-components';

export const ToggleIcon = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    scale: 1.2;
    transition: all .2s ease-in-out;
  }
`;