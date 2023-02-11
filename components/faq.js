import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Qu'est-ce que LawBud?",
    answer: "LawBud est un assistant virtuel en droit qui aide les avocats, les juges et les citoyens à naviguer dans les complexités de la loi. Il offre des conseils juridiques précis et facilite l'accès à la justice pour tous.",
  },
  {
    question: "Comment fonctionne LawBud?",
    answer: "LawBud utilise une combinaison de traitement du langage naturel, de reconnaissance de la voix et de l'apprentissage en profondeur pour comprendre et interagir avec les utilisateurs. Il est capable de répondre aux questions sur des sujets complexes de droit et de guider les utilisateurs à travers les démarches légales.",
  },
  {
    question: "Est-ce que LawBud est gratuit?",
    answer:
      "Oui, LawBud est entièrement gratuit pour les utilisateurs. Nous croyons en l'accès équitable à la justice pour tous et ne voulons pas que des coûts élevés soient un frein pour les personnes qui cherchent de l'aide juridique.",
  },
  {
    question: "LawBud est-il fiable?",
    answer:
      "Oui, LawBud est fiable. Nous travaillons sans relâche pour développer un système d'IA avancé qui fournit des conseils juridiques précis et fiables. Cependant, il est important de noter que LawBud ne doit pas être utilisé comme un remplacement pour un avocat qualifié et que les utilisateurs devraient toujours consulter un avocat pour des conseils juridiques détaillés.",
  },
];
