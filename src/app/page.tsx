"use client";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import CleaningService from "../../components/home/CleaningService";
import FeauturedService from "../../components/home/FeauturedService";
import HomeBanner from "../../components/home/HomeBanner";
import Services from "../../components/home/Services";
import WhyChoose from "../../components/home/WhyChoose";
import { GetServerSideProps } from "next";
import { callBackendApi, getDomain, getImagePath } from "../../lib/myFun";
import Head from "next/head";
import GoogleTagManager from "../../lib/GoogleTagManager";
import JsonLd from "../../components/json/JsonLd";
import About from "../../components/home/About";

// Define types for the props
interface HomeProps {
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

const Home: React.FC<HomeProps> = ({
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
        {/* <meta name="robots" content="noindex" /> */}
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
      <HomeBanner
        image={""}
        title={"Cleaning Service"}
        paragraph={
          "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilimpedit quo minus id quod maxime placeat facere, viva la vida penci."
        }
        // imageTitle={""}
      />
      <Services />
      <About />
      <CleaningService image={""} />
      <FeauturedService image={""} />
      <WhyChoose image={""} />
      <Footer image={""}
      //  contact_details={""} 
       />

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

// Define types for `getServerSideProps` return value
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

export default Home;
