import React from 'react';
import s from './Repository.module.css';

type PropsRepositoryType = {
    href: string,
    name: string,
    title: string
}

export const Repository = (props: PropsRepositoryType) => {
    return (
        <div className={s.repository__item}>
            <div>
                <a target="_blank" className={s.repository__link} rel="noreferrer" href={props.href}>
                    <h2 className={s.repository__title}>{props.name}</h2>
                </a>

                <p className={s.repository__text}>
                    {props.title ? props.title : null}
                </p>
            </div>
        </div>
    );
};
