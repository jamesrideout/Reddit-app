import React from 'react';
import './Post.css';
import Card from '../../components/Card/Card';

const Post = (props) => {
    
    const { post } = props;
    
    //console.log(post);

    return (
        <article key={post.id} >
            <Card>
                <div className="post-container">
                    <div className="post-img-container">
                        <img src={post.url} className="post-img" />
                    </div>
                </div>
            </Card>
        </article>
    )

}

export default Post;