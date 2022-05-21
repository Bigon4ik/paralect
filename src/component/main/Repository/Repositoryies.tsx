import React, {useEffect, useState} from 'react';
import s from './Repositoryies.module.css';
import {Repository} from './RepositoryItem/Repository';
import {Pagination} from '../../pagination/pagination';
import axios from 'axios';
import {DataType} from '../ProfileGit/ProfileGit';

type RepositoryItemType={
    id:string,
    name:string
    login:string
    description:string,
    html_url:string,
    public_repos:number
}
type RepositoriesPropsType = {
    data: DataType

}
export const Repositoryies = (props: RepositoriesPropsType) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [repository, setRepository] = useState([])
    const [loading, setLoading] = useState(false);
    const itemsPage = 4;
    const totalRepositoriesCount = props.data.public_repos;

    const URLRep = `https://api.github.com/users/${props.data.login}/repos?page=${currentPage}&per_page=${itemsPage}`;

    useEffect(() => {
        async function getRep() {
            try {
                setLoading(true);
                await axios.get(URLRep).then((res) => setRepository(res.data));
            } finally {
                setLoading(false);
            }
        }

        getRep();
    }, [URLRep]);

    return (

        <div className={s.RepositoryItem}>
            <h1 className={s.totalRepositoriesCount}>Repositories ({totalRepositoriesCount})</h1>
            <div>
                {repository.map((rep:RepositoryItemType) => (
                    <Repository
                        key={rep.id}
                        href={rep.html_url}
                        name={rep.name}
                        title={rep.description}
                    />
                ))}
            </div>
            <div className={s.Pagination}>
                <Pagination
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    login={props.data.login}
                    totalRepositoriesCount={totalRepositoriesCount}
                    itemsPage={itemsPage}
                />
            </div>
            {loading && (<div className='loader'></div>)}
        </div>
    );
};