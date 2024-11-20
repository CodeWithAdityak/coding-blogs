// coding-blogs/OnThisPage.js
"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Function to extract h1 headings from the html content
    const extractHeadings = (html) => {
      if (typeof window !== "undefined") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const headings = Array.from(doc.querySelectorAll("h2"));
        return headings.map((heading) => heading.textContent);
      }
      return [];
    };

    const extractedHeadings = extractHeadings(htmlContent);
    setHeadings(extractedHeadings);
  }, [htmlContent]);

  return (
    <div className="on-this-page mt-4 sticky top-20">
      <h2 className="text-xl font-semibold mb-2">On This Page</h2>
      <ul className="list-none p-0">
        {headings.map((heading, index) => (
          <li key={index} className="mb-1">
            <Link
              href={`#${heading.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-gray-500 hover:underline"
            >
              {heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;