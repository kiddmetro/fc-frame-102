import { createFrames } from "frames.js/next";

export const frames = createFrames({
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
  basePath: "/frames",
});
