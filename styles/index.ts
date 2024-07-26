import { type CssVariable } from "next/dist/compiled/@next/font";

// Satisfies error where it wanted an explicit literal used for font in the layout-file

export const fontVariable = "--font-montserrat" as const satisfies CssVariable;
