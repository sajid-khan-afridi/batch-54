import React from "react";

const Delete = async () => {
  //post fetch request to the orders
  const res = await fetch(
    "https://simple-books-api.glitch.me/orders/v9PI9Nz6gV6oagBXSbF-N",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //authorization: 'Bearer ' + token
        authorization:
          "Bearer " +
          "c45896abb80f8e57323c40c9b94a1dea262dad4a67e311728a76737395fc40a6",
      },
    //   body: JSON.stringify({
    //     customerName: "KASHIF",
    //   }),
    }
  );

  // const ret = await res.json();
  // console.log(ret);
  return <div>Delete</div>;
};

export default Delete;
