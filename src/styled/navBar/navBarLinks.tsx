// https://fontawesome.com/icons for icons

import i18n from "&config/i18n";

export const links: Array<{
  title: string;
  cName: string;
  url?: string;
  icon?: string;
}> = [
  {
    title: i18n.t("common:home"),
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user",
  },
  {
    title: i18n.t("common:about"),
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info",
  },
  {
    title: i18n.t("common:services"),
    url: "/service",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase",
  },
  {
    title: i18n.t("common:contact"),
    url: "/contact",
    cName: "nav-links",
    icon: "fa-solid fa-address-book",
  },
  {
    title: i18n.t("common:language"),
    cName: "nav-links",
    icon: "fa-solid fa-globe",
  },
  {
    title: "Get the app",
    url: "/",
    cName: "nav-links-mobile",
  },
];
