import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  selectFilteredPosts,
} from '../../app/redditSlice';
import './Main.css';
import Post from '../Post/Post';

const Main = () => {

    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    //Fetch posts by Subreddit
    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);



    if (isLoading) {
        return (
            <div className="main-container">
                <h2>Loading...</h2> 
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
            </div>
        );
    }

    return (
        <div className="main-container">
            <h2>Posts</h2>
            <div>
                {posts.map((post) => (
                    <Post 
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </div>
    )

}

export default Main;