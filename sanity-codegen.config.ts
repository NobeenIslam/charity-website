import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schemas/index.js",
  outputPath: "./utilities/schemaTypes.ts",
};

export default config;
