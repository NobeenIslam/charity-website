import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schemas/index.js",
  outputPath: "./app/lib/schemaTypes.ts",
};

export default config;
