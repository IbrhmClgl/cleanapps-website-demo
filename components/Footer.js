import Link from "next/link";
import React from "react";

function Footer() {
  console.log("Footer: ");

  return (
    <div className="backgroundcolor h-[5rem] sm:h-[200px]  text-black grid  place-items-center space-x-2">
      <p>&copy; 2023 CleanApps</p>
      <p>Erstellt von CleanApps</p>
      <div>
        <Link href="/privacy"> Datenschutz</Link>
        <span> | </span>
        <Link href="/impressum"> Impressum</Link>
      </div>
    </div>
  );
}

export default Footer;
