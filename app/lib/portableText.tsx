import { PortableText as PortableTextComponent } from "@portabletext/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  value?: any;
}

const components = {
  block: {
    h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
  },
  marks: {
    strong:({ children }: any) => <strong className="font-bold">{children}</strong>,
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
