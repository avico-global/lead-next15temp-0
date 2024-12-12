import React from "react";
import Link from "next/link";
import { blogs } from "../../../components/json/blog";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import FullContainer from "../../../components/common/FullContainer";
import AboutBanner from "../../../components/about/AboutBanner";

export default function Blog() {
  return (
    <>
      <Navbar />
      <AboutBanner title={"Our Blog"} image={""} />

      <FullContainer className="  mx-auto max-w-[1300px] ">
        <div className="  px-4 py-8">
          <div className="grid lg:grid-cols-3">
            {blogs.map((blog) => (
              <div key={blog.id} className="   rounded-lg p-4">
                {/* Image at the top */}
                <div className="w-full mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                {/* Content below the image */}
                <div className="text-start">
                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-500 mb-4">{blog.date}</p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                  >
                    Read Blog
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FullContainer>

      <Footer image={""} />
    </>
  );
}
