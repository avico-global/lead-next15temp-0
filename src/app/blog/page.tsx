import React from "react";
import Link from "next/link";
import { blogs } from "../../../components/json/blog";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import FullContainer from "../../../components/common/FullContainer";
import AboutBanner from "../../../components/about/AboutBanner";
import Head from "next/head";
import JsonLd from "../../../components/json/JsonLd";
import GoogleTagManager from "../../../lib/GoogleTagManager";

interface BlogProps {
  logo: any; // Replace 'any' with a more specific type if needed
  blog_list: any[]; // Replace 'any' with a more specific type if needed
  imagePath: string;
  project_id: string | null;
  categories: any; // Replace 'any' with a more specific type if needed
  domain: string;
  meta: any; // Replace 'any' with a more specific type if needed
  about_me: any; // Replace 'any' with a more specific type if needed
  copyright: string;
  contact_details: any; // Replace 'any' with a more specific type if needed
  banner: any; // Replace 'any' with a more specific type if needed
}

const Blog: React.FC<BlogProps> = ({
  logo,
  blog_list = [], // Default to an empty array
  imagePath,
  project_id,
  categories,
  domain,
  meta,
  about_me,
  copyright,
  contact_details,
  banner,
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="author" href={`http://${domain}`} />
        <link rel="publisher" href={`http://${domain}`} />
        <link rel="canonical" href={`http://${domain}`} />
        <meta name="robots" content="noindex" />
        <meta name="theme-color" content="#008DE5" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleTagManager />
        <meta
          name="google-site-verification"
          content="zbriSQArMtpCR3s5simGqO5aZTDqEZZi9qwinSrsRPk"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`https://api15.ecommcube.com/${domain}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`https://api15.ecommcube.com/${domain}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`https://api15.ecommcube.com/${domain}/favicon-16x16.png`}
        />
      </Head>

      <Navbar />
      <AboutBanner title={"Our Blog"} image={""} />

      <FullContainer className="mx-auto max-w-[1300px]">
        <div className="px-4 py-8">
          {blog_list.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {blog_list.map((item) => (
                <div key={item.id} className="rounded-lg p-4">
                  {/* Image at the top */}
                  <div className="w-full mb-4">
                    <img
                      src={item.image || "/default-image.jpg"} // Provide a fallback image
                      alt={item.title || "Blog Image"}
                      className="rounded-lg object-cover w-full h-64"
                    />
                  </div>
                  {/* Content below the image */}
                  <div className="text-start">
                    <h2 className="text-2xl font-semibold mb-2">
                      {item.title || "Untitled Blog"}
                    </h2>
                    <p className="text-gray-500 mb-4">{item.date || "Unknown Date"}</p>
                    <Link
                      href={`/blog/${item.id}`}
                      className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                    >
                      Read Blog
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No blogs available at the moment.</p>
          )}
        </div>
      </FullContainer>

      <Footer image={""} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `http://${domain}`,
              name: domain,
              url: `http://${domain}/`,
              logo: {
                "@type": "ImageObject",
                url: `${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${logo?.file_name}`,
              },
              sameAs: [
                "http://www.facebook.com",
                "http://www.twitter.com",
                "http://instagram.com",
              ],
            },
            {
              "@type": "ItemList",
              url: `http://${domain}`,
              name: "blog",
              itemListElement: blog_list?.map((blog, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Article",
                  url: `http://${domain}/${blog?.article_category?.name}/${blog.key}`,
                  name: blog.title,
                },
              })),
            },
          ],
        }}
      />
    </>
  );
};



export default Blog;
