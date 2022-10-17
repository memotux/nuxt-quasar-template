export default defineAppConfig({
  siteUrl: `https://mysite.sv`,
  title: `My Site Title`,
  subtitle: `My Site Subtitle`,
  description: `My Site Description.`,
  author: `@author`,
  contact: {
    address: `My site fisical direction`,
    tel: `(503) 1234-1234`,
    mail: `me@author.sv`,
  },
  mr: `Todos los derechos reservados.`,
  menu: {
    main: [
      {
        url: "/#blog",
        name: "blog",
        icon: "rss_feed",
        title: "Blog",
      },
      {
        url: "/#acerca",
        name: "acerca",
        icon: 'account_circle',
        title: "Acerca de",
      },
      {
        url: "/curriculum",
        name: "cv",
        icon: 'contact_page',
        title: "Curriculum",
      },
      {
        url: "/#contacto",
        name: "contacto",
        icon: 'alternate_email',
        title: "Contacto",
      },
    ],
  },
  social: [
    {
      url: "https://facebook.com/mysite.sv",
      name: "facebook",
      title: "Facebook",
    },
    {
      url: "https://twitter.com/mysite",
      name: "twitter",
      title: "Twitter",
    },
    {
      url: "https://sv.linkedin.com/in/mysite",
      name: "linkedin",
      title: "Linkedin",
    },
  ],
  taxonomy: {
    category: [
      {
        name: "politica",
        title: "Política",
      },
      {
        name: "opinion",
        title: "Opinión",
      },
      {
        name: "juridica",
        title: "Jurídica",
      },
    ],
    tag: [
      {
        name: "entrevista",
        title: "Entrevista",
      },
      {
        name: "opinion",
        title: "Opinión",
      },
      {
        name: "video",
        title: "Video",
      },
      {
        name: "cambio",
        title: "Cambio",
      },
      {
        name: "raza-especial",
        title: "Raza especial",
      },
      {
        name: "musica-salvadorena",
        title: "Música salvadoreña",
      },
      {
        name: "legislacion",
        title: "Legislación",
      },
    ],
  },
},)