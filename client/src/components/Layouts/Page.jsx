import React from "react";
import styled from "styled-components/macro";

const Page = ({ children }) => {
  return <PageStyled>{children}</PageStyled>;
};

export default Page;

export const PageStyled = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`;
