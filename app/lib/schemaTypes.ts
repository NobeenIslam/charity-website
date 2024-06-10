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
  blocks: Array<SanityKeyed<Project> | SanityKeyed<HomepageHero>>;
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
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Background Image — `image`
   *
   *
   */
  backgroundImage?: {
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

export type Documents = Page | NavBar;
