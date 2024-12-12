import React from "react";
import Navbar from "../../../../components/common/Navbar";
import { blogs } from "../../../../components/json/blog";
import Footer from "../../../../components/common/Footer";
import Link from "next/link";

// Define types for the blog content and blog data
interface BlogContent {
  heading: string;
  paragraph: string;
}

interface Blog {
  id: string;
  title: string;
  date: string;
  image: string;
  content: BlogContent[];
}

// No need for `generateStaticParams` in this case, as params are automatically injected in dynamic routes

export default function BlogDetail({
  params,
}: {
  params: { blogDetail: string };
}) {
  const { blogDetail } = params;

  // Find the blog from the static blogs data (can be fetched from an API or a database)
  const blog = blogs.find((item: Blog) => item.id === blogDetail);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Blog Not Found</h1>
        <p className="text-gray-500 mt-4">
          The blog you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }

  const content = blog.content || [];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        <div className="relative w-full h-64 lg:h-96 mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
          <p className="text-gray-500 mt-2">{blog.date}</p>
        </div>

        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {content.map((item: BlogContent, index: number) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{item.heading}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
      <Footer image={""} />
    </>
  );
}
