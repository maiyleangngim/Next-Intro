import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com"
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      }
    ]
  }
};

export default withFlowbiteReact(nextConfig);