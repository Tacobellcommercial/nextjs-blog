import React from "react";

function BlogPage(props){
    return(
        <div className="blog-page">
            <h2>Likes: {props.likes}</h2>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
};

export default BlogPage;