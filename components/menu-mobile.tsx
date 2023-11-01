import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";
import { SubMenuAccordion } from "./submenu-accordion";

export function MenuMobile() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-16 h-full justify-center">
            <a className="text-4xl" href="">
              Home
            </a>
            <a className="text-4xl" href="">
              Portfolio
            </a>
            <a className="text-4xl" href="">
              Sobre Mim
            </a>
            <a className="text-4xl" href="">
              Contato
            </a>
            <SubMenuAccordion />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
