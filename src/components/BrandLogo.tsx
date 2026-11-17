import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Dweche Africa — AI Innovation at the Core"
      width={1280}
      height={420}
      sizes="(max-width: 639px) 176px, 192px"
      priority={priority}
      className={`h-auto w-44 shrink-0 sm:w-48 ${className}`}
    />
  );
}
