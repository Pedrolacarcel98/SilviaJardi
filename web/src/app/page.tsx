import Hero from "@/components/Hero";
import CategoryBento from "@/components/CategoryBento";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center w-full">
      <Hero />
      <CategoryBento />
    </main>
  );
}
