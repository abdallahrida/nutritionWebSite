import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "&store/store";
import "./App.css";
import { AppRouter } from "./App.router";
import { ThemeProvider } from "react-bootstrap";

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {}, [i18n.language]);

  return (
    <ThemeProvider dir={i18n.dir()}>
      <AppRouter />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRedux = connector(App);

export { AppRedux as App };
