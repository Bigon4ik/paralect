import React from 'react';
import s from './Profile.module.css';
import Followers from "../../../utilits/image/shared.svg";
import Following from "../../../utilits/image/provate.svg";
import { followers } from "../../../utilits/utils";
import {DataType} from '../ProfileGit/ProfileGit';


type ProfilePropsType = {
    data: DataType
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.Profile}>
            <img className={s.imgUser} src={props.data.avatar_url} alt="imgProfile"/>
            <h2 className={s.name}>{props.data.name}</h2>
            <a className={s.linkUserName} target={'_blank'} href={props.data.html_url}>{props.data.login}</a>
            <div className={s.profile__follows}>
                <p className={s.profile__inner}>
                    <img src={Followers} alt="Followers" />
                    {followers(props.data.followers)}
                    &nbsp;followers
                </p>
                <p className={s.profile__inner}>
                    <img src={Following} alt="Following" />
                    {props.data.following}
                    &nbsp;following
                </p>
            </div>

        </div>
    );
};

