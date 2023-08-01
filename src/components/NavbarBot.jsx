import { Button, Navbar } from 'flowbite-react';

export const NavbarBot =()=>  {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="../src/assets/logochatbot.webp"
        />
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


