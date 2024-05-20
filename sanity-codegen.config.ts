import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schemas",
  outputPath: "./app/lib/schemaTypes.ts",
};

export default config;
