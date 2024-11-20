import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import React from "react";
import matter from 'gray-matter';
import fs from "fs"


const dirContent = fs.readdirSync("content","utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})

// const blogs = [
//   {
//     title: "Understanding React Hooks",
//     description:
//       "A comprehensive guide to understanding React hooks and how to use them effectively.",
//     slug: "understanding-react-hooks",
//     date: "2023-10-01",
//     author: "Jane Doe",
//     image:
//       "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Next.js for Beginners",
//     description:
//       "An introduction to Next.js and its features for building server-rendered applications.",
//     slug: "nextjs-for-beginners",
//     date: "2023-10-05",
//     author: "John Smith",
//     image:
//       "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   // Add more blog objects as needed
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className=" rounded-lg shadow-lg overflow-hidden border"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="">{blog.description}</p>
              <div className="mt-4 mb-2">
                <span className="">{blog.date}</span>
                <span className=" ml-4">by {blog.author}</span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants()}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
