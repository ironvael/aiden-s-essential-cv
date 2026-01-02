import { useEffect } from "react";
import { resumeConfig } from "@/data/resumeConfig";

const SEOHead = () => {
  const { meta, header } = resumeConfig;

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setMeta("og:title", meta.title, true);
    setMeta("og:description", meta.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", meta.canonicalUrl, true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", meta.canonicalUrl);
  }, [meta, header]);

  return null;
};

export default SEOHead;
