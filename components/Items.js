import { useRouter } from "next/router";

const styles = {
    className:
    "text-lg md:text-xl text-gray-600 block px-2 py-1 hover:underline hover:text-gray-900",
};


const Items = () => {
  const router = useRouter()

  const menuItems =()=> {
    return [
      {
        className: styles.className,
        href: router.asPath !== "/" ? "home" : "home",
        label: "Home",
        url: "home",
      },
      {
        className: styles.className,
        href: router.asPath !== "/" ? "about" : "about",
        label: "Über uns",
        url: "about",
      },
      {
        className: styles.className,
        href: router.asPath !== "/" ? "services" : "services",
        label: "Dienstleistungen",
        url: "services",
      },
      {
        className: styles.className,
        href: router.asPath !== "/" ? "references" : "references",
        label: "Referenzen",
        url: "references",
      },

      {
        className: styles.className,
        href: router.asPath !== "/" ? "contact" : "contact",
        label: "Kontakt",
        url: "contact",
      },
    ];
  }
return [menuItems];   
}


export default Items;
