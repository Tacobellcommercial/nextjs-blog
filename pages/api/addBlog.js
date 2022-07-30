import Blog from "./blogSchema";

export default async function handler(req, res){
    if (req.method === "POST"){
        const mongoose = require("mongoose");
        const password = "ok7EKmrxQ1FJ9EIM"
        await mongoose.connect("mongodb+srv://Nuqz:" + password + "@cluster0.fvaspk2.mongodb.net/?retryWrites=true&w=majority")
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            comments: [],
            likes: 0
        })

        const savedBlog = await newBlog.save();

    }
}