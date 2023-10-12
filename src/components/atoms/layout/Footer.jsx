import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-alin: center;
  padding: 8px 0;
  positon: fixed;
  bottom: 0;
  width: 100%;
`;
