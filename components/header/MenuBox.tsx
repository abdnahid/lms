"use client";

import { ModeToggle } from "./ModeToggle";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import IconText from "../common/IconText";

const MenuBox = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname.startsWith("/teacher");
  const isPlayerPage = pathname.includes("/chapter");
  return (
    <div className="flex gap-2 items-center">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <IconText label="Exit" iconName="logout" />
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <ModeToggle />
      <UserButton />
    </div>
  );
};

export default MenuBox;
