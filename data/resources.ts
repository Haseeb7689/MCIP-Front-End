export type Resource = {
  id: string;
  titleKey: string;
  type: "link" | "external";
  href?: string;
};

export type UsefulLinksItem = {
  href: string;
  titleKey: string;
  descKey: string;
};

export type UsefulLinksSection = {
  categoryKey: string;
  items: UsefulLinksItem[];
};

export const resources: Resource[] = [
  {
    id: "useful-links",
    titleKey: "useful_links",
    type: "link",
  },
  {
    id: "submit-useful-resources",
    titleKey: "submit_useful_resources",
    type: "external",
    href: "mailto:info@chotainvestor.pk",
  },
];

export const usefulLinks: UsefulLinksSection[] = [
  {
    categoryKey: "cat_self_help",
    items: [
      {
        href: "https://markmanson.net/books/subtle-art",
        titleKey: "subtle_art_title",
        descKey: "subtle_art_desc",
      },
    ],
  },
  {
    categoryKey: "cat_become_rich",
    items: [
      {
        href: "https://www.naphill.org/product/think-and-grow-rich/",
        titleKey: "think_rich_title",
        descKey: "think_rich_desc",
      },
      {
        href: "https://www.richdad.com/products/rich-dad-poor-dad",
        titleKey: "rich_dad_title",
        descKey: "rich_dad_desc",
      },
    ],
  },
  {
    categoryKey: "cat_real_estate",
    items: [
      {
        href: "https://www.zameen.com",
        titleKey: "zameen_title",
        descKey: "zameen_desc",
      },
      {
        href: "https://www.cda.gov.pk/public/privateCommercialProjects",
        titleKey: "cda_title",
        descKey: "cda_desc",
      },
      {
        href: "https://rda.gop.pk/ahs/",
        titleKey: "rda_title",
        descKey: "rda_desc",
      },
    ],
  },
  {
    categoryKey: "cat_stock_exchange",
    items: [
      {
        href: "https://www.psx.com.pk/",
        titleKey: "psx_title",
        descKey: "psx_desc",
      },
      {
        href: "https://www.scstrade.com/",
        titleKey: "scs_title",
        descKey: "scs_desc",
      },
      {
        href: "https://knowledgecenter.psx.com.pk/",
        titleKey: "psx_learn_title",
        descKey: "psx_learn_desc",
      },
    ],
  },
];
