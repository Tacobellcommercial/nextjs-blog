const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: [],
    likes: Number
})


export default mongoose.models.Blog || mongoose.model("Blog", modelSchema);
