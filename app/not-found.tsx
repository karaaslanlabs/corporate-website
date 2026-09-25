import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__mark">
        <Image src="/assets/brand/karaaslan-labs-mark.svg" alt="" width={128} height={128} />
      </div>
      <p>404 / KARAASLAN LABS</p>
      <h1>Bu sayfa sistemde bulunamadı.</h1>
      <Link href="/">Ana sayfaya dön ↗</Link>
    </main>
  );
}
