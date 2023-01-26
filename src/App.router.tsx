import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { HomeComponent } from "&features/home/home.component";
import { ContactComponent } from "&features/contact/contact.component";
import { NavBar } from "&styled/navBar/navBar.component";
import { AboutComponent } from "&features/about/about.component";
import { ServiceComponent } from "&features/service/service.component";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/service" element={<ServiceComponent />} />
        <Route path="/404" element={<div>page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRouteRedux = connector(AppRouter);

export { AppRouteRedux as AppRouter };
