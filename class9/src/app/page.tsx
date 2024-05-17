import React from "react";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

async function getData() {
  const res = await client.fetch(
    `*[_type == "product"]{title,price,category->{name},image,"urlImage":image.asset->url,_id}`
  );
  // console.log(res);
  return res;
}

interface IProduct {
  title: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
  _id: string;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="max-w-screen-2xl p-2 grid grid-cols-3 w-full">
      {data.map((product: IProduct) => (
        <div key={product._id} className="">
          {/* <Image
            src={product.urlImage}
            alt={product.title}
            width={100}
            height={100}
          /> */}
          <Image
            src={urlForImage(product.image).url()}
            alt={product.title}
            width={100}
            height={100}
          />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
