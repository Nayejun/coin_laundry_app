"use client";

import React from "react";
import { Squircle } from "corner-smoothing";
import styled from "styled-components";

const Container = styled.div`
  background: #f2f2f0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

const Corner = styled(Squircle)`
  position: absolute;
  top: 100px; /* Added margin top */
  left: -99800px; /* Adjusted to account for the margin left */
  width: 100000px;
  height: 100000px;
`;

const BlueCorner = styled(Corner)`
  background: darkblue;
  z-index: 1;
`;

const OrangeCorner = styled(Corner)`
  background: orange;
  z-index: 2;
`;

type LabelProps = {
  bgColor: string;
  align: "left" | "right";
}

const Label = styled.div<LabelProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: left; /* Align items to the left */
  width: 200px;
  height: 50px;
  padding: 10px;
  color: white;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
  z-index: 3;
  text-align: left; /* Align text to the left */
  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    background: ${(props) => props.bgColor};
    top: 50%;
    left: ${(props) => (props.align === 'left' ? '100%' : '-50px')};
  }
`;

const BlueLabel = styled(Label)`
  top: 101px;
  left: 249px;
`;

const OrangeLabel = styled(Label)`
  top: 200px;
  left: 248px;
`;

export default function Page() {
  return (
    <Container>
      <BlueCorner cornerRadius={34} cornerSmoothing={0}>
        <div />
      </BlueCorner>
      <OrangeCorner cornerRadius={34} cornerSmoothing={0.6}>
        <div />
      </OrangeCorner>
      <BlueLabel bgColor="darkblue" align="right">
        Corner Radius: 34<br />
        Corner Smoothing: 0%
      </BlueLabel>
      <OrangeLabel bgColor="orange" align="right">
        Corner Radius: 34<br />
        Corner Smoothing: 60%
      </OrangeLabel>
    </Container>
  );
}
