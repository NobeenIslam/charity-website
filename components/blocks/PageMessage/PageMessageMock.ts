import { PageMessageType } from "@/queries/queryTypes";

const pageMessageMock: PageMessageType = {
  title: "Page Not Found",
  titleColour: "black",
  description: "Let's get you to a better place.",
  descriptionColour: "gray-200",
  ctaButton: {
    _type: "ctaButton",
    buttonText: "Go Home",
    buttonAccessibleLabel: "Return to homepage",
    buttonLink: "/",
  },
};

export { pageMessageMock };
