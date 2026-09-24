import Image from "next/image";

import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-bioecy.png"
      alt=""
      width={500}
      height={230}
      className={cn("w-auto max-w-none", className)}
      priority
    />
  );
}
