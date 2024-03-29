// import { Card } from "@/components/Card";
import { Counter } from "@/components/Counter";
import { Card } from "../components/Card";

// export default function Page() {
//   const val = 10;
//   return (
//     <>
//       <h1>Home Page {val}</h1>
//       <Card />
//       <Card></Card>
//     </>
//   );
// }
const Page = () => {
  const val = 10;
  return (
    <>
      <h1>Home Page {val}</h1>
      <Card />
      <Card></Card>
      <Counter />
    </>
  );
};

export default Page;
