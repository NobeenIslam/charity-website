import { Hero as SanityHeroType } from "@/utilities/schemaTypes";

export const HeroMock: SanityHeroType = {
  _type: "hero",
  contentAlignment: "left",
  backgroundImage: {
    _type: "image",
    asset: {
      _ref: "image-00cfcccf0c1cd1ff27690b9b1ee801a25eb8ee6c-2296x1056-png",
      _type: "reference",
    },
  },
  ctaButton: {
    _type: "ctaButton",
    buttonAccessibleLabel: "Donation Button",
    buttonLink: "/",
    buttonText: "Donate Now",
  },
  description: [
    {
      _key: "c2d422b7b9f4",
      _type: "block",
      children: [
        {
          _key: "fef76be592950",
          _type: "span",
          marks: ["strong"],
          text: "Lorem Ipsum",
        },
        {
          _key: "fef76be592951",
          _type: "span",
          marks: [],
          text: " is simply dummy text of the printing and typesetting industry. .",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  heading: "Charity Names",
};
