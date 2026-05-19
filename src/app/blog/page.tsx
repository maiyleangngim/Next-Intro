"use client"
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';


export default function BlogPage(){
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        async function getAllBlog(){
            const res = await fetch(process.env.
                NEXT_PUBLIC_BASE_URL + '/posts');
            const data = await res.json();
            setBlog(data?.posts) 
            return data;
        }
        getAllBlog();

    }, [])

    console.log("==> blogs: ", blog)

  return (
    <div className="grid grid-cols-4 p-6 gap-4">
        <h1 className="text-4xl font-bold col-span-4 py-4">Fetch only fetch the id, name, and body from the API dummy json and the image i use static</h1>
        {blog?.map(({id,title, body})=>(
            <BlogCard 
            id={id} 
            key={id}
            title = {title} 
            body= {body}/>
        ))}
    </div>
  )
}