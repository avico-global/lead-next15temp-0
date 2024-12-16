"use client";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import CleaningService from "../../components/home/CleaningService";
import FeauturedService from "../../components/home/FeauturedService";
import HomeBanner from "../../components/home/HomeBanner";
import Services from "../../components/home/Services";
import WhyChoose from "../../components/home/WhyChoose";
import { callBackendApi, getDomain, getImagePath } from "../../lib/myFun";
import Head from "next/head";
import GoogleTagManager from "../../lib/GoogleTagManager";
import JsonLd from "../../components/json/JsonLd";
import About from "../../components/home/About";

// Define types for the props
interface HomeProps {
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



export async function fetchHomeData(
  query: Record<string, string | undefined>
): Promise<HomeProps> {
  const domain = getDomain(query?.host || "");

  // Simulate project_id retrieval
  const project_id = ""; // Replace with actual logic if needed


  const logo = await callBackendApi({ domain, type: "logo" });
  const blog_list = await callBackendApi({ domain, type: "blog_list" });
  const categories = await callBackendApi({ domain, type: "categories" });
  const contact_details = await callBackendApi({ domain, type: "contact_details" });
  const about_me = await callBackendApi({ domain, type: "about_me" });
  const copyright = await callBackendApi({ domain, type: "copyright" });
  const meta = await callBackendApi({ domain, type: "meta_home" });
  const banner = await callBackendApi({ domain, type: "banner" });
  const about_company = await callBackendApi({ domain, type: "about_company" });
let imagePath=null;
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
const Home = async ({
  query,
}: {
  query: Record<string, string | undefined>;
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
    about_company,
  } = await fetchHomeData(query);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="author" href={`http://${domain}`} />
        <link rel="publisher" href={`http://${domain}`} />
        <link rel="canonical" href={`http://${domain}`} />
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
      <Navbar
        logo={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${logo?.file_name}`}
      />
      <HomeBanner
        imageTitle={banner?.value?.imageTitle}
        title={banner?.value?.title}
        tagline={banner?.value?.tagline}
        image={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${banner?.file_name}`}
      />
      <Services />
      <About
        image={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${about_company?.file_name}`}
      />
      <CleaningService image={""} />
      <FeauturedService image={""} />
      <WhyChoose image={""} />
      <Footer image={""} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `http://${domain}/`,
              url: `http://${domain}/`,
              name: meta?.title,
              isPartOf: { "@id": `http://${domain}` },
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
          ],
        }}
      />
    </>
  );
};

export default Home;
