import tailwindcss from "/hero-stack/tailwindcss.png";
import react from "/hero-stack/react.png";
import bun from "/hero-stack/bun.png";
import prizma from "/hero-stack/prisma-orm.png";
import hono from "/hero-stack/hono.png";
import webhookLight from "/hero-stack/webhook-light.png";
import nextLight from "/hero-stack/next-js-light.png";
import webhookDark from "/hero-stack/webhook-dark.png";
import nextDark from "/hero-stack/next-js-dark.png";
import upstash from "/hero-stack/upstash.png";

export const heroStack = [
  {
    id: 1,
    name: "Tailwind CSS",
    imageLight: tailwindcss,
  },
  {
    id: 2,
    name: "React",
    imageLight: react,
  },
  {
    id: 3,
    name: "Bun",
    imageLight: bun,
  },
  {
    id: 4,
    name: "Next.js",
    imageLight: nextLight,
    imageDark: nextDark,
  },
  {
    id: 5,
    name: "Prizma ORM",
    imageLight: prizma,
  },
  {
    id: 6,
    name: "Hono",
    imageLight: hono,
  },
  {
    id: 7,
    name: "Webhooks",
    imageLight: webhookLight,
    imageDark: webhookDark,
  },
  {
    id: 8,
    name: "Upstash",
    imageLight: upstash,
  },
];
