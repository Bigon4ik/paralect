import React from 'react';
import s from './Repository.module.css';

type PropsRepositoryType = {
    href: string,
    name: string,
    title: string
}

export const Repository = (props: PropsRepositoryType) => {
    return (
        <div className={s.repository_item}>
            <div>
                <a target="_blank" className={s.repository_link} rel="noreferrer" href={props.href}>
                    <h2 className={s.repository_title}>{props.name}</h2>
                </a>

                <p className={s.repository_text}>
                    {props.title ? props.title : null}
                </p>
            </div>
        </div>
    );
};
