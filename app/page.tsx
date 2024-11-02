import Canvas from "@/components/Canvas";
import Header from "@/components/Header";
import Stack from "@/ui/components/stack";

export default async function HomePage() {
  return (
    <Stack className="bg-secondary w-full h-full" direction="column">
      <Header />
      <Canvas />
    </Stack>
  );
}
