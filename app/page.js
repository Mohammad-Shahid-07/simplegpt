import InputForm from "@/components/InputForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="p-5">
        <Link href="https://www.builderkit.ai/">
          <Image src="/light-logo.png" height={100} width={150} alt="Logo" />
        </Link>
      </nav>
      <InputForm />
    </main>
  );
}
