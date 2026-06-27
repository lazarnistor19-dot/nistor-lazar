import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {return {rules:{userAgent:"*",allow:"/"},sitemap:"https://nistor-lazar.md/sitemap.xml"};}
