import React from "react";
import { Button as ButtonAnt } from "antd";
import styles from "./ButtonEditAnt.module.css";

const ButtonEditAnt = ({ onClick, icon }) => {
  return <ButtonAnt className={styles.button} icon={icon} onClick={onClick} />;
};

export default ButtonEditAnt;
