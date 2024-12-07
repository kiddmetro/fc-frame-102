/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { BackgroundImage } from "./components/background-image";

const images = [
  "fcimage1.jpg",
  "fcimage2.jpg",
  "fcimage3.jpg",
  "fcimage4.jpg",
  "fcimage5.jpg",
  "fcimage6.jpg",
  "fcimage7.jpg",
];

const baseUrl = process.env.BASE_URL || "http://localhost:3000"; // Base URL for the app

const handleRequest = frames(async (ctx) => {
  // Determine current image index based on query param or default to the first image
  const currentIndex = parseInt(ctx.searchParams.index || "0", 10);
  const totalImages = images.length;

  // Handle index wrapping
  const nextIndex = (currentIndex + 1) % totalImages;
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;

  return {
    image: (
        <BackgroundImage
          src={`${baseUrl}/${images[currentIndex]}`} // Dynamically pick image by index
        />
    ),
    buttons: [
      <Button action="post" target={{ query: { index: prevIndex.toString() } }}>
        Previous
      </Button>,
      <Button action="post" target={{ query: { index: nextIndex.toString() } }}>
        Next
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
