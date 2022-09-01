import React from 'react';
import './Post.css';
import Card from '../../components/Card/Card';
import moment from 'moment';

const Post = (props) => {
    
    const { post } = props;
    
    //console.log(post);

    return (
        <article key={post.id} >
            <Card className="post-card">
                <div className="post-container">
                    <div className="post-title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="post-img-container">
                        <img src={post.url} className="post-img" alt="" />
                    </div>
                    <div className="post-details">
                        <div className="post-author">
                            <span>Posted by: {post.author}</span>
                        </div>
                        <div>
                            <span>{moment.unix(post.created_utc).fromNow()}</span>
                        </div>
                        <div>
                            <span>Upvotes: <span className="upvotes">{post.ups}</span></span>
                        </div>
                    </div>
                </div>
            </Card>
        </article>
    )

}

export default Post;