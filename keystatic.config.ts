import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "bashfulduckling/primitivo-portfolio",
  },
  collections: {
    education: collection({
      label: "Education",
      path: "src/data/education/*",
      format: { data: "json" },
      slugField: "degree",
      schema: {
        degree: fields.slug({ name: { label: "Degree" } }),
        year: fields.integer({ label: "Year" }),
        field: fields.text({ label: "Field of Study" }),
        institution: fields.text({ label: "Institution" }),
        thesis: fields.text({ label: "Thesis Title" }),
      },
    }),
  },
});