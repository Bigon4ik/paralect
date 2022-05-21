import React from "react";
import s from "./InitialState.module.css";
import logoSearch from "../../../utilits/image/search.png";

export const InitialState = () => {
    return (
    <div className={s.InitialState}>

        <img className={s.imgSearch} src={logoSearch} alt="logoSearch" />
        <p>Start with searching
            a GitHub user</p>

    </div>
);
};