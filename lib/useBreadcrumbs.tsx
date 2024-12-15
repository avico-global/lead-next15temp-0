import { useRouter } from "next/router";

interface Breadcrumb {
  label: string;
  url: string;
}

const useBreadcrumbs = (): Breadcrumb[] => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((p) => p !== "");

  const breadcrumbs: Breadcrumb[] = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label = segment.replace(/-/g, " ").replace(/_/g, " ");

    return { label: label.charAt(0).toUpperCase() + label.slice(1), url };
  });

  return [{ label: "Home", url: "/" }, ...breadcrumbs];
};

export default useBreadcrumbs;
