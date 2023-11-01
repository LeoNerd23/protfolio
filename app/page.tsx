import { AvatarDemo } from "@/components/avatar";
import { NavigationMenuDesktop } from "@/components/menu-desktop";
import { MenuMobile } from "@/components/menu-mobile";

export default function MainPage() {
  return (
    <>
      <header className="max-w-screen-lg m-auto">
        <div className="flex justify-between px-4 py-4 2xl:container m-auto my-0">
          <AvatarDemo />
          <MenuMobile />
          <NavigationMenuDesktop />
        </div>
      </header>
    </>
  );
}
