import React from "react";
import styled from 'styled-components'

const FooterContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 20px 0;
  background-color: #000000;
  bottom: 0;
  width: 100%;
`
const CopyRight = styled.h5`
  color: white;
  width: 1200px;
  padding: 0 20px;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterContent>
      <CopyRight> &copy; Copyright 2019 Gigapet<hr /><br />Gigapet does not diagnose any medical conditions, prescribe any medical diets, treatments, tests, procedures, etc to users of this app or any of our online presence. Any and all other information that may be mentioned on this app or other social media sites in our name (Gigapet) is not to be taken as medical advice, diagnosis, or treatment.
      </CopyRight>
    </FooterContent>
  );
}
