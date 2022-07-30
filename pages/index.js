import React from "react";
import Link from "next/link";
import Blog from "./api/blogSchema";
import BlogItem from "../components/BlogItem";

function Home(props){

  function DisplayBlogs(){
    const tableToReturn = [];

    props.blogs.forEach(element=>{
      tableToReturn.push(
        <BlogItem 
          key={element.id}
          title={element.title} 
          content={element.content} 
          id={element.id}
        />
      )
    })

    return tableToReturn;
  };

  return(
    <React.Fragment>
      <div className="header">
        <h1>Funny blogs, or serious blogs</h1>
        <p>Share your ideas to the world with an account to React Blogs,
          a blog website made with <span id="next-js">Next JS.</span></p>
        <div className="header-links">
          <Link href="/write">Start Writing</Link>
          <Link href="/about">About</Link>
        </div>
        <p className="sub-text">See posts written down below!</p>
      </div>

      <div className="posts">
        <h1>Blog Posts</h1>
        <div className="blog-items">
          <DisplayBlogs/>
        </div>
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps(){

  const mongoose = require("mongoose");
  const password = "ok7EKmrxQ1FJ9EIM";
  await mongoose.connect("mongodb+srv://Nuqz:" + password + "@cluster0.fvaspk2.mongodb.net/?retryWrites=true&w=majority")

  async function returnBlogs(){
    return Blog.find({});
  }
  const data = await returnBlogs();

  return {
    props: {blogs: data.map(element=>{
      return {id: element._id.toString(),
              title: element.title,
              content: element.content,
              likes: element.likes,
              comments: element.comments  
            }
    })},
    revalidate: 1
  }
};

export default Home;