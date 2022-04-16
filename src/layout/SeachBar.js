import React from 'react'

export const SeachBar = () => {
    const [input, setInput] = React.useState('');
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <form className='search'>
            <input onChange={onChange} value={input} placeholder=' ' type="text" className="search__input" />
            <div className='search__icon'>
                <img src="https://giphy.com/static/img/search-icon.svg" alt="" srcset="" />
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
