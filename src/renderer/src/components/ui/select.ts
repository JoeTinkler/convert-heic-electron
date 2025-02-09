import styled from 'styled-components';

export const SelectOptionsContainer = styled.ul`
  border: none;
  background: ${({ theme }) => theme.text.normal};
  padding: 5px;
  border-radius: 5px;
`;

export const SelectTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  cursor: pointer;
  color: ${({ theme }) => theme.text.normal};
  font-weight: bold;
  text-align: right;
`;

export const SelectArrow = styled.svg`
  width: 15px;
`;

export const SelectOption = styled.li<{ $selected: boolean }>`
  background: ${({ $selected, theme }) => $selected ? theme.text.highlight : theme.text.normal};
  color: ${({ $selected, theme }) => $selected ? theme.text.normal : theme.text.highlight};
  padding: 5px 10px;
  margin: 2px;
  list-style-type: none;
  border-radius: 5px;
  min-width: 100px;
  text-align: right;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.text.highlight};
    color: ${({ theme }) => theme.text.normal};
    font-weight: bold;
  }
`;