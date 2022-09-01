import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSubreddits, selectSubreddits } from '../../app/subRedditSlice';
import './Subreddits.css';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../app/redditSlice';
import logo from './reddit-logo.png';

const Subreddits = () => {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    //Fetch Subreddits
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <Card className="subreddit-card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id} className={`${selectedSubreddit === subreddit.url && `selected-subreddit`}`}>
                        <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))} >
                            <img src={subreddit.icon_img || logo} className="subreddit-icon" alt=""/>
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default Subreddits;