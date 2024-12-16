"use client";
import React from 'react'
import Navbar from '../../../components/common/Navbar'
import AboutBanner from '../../../components/about/AboutBanner'
import Footer from '../../../components/common/Footer'
import Form from '../../../components/contact/Form'
import OpeningHour from '../../../components/contact/OpeningHour'
import JsonLd from '../../../components/json/JsonLd'
import Head from 'next/head';
import GoogleTagManager from '../../../lib/GoogleTagManager'
import { callBackendApi, getDomain, getImagePath } from "../../../lib/myFun";


interface ContactProps {
  logo: any;
  blog_list: any[];
  imagePath: string | null;
  project_id: string | null;
  categories: any;
  domain: string;
  meta: any;
  about_me: any;
  copyright: string;
  contact_details: any;
  banner: any;
}

// Server-side data fetching (compatible with `page.tsx`)
export async function fetchContactData(
  searchParams: Record<string, string | undefined>
): Promise<ContactProps> {
  const domain = getDomain(searchParams?.host || "");

  const [
    logo,
    blog_list,
    categories,
    contact_details,
    about_me,
    copyright,
    meta,
    banner,
  ] = await Promise.all([
    callBackendApi({ domain, query: searchParams, type: "logo" }),
    callBackendApi({ domain, query: searchParams, type: "blog_list" }),
    callBackendApi({ domain, query: searchParams, type: "categories" }),
    callBackendApi({ domain, query: searchParams, type: "contact_details" }),
    callBackendApi({ domain, query: searchParams, type: "about_me" }),
    callBackendApi({ domain, query: searchParams, type: "copyright" }),
    callBackendApi({ domain, query: searchParams, type: "meta_home" }),
    callBackendApi({ domain, query: searchParams, type: "banner" }),
  ]);

  let projectId =null;
  let imagePath = null;

  return {
    domain,
    imagePath,
    project_id: projectId,
    logo: logo?.data[0],
    blog_list: blog_list?.data[0]?.value || null,
    categories: categories?.data[0]?.value || null,
    meta: meta?.data[0]?.value || null,
    copyright: copyright?.data[0]?.value || null,
    about_me: about_me?.data[0] || null,
    banner: banner?.data[0],
    contact_details: contact_details?.data[0]?.value || null,
  };
}

// Main Page Component
const Contact = async ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  const {
    domain,
    imagePath,
    project_id,
    logo,
    blog_list,
    categories,
    meta,
    about_me,
    copyright,
    contact_details,
    banner,
  } = await fetchContactData(searchParams);
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
      <AboutBanner title={"Contact Us"} image={''} />
      <Form />
      <OpeningHour />
      <Footer image={''} />


      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `http://${domain}/`,
              url: `http://${domain}/`,
              name: meta?.title,
              isPartOf: {
                "@id": `http://${domain}`,
              },
              description: meta?.description,
              inLanguage: "en-US",
            },
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
              itemListElement: blog_list?.map((blog: { article_category: { name: any; }; key: any; title: any; }, index: number) => ({
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
  )
}

export default Contact;
