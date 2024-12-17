"use client";
import React from "react";
import Navbar from "../../../components/common/Navbar";
import AboutBanner from "../../../components/about/AboutBanner";
import OurJourney from "../../../components/about/OurJourney";
import OurNumbers from "../../../components/about/OurNumbers";
import Choose from "../../../components/about/Choose";
import Footer from "../../../components/common/Footer";
import Head from "next/head";
import GoogleTagManager from "../../../lib/GoogleTagManager";
import { callBackendApi, getDomain, getImagePath } from "../../../lib/myFun";
import JsonLd from "../../../components/json/JsonLd";

interface AboutProps {
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

// Fetch data on the server
async function fetchAboutData(): Promise<AboutProps> {
  const domain = getDomain(process.env.NEXT_PUBLIC_HOST || "");

  // Call APIs to fetch all required data
  const [
    meta,
    logo,
    favicon,
    blog_list,
    categories,
    contact_details,
    about_me,
    about_company,
    about_company1,
    copyright,
    banner,
    layout,
    tag_list,
    nav_type,
    footer_type,
    all_data,
  ] = await Promise.all([
    callBackendApi({ domain, type: "meta_home" }),
    callBackendApi({ domain, type: "logo" }),
    callBackendApi({ domain, type: "favicon" }),
    callBackendApi({ domain, type: "blog_list" }),
    callBackendApi({ domain, type: "categories" }),
    callBackendApi({ domain, type: "contact_details" }),
    callBackendApi({ domain, type: "about_me" }),
    callBackendApi({ domain, type: "about_company" }),
    callBackendApi({ domain, type: "about_company1" }),
    callBackendApi({ domain, type: "copyright" }),
    callBackendApi({ domain, type: "banner" }),
    callBackendApi({ domain, type: "layout" }),
    callBackendApi({ domain, type: "tag_list" }),
    callBackendApi({ domain, type: "nav_type" }),
    callBackendApi({ domain, type: "footer_type" }),
    callBackendApi({ domain, type: "" }),
  ]);

  // Get project ID and image path
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

// Page Component
export default async function Home() {
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
  } = await fetchAboutData();

  return (
    <>
      <Head>
        {/* Meta Tags */}
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
        {/* Favicon Links */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${logo?.file_name}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${logo?.file_name}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${logo?.file_name}`}
        />
      </Head>

      {/* Components */}
      <Navbar logo={`${imagePath}/${logo?.file_name}`} />
      <AboutBanner title={"About Us"} image="" />
      <OurJourney />
      <OurNumbers />
      <Choose image="" />
      <Footer image="" />

      {/* Structured Data */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `http://${domain}/#website`,
              url: `http://${domain}/`,
              name: domain,
              description: meta?.description,
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                "@id": `http://${domain}`,
              },
            },
            // {
            //   "@type": "BreadcrumbList",
            //   itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            //     "@type": "ListItem",
            //     position: index + 1,
            //     name: breadcrumb.label,
            //     item: `http://${domain}${breadcrumb.url}`,
            //   })),
            // },
          ],
        }}
      />
    </>
  );
}
