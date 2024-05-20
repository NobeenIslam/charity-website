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
} from 'sanity-codegen'

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
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: 'page'

  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: {_type: 'slug'; current: string}

  /**
   * Blocks — `array`
   *
   *
   */
  blocks: Array<SanityKeyed<Project>>
}

export type Project = {
  _type: 'project'
  /**
   * Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: {_type: 'slug'; current: string}

  /**
   * Description — `text`
   *
   *
   */
  description?: string

  /**
   * Main Image — `image`
   *
   *
   */
  mainImage?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Body — `array`
   *
   *
   */
  body?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
      }>
  >

  /**
   * Category — `string`
   *
   *
   */
  category?: 'education' | 'healthcare' | 'environment'
}

export type Documents = Page
