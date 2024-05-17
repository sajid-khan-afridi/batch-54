import { defineField, defineType } from "sanity";

export const products = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "category",
      type: "reference",
      title: "Enter the category",
      to: {
        type: "category",
      },
    }),
  ],
};
