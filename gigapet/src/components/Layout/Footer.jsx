import React from "react";
import styled from 'styled-components'

const FooterContent = styled.div`
    padding: 40px 0;
    background-color: #000000;
`
const CopyRight = styled.h5`
    color: white;
`

export default function Footer() {
  return (
    <FooterContent>
      <CopyRight>Copyright 2019 Gigapet</CopyRight>
    </FooterContent>
  );
}
