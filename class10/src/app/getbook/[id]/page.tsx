import React from "react";

// { params: { id: '3' }, searchParams: {} }
// export const Id = ({params}:{params:{id:string}}) => {
//     // console.log(props);
//     // console.log(params);
//     const {id} = params;
//     console.log(id);

// {
//     id: 3,
//     name: 'The Vanishing Half',
//     author: 'Brit Bennett',
//     type: 'fiction',
//     price: 16.2,
//     'current-stock': 987,
//     available: true
//   }

interface IBook {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
}

export const Id = async (props: any) => {
  console.log(props);
  const id = props.params.id;
  console.log(id);
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  const data: IBook = await res.json();
  console.log(data);
  return (
    <div>
      <p>Book Id:{data.id}</p>
      <p>Book Name:{data.name}</p>
      <p>Book Author:{data.author}</p>
      <p>Book Type:{data.type}</p>
      <p>Book Price:{data.price}</p>
      <p>Book Stock:{data["current-stock"]}</p>
      <p>Book Available:{data.available}</p>
    </div>
  );
};

export default Id;
