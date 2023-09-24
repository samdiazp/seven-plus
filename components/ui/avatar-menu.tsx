"use client";
import { Session } from "@supabase/auth-helpers-nextjs";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AvatarMenu({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/signin");
  };

  const avatarUrl = session?.user?.user_metadata?.avatar_url || "";

  return (
    <div className="flex items-center md:order-2">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={handleSignOut}
      >
        <span className="sr-only">Open user menu</span>
        <Image
          className="w-8 h-8 rounded-full"
          src={avatarUrl}
          alt="user photo"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
}
