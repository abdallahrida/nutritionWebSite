import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "&store/store";
import { Hero } from "&styled/hero/hero.component";
import hananImage from "&assets/images/hananPhoto.jpg";
import { Footer } from "&styled/footer/footer.component";
import { ContactForm } from "&styled/contactForm/contactForm.component";

type ReduxProps = ConnectedProps<typeof connector>;

const ContactComponent = (props: ReduxProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <Hero
        cName="heroMid"
        heroImg={hananImage}
        title=""
        btnClass="hide"
        btnText=""
        text=""
        url=""
      />
      <ContactForm />
      <Footer />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const ContactComponentRedux = connector(ContactComponent);

export { ContactComponentRedux as ContactComponent };
