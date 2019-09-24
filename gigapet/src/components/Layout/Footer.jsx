import React from "react";
import styled from 'styled-components'

const FooterContent = styled.div`
  padding: 40px 0;
  background-color: #000000;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`
const CopyRight = styled.h5`
  color: white;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterContent>
      <CopyRight>Copyright 2019 Gigapet</CopyRight>
    </FooterContent>
  );
}
