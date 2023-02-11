import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "Join the AI revolution in the legal world with LawBud. Our virtual law assistant provides accurate legal advice and facilitates access to justice for all. Try it now.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "Join the AI revolution in the legal world with LawBud. Our virtual law assistant provides accurate legal advice and facilitates access to justice for all. Try it now.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "blaablaabla",
      desc: "blaablaabla.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "blaablaabla",
      desc: "blaablaabla.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "blaablaabla",
      desc: "blaablaabla.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
