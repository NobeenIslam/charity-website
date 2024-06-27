import { ProjectGridProps } from "./ProjectGrid";
import { CardProps } from "./../../ui/Card";
import { Project as SanityProjectType } from "../../../utilities/schemaTypes";
import { ProjectCardType } from "../../../queries";

const projectCardMock: ProjectCardType = {
  _id: "123556",
  title: "Test",
  card: {
    _type: "card",
    ctaButton: {
      _type: "ctaButton",
      buttonText: "Donate",
      buttonAccessibleLabel: "Donate",
      buttonLink: "/",
    },
    image: {
      _type: "image",
      asset: {
        _ref: "image-00cfcccf0c1cd1ff27690b9b1ee801a25eb8ee6c-2296x1056-png",
        _type: "reference",
      },
    },
    link: "/",
    summary: "Summary",
  },
};

const projectCardMockWithNoImage: ProjectCardType = {
  _id: "123556",
  title: "Test",
  card: {
    _type: "card",
    ctaButton: {
      _type: "ctaButton",
      buttonText: "Donate",
      buttonAccessibleLabel: "Donate",
      buttonLink: "/",
    },
    link: "/",
    summary: "Summary",
  },
};

export const projectGridMock: ProjectGridProps = {
  _type: "projectGrid",
  body: [
    {
      _key: "b0164d5272d6",
      _type: "block",
      children: [
        {
          _key: "05c440df22c8",
          _type: "span",
          marks: [],
          text: "Some ",
        },
        {
          _key: "94d385f6a4a4",
          _type: "span",
          marks: ["strong"],
          text: "really",
        },
        {
          _key: "b4f03d566448",
          _type: "span",
          marks: [],
          text: " interesting text.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  heading: "Project Grid",
  projectCardsData: [
    projectCardMockWithNoImage,
    projectCardMock,
    projectCardMock,
    projectCardMock,
    projectCardMock,
    projectCardMock,
  ],
};
