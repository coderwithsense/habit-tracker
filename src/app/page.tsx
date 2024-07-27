import Habits from "@/components/Habits";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Habits />
    </main>
  );
}
