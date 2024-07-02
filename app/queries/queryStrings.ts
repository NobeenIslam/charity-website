import { groq } from "next-sanity";

//Defined to exclude Home page which will have no slug
export const allSlugsQuery = groq`*[_type == "page"  && defined(slug.current)]{slug}`;

export const homepageQuery = groq`*[_type == "page" && title == "Home"]{
    _id,
    title,
    blocks
  }[0]`;

export const pageBySlugQuery = (slug: string) => {
  return groq`
      *[_type == "page" && slug.current == "${slug}" ]{
        title,
        "slug": slug.current,
        blocks[] {
          ...,
        }
      }[0]
    `;
};

export const navBarQuery = groq`*[_type == "navBar"]{
    title,
    navItems[]{
      title,
      link
    },
    logo
  }[0]
  `;

export const footerQuery = groq`*[_type == "footer"]{
    mainText,
    footerLinks[]{
      ...
    },
    socialLinks[]{
      ...
    }
  }[0]
  `;

export const projectCardsQuery = groq`*[_type == "project"]{
    _id,
    title,
    card,
    image
  }`;

export const projectBySlugQuery = (slug: string) => {
  return groq`
      *[_type == "project" && slug.current == "${slug}" ]{
        _id,
        title,
        "slug": slug.current,
        card,
        page,
      }[0]
    `;
};

export const projectSlugsQuery = groq`*[_type == "project"]{
    slug,
  }`;
