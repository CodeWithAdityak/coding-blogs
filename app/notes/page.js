import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import React from "react";
import matter from 'gray-matter';
import fs from "fs"


const dirContent = fs.readdirSync("notescontent","utf-8")

const NotesFunction = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`notescontent/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})


const Notes = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NotesFunction.map((note) => (
          <div
            key={note.slug}
            className=" rounded-lg shadow-lg overflow-hidden border"
          >
            <img
              src={note.image}
              alt={note.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="">{note.description}</p>
              <div className="mt-4 mb-2">
                <span className="">{note.date}</span>
                <span className=" ml-4">by {note.author}</span>
              </div>
              <Link
                href={`/notespost/${note.slug}`}
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

export default Notes;
