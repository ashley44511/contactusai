export interface CauseCardProps {
  title: string;
  subtitle: string;
}

export interface NavLinkProps {
  label: string;
}

export interface FooterLinkProps {
  label: string;
  href?: string;
}

export interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
}
