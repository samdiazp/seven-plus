import Image from "next/image";
import AvatarMenu from "./ui/avatar-menu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <AvatarMenu session={session} />
      </div>
    </nav>
  );
}
