interface Params {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  const names: string[] = ["zia", "zeeshan", "hira"];

  // return names.map((name) => ({
  //   name: name,
  // }));
  return [{ name: "zia" }, { name: "zeeshan" }, { name: "hira" }];
}

export default function Page({ params }: Params) {
  //   console.log(props);
  //   console.log(props.params.name);
  console.log(params.name);
  console.log(params);
  return (
    <div>
      <h1>{params.name} Page</h1>
    </div>
  );
}
