"use client";

import Feed from "@components/Feed";
import Carousel from "@components/Carousel";
import { Separator } from "@components/ui/separator";
import TodoForm from "@components/TodoForm";
import Todo from "@components/Todo";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text gold_gradient text-center">
        Evan's
        <br classname="max-md:hidden" />
        <span className="gold_gradient text-center">Productivity</span>
      </h1>
      <p className="desc text-center">
        Using this as a tool for handcrafting my own productivity system and
        making custom components.
      </p>

      <Feed />
      <Separator />
      <Carousel />
      <Separator />
      <Todo />
    </section>
  );
};

export default Home;
