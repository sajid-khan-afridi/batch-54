import React from 'react'

const Post =async () => {
    //post fetch request to the orders
    const res = await fetch('https://simple-books-api.glitch.me/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //authorization: 'Bearer ' + token
            authorization: 'Bearer ' + 'c45896abb80f8e57323c40c9b94a1dea262dad4a67e311728a76737395fc40a6'
        },
        body: JSON.stringify({
            "bookId": 1,
            "customerName": "Ali"
          })
    });

    const ret = await res.json();
    console.log(ret);
  return (
    <div>Post</div>
  )
}

export default Post