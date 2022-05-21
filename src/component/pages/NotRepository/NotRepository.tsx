import React from "react";
import s from "./NotRepository.module.css";
import logoNoRep from "../../../utilits/image/rep.png";

export const NotRepository = () => {
    return (
        <div className={s.NotRepository}>
            <img className={s.imgNoRepo} src={logoNoRep} alt="logoNoRep" />
            <p className={s.text}>Repository list is empty</p>
        </div>
    );
};