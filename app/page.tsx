import { NavigationMenuDemo } from "@/components/menu";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function MainPage() {
  return (
    <>
      <header>
        <div className="flex justify-between px-4 py-4 2xl:container m-auto my-0">
          <NavigationMenuDemo />
          <ModeToggle />
        </div>
      </header>
      <main>
        <div>
          <Button>Button</Button>
        </div>
      </main>
    </>
  );
}
