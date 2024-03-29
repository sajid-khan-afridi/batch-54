export default async function Page() {
  const data = await fetch("https://api.quotable.io/random?tags=technology", {
    next: { revalidate: 15 },
  });
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <h1>Incremental Static Regeneration</h1>
      <p>{res.content}</p>
    </div>
  );
}
