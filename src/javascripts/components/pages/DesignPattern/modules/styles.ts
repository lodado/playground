import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  border: none;
  display: inline;

  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;

export { StyledButton };
