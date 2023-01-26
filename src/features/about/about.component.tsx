import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "&store/store";

import { Hero } from "&styled/hero/hero.component";
import AboutImage from "&assets/images/night.jpg";
import { Footer } from "&styled/footer/footer.component";
import { AboutUs } from "&styled/aboutUs/aboutUs.component";

type ReduxProps = ConnectedProps<typeof connector>;

const AboutComponent = (props: ReduxProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <Hero
        cName="heroMid"
        heroImg={AboutImage}
        title="About"
        btnClass="hide"
        btnText=""
        text=""
        url=""
      />
      <AboutUs />
      <Footer />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const AboutComponentRedux = connector(AboutComponent);

export { AboutComponentRedux as AboutComponent };
