import { Footer as SanityFooterType } from "../../utilities/schemaTypes";

const footerMock: SanityFooterType = {
    _createdAt: "2024-06-20T17:19:42Z",
    _id: "64603da5-7a58-4d4e-aed6-135ebd6d8a7f",
    _rev: "3MHW2EU69RQx7f6lZsHoCM",
    _type: "footer",
    _updatedAt: "2024-06-20T17:40:29Z",
    footerLinks: [
      {
        _key: "58f8f135a6f9",
        _type: "navItem",
        link: "/",
        title: "Privacy Policy",
      },
      {
        _key: "ffd9973361bb",
        _type: "navItem",
        link: "/",
        title: "Terms and Conditions",
      },
    ],
    mainText:
      "Muslim Help is a registered charity in England and Wales (no 1171986)",
    socialLinks: [
      {
        _key: "2a7b88b543ac",
        _type: "iconLink",
        icon: {
          _type: "image",
          asset: {
            _ref: "image-048ff7b5f4ff5cdc5bbf7306970e8e7a55363d43-800x800-svg",
            _type: "reference",
          },
        },
        link: "/",
      },
      {
        _key: "4f4a2bc2d784",
        _type: "iconLink",
        icon: {
          _type: "image",
          asset: {
            _ref: "image-a3113707dacf795eb06e095635b6fc206bc42983-800x800-svg",
            _type: "reference",
          },
        },
        link: "/",
      },
      {
        _key: "ff518a371ae9",
        _type: "iconLink",
        icon: {
          _type: "image",
          asset: {
            _ref: "image-e54df00d0cae393afa6c479406169d44f1f915a9-800x800-svg",
            _type: "reference",
          },
        },
        link: "/",
      },
    ],
  };

export { footerMock };


