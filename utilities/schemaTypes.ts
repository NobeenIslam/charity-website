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
    | SanityKeyed<ProjectGrid>
    | SanityKeyed<HomepageHero>
    | SanityKeyed<InfoPanel>
    | SanityKeyed<EngagementBanner>
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

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Card — `object`
   *
   *
   */
  card?: {
    _type: "card";
    /**
     *  Summary — `text`
     *
     *
     */
    summary?: string;

    /**
     * Link — `url`
     *
     *
     */
    link?: string;

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

  /**
   * Page — `object`
   *
   *
   */
  page: {
    _type: "page";
    /**
     * Primary Text Section — `array`
     *
     *
     */
    primaryTextSection?: Array<SanityKeyed<SanityBlock>>;

    /**
     * Secondary Text Section — `array`
     *
     *
     */
    secondaryTextSection?: Array<SanityKeyed<SanityBlock>>;

    /**
     * Images For Page — `array`
     *
     *
     */
    postImages?: Array<
      SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
    >;

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
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Main Text — `string`
   *
   *
   */
  mainText?: string;

  /**
   * Footer Links — `array`
   *
   *
   */
  footerLinks?: Array<SanityKeyed<NavItem>>;

  /**
   * Social Links — `array`
   *
   *
   */
  socialLinks?: Array<SanityKeyed<IconLink>>;
}

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
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Content Alignment — `string`
   *
   *
   */
  contentAlignment?: "left" | "center";

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

export type EngagementBanner = {
  _type: "engagementBanner";
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
};

export type ProjectGrid = {
  _type: "projectGrid";
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
   * Show All Projects — `boolean`
   *
   *
   */
  showAllProjects?: boolean;
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

export type IconLink = {
  _type: "iconLink";
  /**
   * Icon — `image`
   *
   *
   */
  icon: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type Documents = Page | NavBar | Project | Footer;
