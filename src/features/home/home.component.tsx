import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "&store/store";

import { Hero } from "&styled/hero/hero.component";
import { UnderHomeComp } from "&styled/underHomeComp/underHomeComp.component";
import { UndeundeHomeComp } from "&styled/undeundeHomeComp/undeundeHomeComp.component";
import { Footer } from "&styled/footer/footer.component";
import homeImage from "&assets/images/home/unnamed.jpg";
import { useTranslation } from "react-i18next";

type ReduxProps = ConnectedProps<typeof connector>;

const HomeComponent = (props: ReduxProps) => {
  const { t } = useTranslation("home");

  return (
    <>
      <Hero
        cName="hero"
        heroImg={homeImage}
        title={t("screenTitle")}
        text=""
        btnClass="hide"
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
