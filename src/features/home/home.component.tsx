import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "&store/store";

import { Hero } from "&styled/hero/hero.component";
import { UnderHomeComp } from "&styled/underHomeComp/underHomeComp.component";
import { UndeundeHomeComp } from "&styled/undeundeHomeComp/undeundeHomeComp.component";
import { Footer } from "&styled/footer/footer.component";

type ReduxProps = ConnectedProps<typeof connector>;

const HomeComponent = (props: ReduxProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG51dHJpdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        btnText="Travel Plan"
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
