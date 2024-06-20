import { ProjectGridProps } from "./ProjectGrid";
import { CardProps } from "./../../ui/Card";
import { Project as SanityProjectType } from "../../../utilities/schemaTypes";

const projectCardMock: SanityProjectType = {
  _createdAt: "2024-04-24T12:05:34Z",
  _id: "27b0c0f3-b75e-4aec-a2c7-947c4e349ef3",
  _rev: "jnmmtSmwJOIdIOTlWpBmhE",
  _type: "project",
  ctaButton: {
    _type: "ctaButton",
    buttonText: "Donate",
    buttonAccessibleLabel: "Donate",
    buttonLink: "/",
  },
  cardImage: {
    _type: "image",
    asset: {
      _ref: "image-00cfcccf0c1cd1ff27690b9b1ee801a25eb8ee6c-2296x1056-png",
      _type: "reference",
    },
  },
  link: "/",
  summary: "Summary",
  title: "Test",
  _updatedAt: "2024-06-19T18:40:02.331Z",
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
    projectCardMock,
    projectCardMock,
    projectCardMock,
    projectCardMock,
    projectCardMock,
    projectCardMock,
    projectCardMock,
  ],
};
