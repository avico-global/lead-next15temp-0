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
import { callBackendApi, getDomain, getImagePath } from "../../../lib/myFun";

interface BlogProps {
  domain: string;
  imagePath: string | null;
  meta: any;
  logo: any;
  blog_list: any[];
  categories: any;
  copyright: string;
  about_me: any;
  contact_details: any;
  banner: any;
  about_company: any;
  about_company1: any;
  nav_type: any;
  footer_type: any;
  tag_list: any;
  all_data: any;
}

async function fetchBlogData(): Promise<BlogProps> {
  const domain = getDomain(process.env.NEXT_PUBLIC_HOST || "");
  const meta = await callBackendApi({ domain, type: "meta_home" });
  const logo = await callBackendApi({ domain, type: "logo" });
  const favicon = await callBackendApi({ domain, type: "favicon" });
  const blog_list = await callBackendApi({ domain, type: "blog_list" });
  const categories = await callBackendApi({ domain, type: "categories" });
  const contact_details = await callBackendApi({ domain, type: "contact_details" });
  const about_me = await callBackendApi({ domain, type: "about_me" });
  const about_company = await callBackendApi({ domain, type: "about_company" });
  const about_company1 = await callBackendApi({ domain, type: "about_company1" });
  const copyright = await callBackendApi({ domain, type: "copyright" });
  const banner = await callBackendApi({ domain, type: "banner" });
  const layout = await callBackendApi({ domain, type: "layout" });
  const tag_list = await callBackendApi({ domain, type: "tag_list" });
  const nav_type = await callBackendApi({ domain, type: "nav_type" });
  const footer_type = await callBackendApi({ domain, type: "footer_type" });
  const all_data = await callBackendApi({ domain, type: "" });

  const project_id = logo?.data?.[0]?.project_id || null;
  const imagePath = await getImagePath(project_id, domain);

  return {
    domain,
    imagePath,
    meta: meta?.data?.[0]?.value || null,
    logo: logo?.data?.[0] || null,
    blog_list: blog_list?.data?.[0]?.value || [],
    categories: categories?.data?.[0]?.value || null,
    copyright: copyright?.data?.[0]?.value || null,
    about_me: about_me?.data?.[0] || null,
    contact_details: contact_details?.data?.[0]?.value,
    banner: banner?.data?.[0] || null,
    about_company: about_company?.data?.[0] || null,
    about_company1: about_company1?.data?.[0] || null,
    nav_type: nav_type?.data?.[0]?.value || {},
    footer_type: footer_type?.data?.[0]?.value || {},
    tag_list: tag_list?.data?.[0]?.value || null,
    all_data,
  };
}

export default async function Blog() {
  const {
    domain,
    imagePath,
    meta,
    logo,
    blog_list,
    categories,
    copyright,
    about_me,
    contact_details,
    banner,
    about_company,
    about_company1,
    nav_type,
    footer_type,
    tag_list,
    all_data,
  } = await fetchBlogData();

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

      <Navbar
         logo={`${imagePath}/${logo?.file_name}`}
      />
      <AboutBanner title="Our Blog" image="" />

      <FullContainer className="mx-auto max-w-[1300px]">
        <div className="px-4 py-8">
          {blog_list.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {blog_list.map((item) => (
                <div key={item.id} className="rounded-lg p-4">
                  <div className="w-full mb-4">
                    <img
                      src={item.image ? `${imagePath}/${item.image}` : "/no-image.png" }
                      alt={item.title }
                      className="rounded-lg object-cover w-full h-64"
                    />
                  </div>
                  <div className="text-start">
                    <h2 className="text-2xl font-semibold mb-2">
                      {item.title || "Untitled Blog"}
                    </h2>
                    <p className="text-gray-500 mb-4">{item.date || "Unknown Date"}</p>
                    <Link
                      href={`/blog/${item.title}`}
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

      <Footer image="" />

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
              itemListElement: blog_list?.map((blog: { article_category: { name: any }; key: any; title: any }, index: number) => ({
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
}
