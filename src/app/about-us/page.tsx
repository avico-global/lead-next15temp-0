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

interface AboutProps {
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
  about_company: any;
}



export async function fetchAboutData(
  query: Record<string, string | undefined>
): Promise<AboutProps> {
  const domain = getDomain(query?.host || "");

  // Simulate project_id retrieval
  const project_id = "675a8a205afaa8130e5095ea"; // Replace with actual logic if needed


  const logo = await callBackendApi({ domain, type: "logo" });
  const blog_list = await callBackendApi({ domain, type: "blog_list" });
  const categories = await callBackendApi({ domain, type: "categories" });
  const contact_details = await callBackendApi({ domain, type: "contact_details" });
  const about_me = await callBackendApi({ domain, type: "about_me" });
  const copyright = await callBackendApi({ domain, type: "copyright" });
  const meta = await callBackendApi({ domain, type: "meta_about" });
  const banner = await callBackendApi({ domain, type: "banner" });
  const about_company = await callBackendApi({ domain, type: "about_company" });
  let imagePath = null;
  imagePath = await getImagePath(project_id, domain);

  return {
    domain,
    imagePath,
    about_company,
    project_id,
    logo: logo ? logo[0] : null, // Safely access first element or set to null
    blog_list: blog_list?.[0]?.value || null,
    categories: categories?.[0]?.value || null,
    meta: meta?.[0]?.value || null,
    copyright: copyright?.[0]?.value || null,
    about_me: about_me?.[0] || null,
    banner: banner?.[0] || null,
    contact_details: contact_details?.[0]?.value || null,
  };
}

// Main Page Component
const About = async ({
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
  } = await fetchAboutData(searchParams);

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

      <Navbar />
      <AboutBanner title={"About Us"} image="" />
      <OurJourney />
      <OurNumbers />
      <Choose image="" />
      <Footer image="" />
    </>
  );
};

export default About;
