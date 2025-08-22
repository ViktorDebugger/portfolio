import BriefCase from "../icons/brief-case";
import blue from "../../assets/hero-images/blue-image.jpg";
import { Link } from "react-router-dom";

import javascript from "../../assets/stack-images/javascript.png";
import typescript from "../../assets/stack-images/typescript.png";
import tailwindcss from "../../assets/stack-images/tailwindcss.png";
import node from "../../assets/stack-images/node-js.png";
import react from "../../assets/stack-images/react.png";
import nest from "../../assets/stack-images/nest-js.png";
import prisma from "../../assets/stack-images/prisma-orm.png";
import firebase from "../../assets/stack-images/firebase.png";
import ArrowLongRight from "../icons/arrow-long-right";
import User from "../icons/user";

import GitHub from "../icons/socials/github";
import LinkedIn from "../icons/socials/linkedin";
import Telegram from "../icons/socials/telegram";

const stack = [
  {
    id: 1,
    name: "Tailwindcss",
    image: tailwindcss,
  },
  {
    id: 2,
    name: "JavaScript",
    image: javascript,
  },
  {
    id: 3,
    name: "React",
    image: react,
  },
  {
    id: 4,
    name: "TypeScript",
    image: typescript,
  },
  {
    id: 5,
    name: "Node.js",
    image: node,
  },
  {
    id: 6,
    name: "Nest.js",
    image: nest,
  },
  {
    id: 7,
    name: "Prisma ORM",
    image: prisma,
  },
  {
    id: 8,
    name: "Firebase",
    image: firebase,
  },
];

const icons = [
  {
    id: 1,
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/viktor-luka-25b610364/",
  },
  {
    id: 2,
    icon: GitHub,
    link: "https://github.com/ViktorDebugger",
  },
  {
    id: 3,
    icon: Telegram,
    link: "https://t.me//Luka_Victor",
  }
];

const HeroSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] py-16">
      <div className="flex h-full flex-col justify-center">
        <h1 className="font-montserrat mb-6 max-w-4xl text-6xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="flex justify-between">
          <div className="max-w-[50%]">
            <p className="font-roboto mb-10 text-2xl text-gray-700">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo.
            </p>
            <div className="my-10 flex items-center gap-8">
              <Link
                to="/projects"
                className="transition-color flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 duration-300 ease-in-out hover:bg-indigo-600/80"
              >
                <BriefCase className="size-6 text-white" />
                <p className="font-roboto text-lg font-semibold text-white">
                  Projects
                </p>
              </Link>

              <Link to="/about" className="group flex items-center gap-2">
                <User className="size-6 transition-colors duration-300 ease-in-out group-hover:text-black/70" />
                <p className="font-roboto text-lg font-semibold text-black! transition-colors duration-300 ease-in-out group-hover:text-black/70!">
                  About Me
                </p>
              </Link>
            </div>

            <ul className="flex gap-8 mb-10">
              {icons.map(({ id, link, icon: Icon }) => (
                <li key={id} className="group">
                  <Link to={link}>
                    <Icon className="size-7 text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-950" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <p className="font-roboto text-gray-600">
                My technology stack and tools I use
              </p>
              <div className="flex items-center gap-8">
                <ul className="inline-flex gap-2 rounded-lg bg-gray-100 p-2">
                  {stack.map(({ id, name, image }) => (
                    <li
                      key={id}
                      className="rounded-lg bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-gray-300"
                    >
                      <figure>
                        <img
                          className="h-12 w-12 rounded-lg"
                          src={image}
                          alt={name}
                        />
                      </figure>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/stack"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-2 transition-colors duration-300 ease-in-out hover:bg-gray-300"
                >
                  <ArrowLongRight className="size-6" />
                </Link>
              </div>
            </div>
          </div>

          <figure className="flex w-[50%] items-center justify-center">
            <img
              className="h-[420px] w-[80%] rounded-2xl object-cover"
              src={blue}
              alt="Jero picture"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
