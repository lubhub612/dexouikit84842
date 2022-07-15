import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.dexrium.exchange/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@dexrium_exchange",
      },
      {
        label: "Community",
        href: "https://docs.dexrium.exchange/contact-us/communities",
      },
      {
        label: "Dexrium Token",
        href: "https://docs.dexrium.exchange/tokenomics/defi-token",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.dexrium.exchange/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.dexrium.exchange/click-here-for-help/troubleshooting-errors",
      },
      {
        label: "Guides",
        href: "https://docs.dexrium.exchange/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      {
        label: "Documentation",
        href: "https://docs.dexrium.exchange/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.dexrium.exchange/developers/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.dexrium.exchange/",
      },
      {
        label: "Careers",
        href: "https://docs.dexrium.exchange/careers/hiring",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/DexriumExchange",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/Dexrium",
      },
      //{
        //  label: "Bahasa Indonesia",
        //  href: "https://t.me/PancakeSwapIndonesia",
      //  },
      //  {
        //  label: "中文",
        //  href: "https://t.me/PancakeSwap_CN",
      //  },
      //  {
      //    label: "Tiếng Việt",
        //  href: "https://t.me/PancakeSwapVN",
      //  },
      //  {
        //  label: "Italiano",
        //  href: "https://t.me/pancakeswap_ita",
      //  },
      //  {
      //    label: "русский",
      //    href: "https://t.me/pancakeswap_ru",
      //  },
      //  {
        //  label: "Türkiye",
      //    href: "https://t.me/pancakeswapturkiye",
      //  },
      //  {
        //  label: "Português",
        //  href: "https://t.me/PancakeSwapPortuguese",
      //  },
      //  {
        //  label: "Español",
        //  href: "https://t.me/PancakeswapEs",
      //  },
      //  {
        //  label: "日本語",
        //  href: "https://t.me/pancakeswapjp",
      //  },
      //  {
      //    label: "Français",
      //    href: "https://t.me/pancakeswapfr",
      //  },
      //  {
      //    label: "Announcements",
      //    href: "https://t.me/PancakeSwapAnn",
      //  },
      //  {
        //  label: "Whale Alert",
      //    href: "https://t.me/PancakeSwapWhales",
      //  },
    ],
  },

  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/Dexrium",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
