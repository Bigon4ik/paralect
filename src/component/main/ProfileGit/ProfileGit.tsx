import React from 'react';
import s from './ProfileGit.module.css';
import {Repositoryies} from '../Repository/Repositoryies';
import {Profile} from '../profile/Profile';
import {NotRepository} from '../../pages/NotRepository/NotRepository';


export type DataType={
    login:string
    id: string
    avatar_url:string
    html_url: string,
    repos_url: string,
    name: string,
    followers: number,
    following: number,
    public_repos:number,

}
export type ProfileGitPropsType = {
    data: DataType
}
export const ProfileGit = (props: ProfileGitPropsType) => {

    return (
        <div className={s.Profile}>
            <Profile data={props.data}/>
            <div className={s.Repository}>
                {props.data.public_repos
                    ? <Repositoryies data={props.data}/>
                    : <NotRepository/>
                }
            </div>
        </div>

    );
};