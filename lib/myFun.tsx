export const cleanDomain = (domain: string | null | undefined): string | null | undefined => {
  if (!domain) {
    return domain;
  }
  return domain
    .replace(/\s+/g, "")
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "");
};

export const getDomain = (host: string | null | undefined): string => {
  // const defaultDomain = "abcUsama1122.usama";
  const defaultDomain = "cleaning-service.amplifytest1.top";


  if (
    host &&
    !["localhost", "vercel", "amplifyapp.com", "amplifytest"].some((sub) =>
      host.includes(sub)
    )
  ) {
    return cleanDomain(host) || defaultDomain;
  }
  return defaultDomain;
};

const checkDomain = (domain: string | null | undefined): boolean => {
  const isValidDomain =
    !!domain &&
    [
      "localhost",
      "vercel",
      "amplifyapp.com",
      "amplifytest",
      "abcUsama1122.usama",
    ].some((sub) => domain.includes(sub));
  return isValidDomain;
};

interface CallBackendApiParams {
  domain: string | null | undefined;
  query?: { project_id?: string } | null;
  type?: string;
}

export const callBackendApi = async ({
  domain,
  query = null,
  type = "",
}: CallBackendApiParams): Promise<any> => {
  const isTestLink = checkDomain(domain);
  const project_id = query?.project_id;
  let baseURL: string | null = null;

  if (isTestLink) {
    if (project_id) {
      baseURL = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/api/public/project_data/${project_id}/data`;
    } else {
      baseURL = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/api/public/industry_template_data/${process.env.NEXT_PUBLIC_INDUSTRY_ID}/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data`;
    }
  } else {
    baseURL = `${process.env.NEXT_PUBLIC_SITE_MANAGER}/api/public/project_data_by_domain/${domain}/data`;
  }

  try {
    const response = await fetch(`${baseURL}/${type}`);
    if (!response.ok) {
      const error = new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      ) as any;
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
    return await response.json();
  } catch (err: any) {
    console.error("🚀 ~ callBackendApi ~ error:", err);
    return {
      error: {
        status: err.status,
        statusText: err.statusText,
        responseBody: err.responseBody,
      },
    };
  }
};

export const getImagePath = (project_id: any, domain: string) => {
  let image_path: string;

  if (project_id) {
    image_path = `project_images/${project_id}`;
  } else {
    image_path = `industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}`;
  }

  return image_path;
};
