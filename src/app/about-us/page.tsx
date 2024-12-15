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

interface AboutProps {
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

const About: React.FC<AboutProps> = ({
  logo,
  blog_list,
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
      <Footer image="" contact_details={""} />
    </>
  );
};
// export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
//   req,
//   query,
// }) => {
//   const domain = getDomain(req?.headers?.host);

//   const meta = await callBackendApi({ domain, query, type: "meta_home" });
//   const logo = await callBackendApi({ domain, query, type: "logo" });
//   const blog_list = await callBackendApi({ domain, query, type: "blog_list" });
//   const categories = await callBackendApi({
//     domain,
//     query,
//     type: "categories",
//   });
//   const contact_details = await callBackendApi({
//     domain,
//     query,
//     type: "contact_details",
//   });
//   const about_me = await callBackendApi({ domain, query, type: "about_me" });
//   const copyright = await callBackendApi({ domain, query, type: "copyright" });
//   const banner = await callBackendApi({ domain, query, type: "banner" });

//   let project_id = null;
//   let imagePath = null;

//   if (logo.project_id) {
//     project_id = logo.project_id;
//   } else if (query.project_id) {
//     project_id = query.project_id;
//   }

//   imagePath = await getImagePath(project_id);

//   return {
//     props: {
//       domain,
//       imagePath,
//       project_id: query.project_id ? project_id : null,
//       logo: logo?.data[0],
//       blog_list: blog_list.data[0].value,
//       categories: categories?.data[0]?.value || null,
//       meta: meta?.data[0]?.value || null,
//       copyright: copyright.data[0].value || null,
//       about_me: about_me.data[0] || null,
//       banner: banner.data[0],
//       contact_details: contact_details.data[0].value,
//     },
//   };
// };

export default About;
