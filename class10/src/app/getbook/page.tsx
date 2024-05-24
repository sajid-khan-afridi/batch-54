import Link from "next/link";
import React from "react";

async function getData() {}
// {
//   id: 2,
//   name: 'Just as I Am',
//   type: 'non-fiction',
//   available: false
// }

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Home = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const data: IBook[] = await res.json();
  console.log(data);
  return (
    <div className="flex flex-col">
      {data.map((book: IBook) => (
        <Link href={`/getbook/${book.id}`} key={book.id}>
          {book.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
