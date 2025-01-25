import * as React from "react";
import { FooterLinkSectionProps } from "./types";

export const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col items-start leading-snug whitespace-nowrap font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] w-[262px]">
    <div className="flex flex-col self-stretch w-full font-[number:var(--sds-typography-body-font-weight-strong)]">
      <div className="w-full">{title}</div>
    </div>
    {links.map((link, index) => (
      <div key={index} className="mt-3 w-[89px] max-md:pr-5">
        {link}
      </div>
    ))}
  </div>
);
