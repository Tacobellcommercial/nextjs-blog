import React from "react";
import { useRouter } from "next/router";

function Form(){    

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const router = useRouter();

    return(
        <div className="write-form">
            <form onSubmit={async (event)=>{
                event.preventDefault();
                fetch("/api/addBlog", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({title, content})
                })

                setTitle("");
                setContent("");
                router.push("/")
            }}>
                <h1>Title</h1>
                <input onChange={event=>setTitle(event.target.value)} value={title}/>
                <h1>Content</h1>
                <textarea cols="40" rows="7" onChange={event=>setContent(event.target.value)} value={content}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;