import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1, text: "Python" },
  { number: 2, text: "Java" },
  { number: 3, text: "C" },
  { number: 4, text: "Javascript" },
  { number: 5, text: "Blockchain Solidity"},
  { number: 6, text: "Bootstrap 5" },
  { number: 7, text: "Android Native" },
  { number: 8, text: "React, Next" }

];

const Acomplishments = () => (
  <Section id="acomplishments">
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
