import styled from "styled-components";
import Button from "./Button";

const PrimaryButton = styled(Button)`
  color: white;
  background-color: hotpink;
  border-style: none;

  &:hover {
    background-color: rebeccapurple;
    cursor: pointer;
  }

  &:active {
    color: white;
    background-color: hotpink;
  }
`;

export default PrimaryButton;
