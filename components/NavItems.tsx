"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Companions", link: "/companions" },
  { label: "My Journey", link: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, link }) => (
        <Link 
            href={link} 
            key={label} 
            className={cn(pathname === link && "text-primary font-semibold")}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
