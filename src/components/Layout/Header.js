import React, { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../../assets/background.jpg";
import CartButton from "../Cart/CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food POS</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      {/* img place */}
      <div className={classes["main-image"]}>
        <img src={image} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
