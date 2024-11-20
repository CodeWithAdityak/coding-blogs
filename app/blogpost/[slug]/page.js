import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }) {
  const { slug } = await params; // Await params if necessary

  const filePath = `content/${slug}.md`;
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  
  return (
    <div className="w-2/3 mx-auto p-5 flex gap-5">
      <div className="blogBox w-3/4 ">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className=" border-l-4 text-sm mb-2 border-gray-600 pl-4 italic">
          &quot; {data.description} &quot;
        </p>
        <p className="mb-2">
          By{" "}
          <span className="font-semibold text-gray-600  italic">
            {data.author}
          </span>{" "}
          on <span>{data.date}</span>
        </p>
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
      <div className="onthispage 1/4 pl-14">
      <OnThisPage htmlContent={htmlContent} />
      </div>
    </div>
  );
}
