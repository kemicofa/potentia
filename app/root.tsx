import type { LinksFunction, MetaFunction } from "@remix-run/deno";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import * as React from "react";
import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const title = "Potentia"
const description = "Raiding guild on EU Earthshaker Alliance recruiting players for 10m and 25m Ulduar.";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Potentia",
  viewport: "width=device-width,initial-scale=1",
  description,
  keywords: "potentia, world of warcraft, wow, wrath of the lich king clasic, raiding guild, pve, pvp, earthshaker alliance, ulduar, ulduar 25m, ulduar 10m, recruiting, eu",
  "og:title": title,
  "og:type": 'website',
  "og:url": "https://potentia.deno.dev",
  "og:image": "https://potentia.deno.dev/logo.jpg",
  "og:description": description,
  "og:locale": "en_GB",
  "og:site_name": title
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
