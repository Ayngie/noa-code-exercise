import styled from "styled-components";
import Button from "./Button";

const NormalButton = styled(Button)`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }

  &:active {
    color: black;
    background-color: white;
  }
`;

export default NormalButton;
