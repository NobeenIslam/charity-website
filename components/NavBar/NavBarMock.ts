import { NavBar as SanityNavBarType } from '@/lib/schemaTypes';

const navBarMock: SanityNavBarType = {
  _createdAt: "2024-05-30T16:18:12Z",
  _id: "24a19ee7-1fdf-40b9-aaa0-2d7acc5a8227",
  _rev: "3Or4KZ4fs6tqQwsTuSwpfH",
  _type: "navBar",
  _updatedAt: "2024-06-04T09:43:49Z",
  logo: {
    _type: "image",
    asset: {
      _ref: "image-78df3f9388fbca65a916f1210cc296cec2b010e4-1024x1024-png",
      _type: "reference",
    },
  },
  navItems: [
    {
      _key: "33a77ca1847f",
      _type: "navItem",
      link: "/",
      title: "Home",
    },
    {
      _key: "c1d565c5df6f",
      _type: "navItem",
      link: "/about",
      title: "About",
    },
    {
      _key: "46bd4ce2bf38",
      _type: "navItem",
      link: "/projects",
      title: "Projects",
    },
  ],
  title: "Navigation Bar",
};

export { navBarMock };
