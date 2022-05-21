import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {InitialState} from './component/pages/InitialState/InitialState';
import {Header} from './component/header/Header';
import {InitialUserNotFound} from './component/pages/InitialStateUserNotFound/InitialStateUserNotFound';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {DataType, ProfileGit} from './component/main/ProfileGit/ProfileGit';
import axios from 'axios';


function App() {
    const PATH = {
        INITIAL_STATE: '/',
        PROFILE: '/profile',
        NO_REPOSITORY: '/noRepository',
        NO_FOUND: '/404',
    }
    const initialState:DataType =
        {
            login:"",
            id: "",
            avatar_url:"",
            html_url: "",
            repos_url: "",
            name:"" ,
            followers: 0,
            following: 0,
            public_repos:0,
        }

    const [loading, setLoading] = useState(false)
    const [searchName, setSearchName] = useState('')
    const [data, setData] = useState(initialState)

    const navigate = useNavigate()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            console.log(searchName);
            setSearchName(searchName)
            SearchAPI()
        }
    }
    const onKeyPressHome = () => {
        navigate(PATH.INITIAL_STATE)
        setSearchName('')
    }

    async function SearchAPI() {
        setLoading(true)
        try {
            const profile = await axios.get(`https://api.github.com/users/${searchName}`)
                .then(res => res.data)
            if (profile) {
                setData(profile);
                navigate(PATH.PROFILE)
            }
        } catch {
            navigate(PATH.NO_FOUND)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="App">
            <Header
                onKeyPressHome={onKeyPressHome}
                onKeyPressHandler={onKeyPressHandler}
                onChangeHandler={onChangeHandler}
                name={searchName}
            />
            <Routes>
                <Route path={PATH.INITIAL_STATE} element={<InitialState/>}/>
                <Route path={PATH.PROFILE} element={<ProfileGit data={data}/>}/>
                <Route path={PATH.NO_FOUND} element={<InitialUserNotFound/>}/>
                <Route path={PATH.NO_REPOSITORY} element={<Navigate to='/404'/>}/>

            </Routes>
            {loading && (<div className='loader'></div>)}
        </div>
    );
}

export default App;
