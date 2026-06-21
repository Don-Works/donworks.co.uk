import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Don Works",
    short_name: "Don Works",
    description:
      "Open-source tools from Revitt — MCPlexer, Brw, and more to come. Free and open under AGPL-3.0.",
    start_url: "/",
    display: "standalone",
    background_color: "#050604",
    theme_color: "#050604",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
