export interface SiteConfig {
  name: string;
  title: string;
  domain: string;
  email: string;
  description: string;
  keywords: string[];
}

export interface PersonalConfig {
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  resume: {
    url: string;
    enabled: boolean;
    title: string;
    description: string;
  };
}

export interface HomeConfig {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  cta: {
    primary: {
      text: string;
      link: string;
      icon: string;
    };
    secondary: {
      text: string;
      link: string;
    };
    resume: {
      text: string;
      link: string;
      icon: string;
    };
  };
}

export interface AboutConfig {
  bio: string[];
  skills: {
    name: string;
    items: string[];
  }[];
  interests: string[];
}

export interface NavigationConfig {
  links: {
    href: string;
    label: string;
    icon: string;
  }[];
}
