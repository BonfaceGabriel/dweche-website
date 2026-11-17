import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  transparent?: boolean;
};

export default function BrandLogo({ className = "", priority = false, transparent = false }: BrandLogoProps) {
  return (
    <Image
      src={transparent ? "/logo-transparent.png" : "/logo.png"}
      alt="Dweche Africa — AI Innovation at the Core"
      width={transparent ? 2171 : 1280}
      height={transparent ? 724 : 420}
      sizes="(max-width: 639px) 176px, 192px"
      priority={priority}
      className={`h-auto w-44 shrink-0 sm:w-48 ${className}`}
    />
  );
}
