import path from "path";
// import fs from "fs";

// Utility function to clean domain names
export const cleanDomain = (domain: string | null): string | null => {
  if (!domain) return domain;
  return domain
    .replace(/\s+/g, "")
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "");
};

// Get the domain name or return the default if the host matches certain criteria
export const getDomain = (host: string | null): string => {
  const defaultDomain = "abcUsama1122.usama";
  // const defaultDomain = "tp1.sitebuilderz.com";
  // const defaultDomain = "geyserrepairs.sitebuilderz.com";
  // const defaultDomain = "custom-wheels-car-rims.sitebuilderz.com";
  // const defaultDomain = "blog-next14temp-3.amplifytest1.top";
  // const defaultDomain = "custom-wheels-car-rims.com";

  if (
    host &&
    !["localhost", "vercel", "amplifyapp.com", "amplifytest"].some((sub) =>
      host.includes(sub)
    )
  ) {
    return cleanDomain(host) as string;
  }
  return defaultDomain;
};

// Check if the domain matches specific test or local domains
const checkDomain = (domain: string | null): boolean => {
  return (
    !!domain &&
    [
      "localhost",
      "vercel",
      "amplifyapp",
      "amplifytest",
      "abcUsama1122.usama",
    ].some((sub) => domain.includes(sub))
  );
};

// Extract subdomain from a full domain
const getSubdomain = (domain: string): string => {
  const parts = domain.replace(/(^\w+:|^)\/\//, "").split(".");
  return parts[0];
};

// Call backend API based on the domain and type of request
export const callBackendApi = async ({
  domain,
  type = "",
}: {
  domain: string;
  type?: string;
}): Promise<any> => {
  const isTemplateURL = checkDomain(domain);
  const isProjectStagingURL = domain?.endsWith("sitebuilderz.com");
  const slug = isProjectStagingURL ? getSubdomain(domain) : null;

  let baseURL: string;
  if (isTemplateURL) {
    baseURL = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/api/public/industry_template_data/${process.env.NEXT_PUBLIC_INDUSTRY_ID}/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data`;
  } else if (isProjectStagingURL) {
    baseURL = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/api/public/project_data_by_slug/${slug}/data`;
  } else {
    baseURL = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/api/public/project_data_by_domain/${domain}/data`;
  }

  const fileName = baseURL.replace(
    `${process.env.NEXT_PUBLIC_SITE_MANAGER}/`,
    ""
  );
  const filePath = `${domain}/${fileName
    .replaceAll(`/${domain}`, "")
    .replaceAll("/", "_")}/${type}.json`;

  if (typeof window === "undefined") {
    const { checkAPIJson } = require("./serverUtils");
    const data = await checkAPIJson({ filePath });
    if (data) return data;
  }

  try {
    const response = await fetch(`${baseURL}/${type}`);
    if (!response.ok) {
      const error: any = new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
      error.status = response.status;
      error.statusText = response.statusText;
      error.requestedURL = response.url;
      error.responseBody = await response.text();
      if (
        response.status === 400 &&
        response.statusText === "Bad Request" &&
        error.responseBody.includes("check your parameter")
      ) {
        return {
          error: {
            status: response.status,
            statusText: response.statusText,
            responseBody: error.responseBody,
          },
        };
      }
      throw error;
    }
    const responseData = await response.json();
    if (
      typeof window === "undefined" &&
      !isTemplateURL &&
      !isProjectStagingURL
    ) {
      const { saveJson } = require("./serverUtils");
      await saveJson({ filePath, data: responseData });
    }
    return responseData;
  } catch (err: any) {
    console.error("\uD83D\uDE80 ~ callBackendApi ~ error:", err);
    return {
      error: {
        status: err.status,
        statusText: err.statusText,
        responseBody: err.responseBody,
      },
    };
  }
};

// export const robotsTxt = async ({ domain }: { domain: string }): Promise<void> => {
//   const isTemplateURL = checkDomain(domain);
//   const isProjectStagingURL = domain.endsWith("sitebuilderz.com");

//   if (!isTemplateURL && !isProjectStagingURL) {
//     const robotxt = await callBackendApi({ domain, type: "robotxt" });

//     const filePath = path.join(
//       process.cwd(),
//       "public",
//       `robots/${domain}/robots.txt`
//     );

//     const directoryPath = path.dirname(filePath);
//     if (!fs.existsSync(directoryPath)) {
//       fs.mkdirSync(directoryPath, { recursive: true });
//     }

//     if (robotxt?.data?.[0]?.value) {
//       fs.writeFileSync(
//         filePath,
//         robotxt.data[0].value.replaceAll("thisdomain.com", domain),
//         "utf8"
//       );
//     } else {
//       console.error("Failed to fetch robots.txt content");
//     }
//   }
// };

export const getImagePath = (
  project_id: string,
  domain: string
): string => {
  const isTemplateURL = checkDomain(domain);
  const isProjectStagingURL = domain?.endsWith("sitebuilderz.com");

  let imagePath: string;
  if (isTemplateURL) {
    imagePath = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}`;
  } else if (isProjectStagingURL) {
    imagePath = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/project_images/${project_id}`;
  } else {
    imagePath = `https://www.${domain}/api/images/`;
  }
  console.log("\uD83D\uDE80 ~ getImagePath ~ imagePath:", imagePath);

  return imagePath;
};

const withBaseUrl = (baseUrl: string, relativeUrl: string): string =>
  `${!baseUrl.startsWith("https://") ? "https://" : ""}${!baseUrl.startsWith("www.") ? "www." : ""}${baseUrl}${relativeUrl
      ? relativeUrl.startsWith("/")
        ? relativeUrl
        : `/ ${ relativeUrl }`
      : ""}`;

export async function getSitemaps({
  domain,
}: {
  domain: string;
}): Promise<any[]> {
  try {
    const data = await callBackendApi({ domain });
    if (!data?.status) return [];

    const blog_list = data?.data?.find(({ key }: any) => key === "blog_list")?.value;
    const categories = [
      "",
      "about",
      "contact",
      "tags",
      "privacy policy",
      "terms and conditions",
      ...data?.data?.find(({ key }: any) => key === "categories")?.value,
    ];
    const currentDate = new Date().toISOString();
    const [datePart, timePart] = currentDate.split("T");
    const formattedDate = `${datePart}T${timePart.split(".")[0]}+00:00`;

    const urls = [
      ...categories.map((item: any) => ({
        loc: withBaseUrl(domain, `/${sanitizeUrl(item.title)}`),
        lastmod: formattedDate,
      })),
      ...blog_list.map((item: any) => ({
        loc: withBaseUrl(
          domain,
          `/${sanitizeUrl(item.article_category)}/${sanitizeUrl(item.title)}`
        ),
        lastmod: formattedDate,
      })),
    ];

    const sitemaps: any[] = [];
    while (urls.length) {
      sitemaps.push(urls.splice(0, 200));
    }
    return sitemaps;
  } catch (err) {
    console.error("\uD83D\uDC4A ~ getSitemaps ~ err:", err);
    return [];
  }
}

export const sanitizeUrl = (text: string): string => {
  return text
    ?.toLowerCase()
    ?.replaceAll(" - ", "-")
    ?.replaceAll(" | ", "-")
    ?.replaceAll(" ", "-")
    ?.replaceAll(":", "")
    ?.replaceAll("/", "-")
    ?.replaceAll("?", "");
};
