import React from "react";
import Blog from "../../api/blogSchema";
import BlogPage from "../../../components/BlogPage";

function BlogDisplay(props){

    const [notFound, setNotFound] = React.useState(null);

    React.useEffect(()=>{
        if (!props.blogData){
            setNotFound("true");
        }else{
            setNotFound("false");
        }
    })

    return(
        <React.Fragment>
            {notFound === null && <p>Loading...</p>}
            {notFound === "true" && <p>Page not found, sorry!</p>}
            {notFound === "false" && (
                    <BlogPage 
                        title={props.blogData.title}
                        content={props.blogData.content}
                        likes={props.blogData.likes}
                    />
                )
            }
        </React.Fragment>
    )

};

export default BlogDisplay;

export async function getStaticPaths(){
    const mongoose = require("mongoose");
    const password = "ok7EKmrxQ1FJ9EIM";
    await mongoose.connect("mongodb+srv://Nuqz:" + password + "@cluster0.fvaspk2.mongodb.net/?retryWrites=true&w=majority")
    
    async function getData(){
        return Blog.find({})
    };

    const blogs = await getData();
    
    return {
        fallback: true,
        paths: blogs.map(element=>{
            return {params: {
                    blogId: element._id.toString()
                }
            }
        })
    }
};

export async function getStaticProps(context){
    const blogId = context.params.blogId;
    var ObjectId = require("mongodb").ObjectId;

    const mongoose = require("mongoose");
    const password = "ok7EKmrxQ1FJ9EIM";
    await mongoose.connect("mongodb+srv://Nuqz:" + password + "@cluster0.fvaspk2.mongodb.net/?retryWrites=true&w=majority")
    
    async function getData(){
        try{
            return Blog.findOne({_id: ObjectId(blogId)})
        }catch{
            return null
        }
    };

    const singleBlog = await getData();

    try{
        return {
            props: {
                blogData: {
                    title: singleBlog.title,
                    content: singleBlog.content,
                    likes: singleBlog.likes,
                    comments: singleBlog.comments
                }
            }
        }
    }catch{
        return {
            props: {blogData: null}
        }
    }
    
};

