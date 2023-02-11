import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
            LawBud est un assistant virtuel en droit vraiment <Mark>impressionnant.</Mark>
              Il a répondu à toutes mes questions sur un sujet complexe de manière claire et concise. Je suis vraiment impressionné par la précision de ses réponses et la simplicité de son interface.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
            En tant qu' <Mark>avocat</Mark>
               débutant, j'ai trouvé LawBud très utile pour comprendre les concepts complexes du droit. L'assistant virtuel est rapide, fiable et offre des réponses précises. Je l'utilise régulièrement pour aider mes clients et je suis très satisfait de ses performances.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Avocat"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
            J'ai finalement trouvé la <Mark>solution</Mark> que je cherchais pour naviguer dans les complexités de la loi grâce à LawBud. Cet assistant virtuel en droit est facile à utiliser et offre des conseils juridiques précis en temps réel. Je le recommande fortement à tous ceux qui cherchent un accès équitable à la justice.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
