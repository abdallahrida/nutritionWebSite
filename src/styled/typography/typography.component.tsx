import React from "react";
import styles from "./typography.module.css";

interface Props {
  title: string;
}

const Typography = (props: Props) => {
  const { title } = props;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export { Typography };
