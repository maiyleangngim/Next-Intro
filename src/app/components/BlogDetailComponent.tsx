"use client";
import { useEffect, useState } from "react";
import { BlogType } from "./BlogCard";


export default function BlogDetailComponent({ id }: { id: string }) {
  const [blog, setBlog] = useState<BlogType>();

  useEffect(() => {
    async function getAllBlog() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/posts/${id}`,
      );
      const data = await res.json();
      setBlog(data);
      return data;
    }
    getAllBlog();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Title : {blog?.title}</h1>
      <p className="text-lg">Body : {blog?.body}</p>
    </div>
  );
}