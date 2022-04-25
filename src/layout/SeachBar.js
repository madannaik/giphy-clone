import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const SeachBar = () => {
    let navigate = useNavigate();
    const loc = useLocation()
    const [input, setInput] = React.useState('');
    const onChange = (e) => {
        setInput(e.target.value);
    }
    const onClick = () => {
        if (loc.pathname === '/search') {
            navigate(`/search`, { state: input, replace: true });
            window.location.reload();
        }
        else if (input !== '') {
            navigate(`/search`, { state: input, replace: true })
        }
        else navigate('/')
    }
    const onSubmit = (e) => {
        e.preventdefault();
        onClick()
    }
    return (
        <form className='search' onSubmit={onSubmit}>
            <input onChange={onChange} value={input} placeholder=' ' type="text" className="search__input" />
            <div className='search__icon' onClick={onClick}>
                <img src="https://giphy.com/static/img/search-icon.svg" alt="" srcSet="" />
            </div>
            <div style={{ display: `${input === '' ? "block" : "none"}` }} className="search__placeholder">
                <div>
                    <p className="search__placeholder--1">@username + tag to search within a verified channel</p>
                    <p className="search__placeholder--2">Search all the GIFs and Stickers</p>
                    <p className="search__placeholder--3">username + tag to search within a verified channel</p>
                </div>
            </div>
            <div></div>
        </form>
    )
}
