import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Header.module.css';
import logo from '../../utilits/image/Vector.svg'


type HeaderPropsType = {
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>)=>void
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>)=>void
    name: string
    onKeyPressHome: ()=>void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.Header}>
            <img className={s.logoGitHub} src={logo}
                 onClick={props.onKeyPressHome}/>
            <input
                type="text"
                placeholder={'Enter GitHub username'}
                onChange={props.onChangeHandler}
                onKeyPress={props.onKeyPressHandler}
                value={props.name}
            />
        </div>
    );
};