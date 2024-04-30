import { type CssVariable } from "next/dist/compiled/@next/font";

// Satisfies error where it wanted an explicit literal used for font in the layout-file

export const roboto = "--font-roboto" as const satisfies CssVariable;
