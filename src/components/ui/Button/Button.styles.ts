import styled from "@emotion/styled";

const StyledButton = styled.button<{color: string}>`
   background-color: ${({ color }) => color};
  border: 2px solid red;
  font-size: 40px;
`;

export {StyledButton}