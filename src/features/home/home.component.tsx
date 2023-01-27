import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "&store/store";

import { Hero } from "&styled/hero/hero.component";
import { UnderHomeComp } from "&styled/underHomeComp/underHomeComp.component";
import { UndeundeHomeComp } from "&styled/undeundeHomeComp/undeundeHomeComp.component";
import { Footer } from "&styled/footer/footer.component";
import homeImage from "&assets/images/home.jpg";

type ReduxProps = ConnectedProps<typeof connector>;

const HomeComponent = (props: ReduxProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <Hero
        cName="hero"
        heroImg={homeImage}
        title="Eat better not less"
        text="Stop following deprivation regimes"
        btnClass="show"
        btnText="Take action"
        url=""
      />
      <UnderHomeComp />
      <UndeundeHomeComp />
      <Footer />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const HomeComponentRedux = connector(HomeComponent);

export { HomeComponentRedux as HomeComponent };
