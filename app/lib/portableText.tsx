import { PortableText as PortableTextComponent } from "@portabletext/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  value?: any;
  // any props that come into the component
}

const components = {
  marks: {
    link: ({ children, value }: Props) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export const PortableText = ({ value }: Props) => {
  return <PortableTextComponent value={value} components={components} />;
};
