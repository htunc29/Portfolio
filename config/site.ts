export type SiteConfig = typeof siteConfig;
enum SkillColor {
  Primary = "primary",
  Secondary = "secondary",
  Warning = "warning",
  Danger = "danger",
  Success = "success",
  Default = "default"
}
export const siteConfig = {

  name: "Hüseyin Tunç",
  description: "",
  navItems: [
    {
      label: "Anasayfa",
      href: "/",
    },
    {
      label: "Yeteneklerim",
      href: "/skills",
    },
    {
      label: "Hizmetler",
      href: "/services",
    },
    {
      label: "Blog",
      href: "/blog",
    },  {
      label: "Projelerim",
      href: "/projects",
    },
    {
      label: "Hakkımda",
      href: "/about",
    },
    {
      label: "İletişim",
      href: "/contact",
    },
  
  ],
  navMenuItems: [
    {
      label: "Anasayfa",
      href: "/",
    },
    {
      label: "Yeteneklerim",
      href: "/skills",
    },
    {
      label: "Hizmetler",
      href: "/services",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Hakkımda",
      href: "/about",
    },
    {
      label: "İletişim",
      href: "/contact",
    },
  ],
  mySkills: [
    {name:"React",value:85,color:"primary"},
    {name:".NET",value:95,color:"success"},
    {name:"PHP",value:96,color:"primary"},
    {name:"Python",value:80,color:"warning"},
    {name:"Blazor",value:80,color:"danger"},
    {name:"MongoDb",value:80,color:"success"},
    {name: "Mysql",value:80,color:"warning"},
    {name:"MSSQL",value:80,color:"primary"},
    {name:"NEXT JS",value:80,color:"primary"},
    {name:"Javascript",value:80,color:"warning"},
    {name:"Tailwindcss",value:80,color:"danger"},
    {name:"Bootstrap",value:80,color:"primary"},

  ],
  links: {
    github: "https://github.com/htunc29/",
    twitter: "https://x.com/h_tunc_29",
    docs: "cv.pdf",
  },
};
