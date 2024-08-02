import Button from "../components/Button";
// 404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="custom-404  h-[calc(100vh-5rem)] sm:h-[calc(100vh-200px)] pt-20 flex backgroundcolor flex-col justify-center items-center">
      <h1 className="text-[calc(20px+6*((100vw-320px)/680))]">
        404 - Page Not Found
      </h1>
      <Link href={"/"}>
        <Button text={"Go back home"} />
      </Link>
    </section>
  );
}
