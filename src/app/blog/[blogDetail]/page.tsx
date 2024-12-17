

import React from "react";
import { notFound } from "next/navigation"; // For handling 404
import { blogs } from "../../../../components/json/blog"; // Adjust the path if needed
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import Link from "next/link";

// Define Blog types
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

// Dynamic Blog Detail Page
export default function BlogDetail({ params }: { params: { blogDetail: string } }) {
  const { blogDetail } = params;

  // Find the specific blog by ID
  const blog = blogs.find((item: Blog) => item.title === blogDetail);

  // Handle 404 if the blog is not found
  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
        {/* Blog Banner */}
        <div className="relative w-full h-64 lg:h-96 mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{blog.title}</h1>
          <p className="text-gray-500 text-sm">Published on {blog.date}</p>
        </header>

        {/* Blog Content */}
        <article className="prose max-w-none text-gray-700 leading-relaxed">
          {blog.content.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
              <p>{section.paragraph}</p>
            </section>
          ))}
        </article>

        {/* Back to Blogs Link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
      <Footer image={""} />
    </>
  );
}
