import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
 
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Sekou SOW <br/>
        Welcome To My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a FullStack developer, I'm here to help you to build your professional modern UI/UX website or mobile app  from design to Deployment.
      </SectionText>
      {/* <Button onclick={() => window.location= 'https://google.com'} >Learn More</Button> */}
    </LeftSection>
  </Section>
 
);

export default Hero;