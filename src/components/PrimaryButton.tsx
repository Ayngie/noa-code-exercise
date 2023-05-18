import styled from "styled-components";
import BasicButton from "./BasicButton";

const PrimaryButton = styled(BasicButton)`
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
