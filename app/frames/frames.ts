import { createFrames } from "frames.js/next";

export const frames = createFrames({
  baseUrl: process.env.BASE_URL,
  basePath: "/frames",
});
