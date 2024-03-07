import Image from "next/image";
import { CardStudent } from "app/components/component/card-student";
import { TestCards } from "app/components/component/test-cards";
import { Precios } from "app/components/component/precios";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="text-3xl font-bold">Hello 🕵️‍♂️</h1>
      <CardStudent />
      <TestCards />
      <Precios />
    </main>
  );
}
