import { HomepageHero as SanityHomepageHeroType } from "../../../lib/schemaTypes";

export const homepageHeroMock: SanityHomepageHeroType = {
  _type: "homepageHero",
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
          text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  heading: "Charity Names",
};
