"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const Navbar = () => {
  const { data: session } = useSession();
  // const username: string = session?.user?.name?.split(" ")[0]
  const profileImage: string | any = session?.user?.image;
  console.log(profileImage);
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-gradient-to-r from-neutral-900 to-neutral-700 mb-6 ">
      <Link href="/">
        <h1 className="text-xl text-back">Course App</h1>
      </Link>
      {session?.user ? (
        <Dropdown>
          <DropdownTrigger>
            <Avatar src={profileImage} />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              onClick={() => signOut({ callbackUrl: "/" })}
              key="Logout"
            >
              Logout
            </DropdownItem>
            <DropdownItem key="Logout">
              <Link href="/account">Account</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <button
          className="bg-sky-500 px-4 py-2 rounded-md"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
