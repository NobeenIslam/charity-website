import { InfoPanel as SanityInfoPanelType } from "../../../utilities/schemaTypes";

export const infoPanelMock: SanityInfoPanelType = {
  _type: "infoPanel",
  backgroundColour: "bg-green-200",
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
  heading: "Info Panel",
  image: {
    _type: "image",
    asset: {
      _ref: "image-af5faae9ac6f0d23c1cec3d7e7fc850f9cf2881f-1203x800-jpg",
      _type: "reference",
    },
  },
};
