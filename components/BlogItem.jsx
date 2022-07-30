import React from "react";
import Link from "next/link";

function BlogItem(props){
    return(
        <div className="blog-item">
            <h1>{props.title}</h1>
            <p>{props.content}</p> 
            <Link href={"/posts/"+props.id}>Read More</Link>       
        </div>
    )
};

export default BlogItem;