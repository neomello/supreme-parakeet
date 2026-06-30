import { defineConfig } from "astro/config";

// Static output. Sem runtime de servidor: o artefato e
// um documento soberano, portavel, sem dependencia de host.
export default defineConfig({
  output: "static",
  site: "https://proposta.neoprotocol.space",
  build: {
    inlineStylesheets: "auto",
  },
});
