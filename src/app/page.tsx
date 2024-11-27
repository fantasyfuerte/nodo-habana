import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-96 -mt-40">
      <Image
        src="/logo.jpg"
        width={550}
        height={200}
        alt="logo image"
        className="object-cover object-top"
      />
    </div>
  );
}
