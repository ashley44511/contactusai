export interface NavItemProps {
  text: string;
}

export interface CauseItemProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

export interface SocialIconProps {
  src: string;
  alt: string;
}

export interface FooterLinkProps {
  label: string;
}

export interface FooterSectionProps {
  title: string;
  links: string[];
}
