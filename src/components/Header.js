import React from "react";
import { Link } from "react-router-dom";
import styled from "./header.module.css";

import { ReactComponent as Dogs } from "../Assets/dogs.svg";

const Header = (props) => {
  return (
    <header className={styled.header}>
      <nav className={`${styled.nav} container`}>
        <Link className={styled.brand} to="/" aria-label="Dogs - home">
          <Dogs />
        </Link>
        <Link className={styled.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
