import { NestNav } from "@/components/NestNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NestNav />
      {children}
    </>
  );
}
