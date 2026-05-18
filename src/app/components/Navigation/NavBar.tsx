

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export function NavBarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <Image src="/image.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={100} height={100} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
