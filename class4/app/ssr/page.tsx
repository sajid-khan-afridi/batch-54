export default async function Page() {
  const data = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "force-cache",//default
  });
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <h1>Serverside Static Rendering</h1>
      <p>{res.content}</p>
    </div>
  );
}
