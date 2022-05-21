import React from "react";
import s from "./InitialStateUserFound.module.css";
import logoUserNotFound from "../../../utilits/image/Union.png";

export const  InitialUserNotFound= () => {
    return (
        <div className={s.InitialStateUserFound}>

            <img className={s.imgLogo} src={logoUserNotFound} alt="logoUserNotFound" />

            <p className={s.text}>User not found</p>

        </div>
    );
};