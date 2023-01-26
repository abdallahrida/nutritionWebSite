import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "&store/store";

import { Hero } from "&styled/hero/hero.component";
import AboutImage from "&assets/images/night.jpg";
import { Footer } from "&styled/footer/footer.component";
import { UndeundeHomeComp } from "&styled/undeundeHomeComp/undeundeHomeComp.component";

type ReduxProps = ConnectedProps<typeof connector>;

const ServiceComponent = (props: ReduxProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <Hero
        cName="heroMid "
        heroImg={AboutImage}
        title="Service"
        btnClass="hide"
        btnText=""
        text=""
        url=""
      />

      <UndeundeHomeComp />
      <Footer />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const ServiceComponentRedux = connector(ServiceComponent);

export { ServiceComponentRedux as ServiceComponent };
