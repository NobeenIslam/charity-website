import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Blocks — `array`
   *
   *
   */
  blocks: Array<
    SanityKeyed<Project> | SanityKeyed<HomepageHero> | SanityKeyed<InfoPanel>
  >;
}

/**
 * Navigation Bar
 *
 *
 */
export interface NavBar extends SanityDocument {
  _type: "navBar";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Navigation Items — `array`
   *
   *
   */
  navItems?: Array<SanityKeyed<NavItem>>;

  /**
   * Logo — `image`
   *
   *
   */
  logo: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export type Project = {
  _type: "project";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Main Image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Body — `array`
   *
   *
   */
  body?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;

  /**
   * Category — `string`
   *
   *
   */
  category?: "education" | "healthcare" | "environment";
};

export type NavItem = {
  _type: "navItem";
  /**
   * Nav Item Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Nav Item Link — `string`
   *
   *
   */
  link?: string;
};

export type HomepageHero = {
  _type: "homepageHero";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Background Image — `image`
   *
   *
   */
  backgroundImage: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * CTA — `object`
   *
   *
   */
  ctaButton?: {
    _type: "ctaButton";
    /**
     * Button Text — `string`
     *
     *
     */
    buttonText?: string;

    /**
     * Button - Accessible Label — `string`
     *
     * This will help screen reader users understand where the link will redirect them to.
     */
    buttonAccessibleLabel?: string;

    /**
     * Button Link — `string`
     *
     *
     */
    buttonLink?: string;
  };
};

export type InfoPanel = {
  _type: "infoPanel";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Body — `array`
   *
   *
   */
  body?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Background Colour — `string`
   *
   *
   */
  backgroundColour?:
    | "bg-red-200"
    | "bg-green-200"
    | "bg-blue-200"
    | "bg-yellow-200"
    | "bg-indigo-200"
    | "bg-purple-200"
    | "bg-pink-200"
    | "bg-gray-200";
};

export type Documents = Page | NavBar;
