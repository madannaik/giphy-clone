import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SeachBar = () => {
    let navigate = useNavigate();
    const [input, setInput] = React.useState('');
    const onChange = (e) => {
        setInput(e.target.value);
    }
    const onClick = () => {
        if (input !== '') {
            navigate(`/${input}`)
        }
        else navigate('/')
    }
    return (
        <form className='search'>
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
