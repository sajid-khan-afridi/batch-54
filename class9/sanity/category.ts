import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "category",
  fields: [
    defineField({
      name: "name",
      title: "Enter Category",
      type: "string",
    }),
  ],
});
