/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span >
        {ctx.pressedButton
          ? ` ${ctx.searchParams.value} World `
          : `First Frame to Print Hello or Henlo`}
      </span>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "Hello " } }}>
        Hello
      </Button>,
      <Button action="post" target={{ query: { value: "Henlo" } }}>
        Henlo
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
