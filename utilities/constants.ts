import { SanityImageAsset, SanityImageCrop, SanityImageHotspot, SanityReference } from "sanity-codegen";


//Created this because it's needed in a lot of my mocks and I just end up copy and pasting this alot. Had to enforce the type because typescript wasn't happy with me using it in the mock without out. Type complaining
export type ImageType = {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  }


export const imageForMocks: ImageType = {
  _type: "image",
  asset: {
    _ref: "image-00cfcccf0c1cd1ff27690b9b1ee801a25eb8ee6c-2296x1056-png",
    _type: "reference",
  },
};
