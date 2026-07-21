"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";
import { IconHome, IconBed, IconUsers, IconMail, IconPhoto } from "@/components/Icons";

const ICONS = {
  home: IconHome,
  bed: IconBed,
  users: IconUsers,
  mail: IconMail,
  photo: IconPhoto,
};

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/images/logo_seal.png"
              alt="El Rincón de Gredos"
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
            El Rincón de Gredos
          </Link>
          <nav>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <nav className="bottom-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.icon];
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "active" : ""}
            >
              <Icon />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
