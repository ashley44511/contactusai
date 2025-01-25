import * as React from "react";
import { CauseCardProps } from "./types";

export const CauseCard: React.FC<CauseCardProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col grow shrink justify-center p-6 w-48 bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] max-md:px-5">
      <div className="flex flex-col w-full">
        <div className="w-full tracking-tight leading-tight font-[number:var(--sds-typography-heading-font-weight)] text-[length:var(--sds-typography-heading-size-base)]">
          {title}
        </div>
        <div className="mt-1 w-full leading-snug whitespace-nowrap font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)]">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
