import React, { useState, useEffect } from 'react';
import logo from './reddit-logo.png';
import { HiOutlineSearch } from 'react-icons/hi';
import './Searchbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../app/redditSlice';

const SearchBar = () => {

    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
      };
    
    useEffect(() => {
    setSearchTermLocal(searchTerm);
    }, [searchTerm]);
    
    const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
    };

    return (
        <div className="searchbar-container">
            <form className="search" onSubmit={onSearchTermSubmit}>
                <img src={logo} className="App-logo" alt="logo" />
                <input 
                    type='text'
                    placeholder="Search..."
                    aria-label="Search posts"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                />
                <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                    <HiOutlineSearch />
                </button>
            </form>
            <h4>Reddit API Project using React/Redux</h4>
        </div>
    );
};

export default SearchBar;