export interface NavItemProps {
  text: string;
}

export interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FooterLinkProps {
  text: string;
}

export interface FooterSectionProps {
  title: string;
  links: string[];
}

export interface SocialIconProps {
  src: string;
  alt: string;
}
