export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Especialidades", href: "#especialidades" },
        { label: "Experiência", href: "#experiencia" },
        { label: "Projetos", href: "#projetos" },
        { label: "Contato", href: "#contato" },
      ],
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para oportunidades",
      cta1: "Ver experiências",
      cta2: "Entrar em contato",
      cta3: "Baixar CV",
    },
    about: {
      label: "Sobre mim",
      title: "Tecnologia a serviço de",
      titleHighlight: "produto e negócio",
      experience: "+8 anos de experiência",
      mobile: "React Native · Android & iOS",
      web: "Web · Node.js · APIs · Backend",
      p1: "Sou desenvolvedor Full Stack Sênior com mais de 8 anos de experiência construindo produtos digitais para empresas dos setores financeiro, varejo, saúde, games e tecnologia.",
      p2: "Tenho forte especialização em desenvolvimento mobile com React Native, mas também atuo na criação de aplicações web, APIs, integrações backend, automações, arquitetura de software, testes, analytics e pipelines de entrega.",
      p3: "Ao longo da minha trajetória, participei de projetos de grande escala, contribuindo desde a construção de interfaces e experiências mobile até integrações com serviços, SDKs nativos, sistemas backend e melhorias nos processos de desenvolvimento.",
      quote: '"Meu foco é criar soluções simples, bem estruturadas e sustentáveis, sempre conectando tecnologia, produto e impacto real para o negócio."',
    },
    skills: {
      label: "Especialidades",
      title: "O que eu entrego com",
      titleHighlight: "excelência",
      subtitle: "Tecnologias e práticas que utilizo para construir produtos escaláveis, confiáveis e de alto impacto.",
    },
    experience: {
      label: "Trajetória",
      title: "Experiência",
      titleHighlight: "profissional",
      subtitle: "Mais de 8 anos construindo produtos digitais em setores como financeiro, varejo, saúde, games e tecnologia.",
      current: "Atual",
    },
    projects: {
      label: "Portfólio",
      title: "Produtos e",
      titleHighlight: "cases",
      subtitle: "Produtos reais, desafios reais — uma seleção dos projetos em que atuei e o impacto gerado.",
      myRole: "Minha atuação",
      impact: "Impacto",
    },
    valuePillars: {
      label: "Valor gerado",
      title: "Como eu gero",
      titleHighlight: "resultado real",
      subtitle: "Não apenas entrego código — entrego soluções que impactam produto, equipe e negócio.",
    },
    education: {
      title: "Formação",
      languagesTitle: "Idiomas",
      shortBioLabel: "Bio curta",
      shortBio:
        "Desenvolvedor Full Stack Mobile Sênior com mais de 8 anos de experiência em React Native e Node.js. Especialista em arquitetura mobile, CI/CD, Design Systems e performance. Foco em soluções que conectam produto, entrega e resultado de negócio.",
    },
    contact: {
      label: "Contato",
      title: "Vamos construir",
      titleHighlight: "algo juntos?",
      subtitle:
        "Estou aberto a oportunidades, projetos estratégicos e conversas sobre desenvolvimento mobile, arquitetura, produto e tecnologia.",
      cta: "Falar no WhatsApp",
      location: "Disponível para trabalho remoto",
      whatsappMessage: "Olá, Paulo! Vi seu portfólio e gostaria de conversar.",
    },
    footer: {
      built: "Desenvolvido com Next.js, Tailwind CSS e Framer Motion",
    },
  },
  en: {
    nav: {
      links: [
        { label: "About", href: "#sobre" },
        { label: "Skills", href: "#especialidades" },
        { label: "Experience", href: "#experiencia" },
        { label: "Projects", href: "#projetos" },
        { label: "Contact", href: "#contato" },
      ],
      contact: "Contact",
    },
    hero: {
      badge: "Available for opportunities",
      cta1: "View experience",
      cta2: "Get in touch",
      cta3: "Download CV",
    },
    about: {
      label: "About me",
      title: "Technology at the service of",
      titleHighlight: "product and business",
      experience: "+8 years of experience",
      mobile: "React Native · Android & iOS",
      web: "Web · Node.js · APIs · Backend",
      p1: "I'm a Senior Full Stack Developer with over 8 years of experience building digital products for companies in the financial, retail, health, gaming and technology sectors.",
      p2: "I specialize strongly in mobile development with React Native, but also work on web applications, APIs, backend integrations, automations, software architecture, testing, analytics and delivery pipelines.",
      p3: "Throughout my career, I've participated in large-scale projects, contributing from building interfaces and mobile experiences to service integrations, native SDKs, backend systems and development process improvements.",
      quote: '"My focus is on creating simple, well-structured and sustainable solutions, always connecting technology, product and real business impact."',
    },
    skills: {
      label: "Skills",
      title: "What I deliver with",
      titleHighlight: "excellence",
      subtitle: "Technologies and practices I use to build scalable, reliable, high-impact products.",
    },
    experience: {
      label: "Career",
      title: "Professional",
      titleHighlight: "experience",
      subtitle: "Over 8 years building digital products across finance, retail, health, gaming and technology.",
      current: "Current",
    },
    projects: {
      label: "Portfolio",
      title: "Products and",
      titleHighlight: "cases",
      subtitle: "Real products, real challenges — a selection of projects I worked on and the impact generated.",
      myRole: "My role",
      impact: "Impact",
    },
    valuePillars: {
      label: "Value delivered",
      title: "How I generate",
      titleHighlight: "real results",
      subtitle: "I don't just deliver code — I deliver solutions that impact product, team and business.",
    },
    education: {
      title: "Education",
      languagesTitle: "Languages",
      shortBioLabel: "Short bio",
      shortBio:
        "Senior Mobile Full Stack Developer with over 8 years of experience in React Native and Node.js. Expert in mobile architecture, CI/CD, Design Systems and performance. Focused on solutions connecting product, delivery and business results.",
    },
    contact: {
      label: "Contact",
      title: "Shall we build",
      titleHighlight: "something together?",
      subtitle:
        "I'm open to opportunities, strategic projects and conversations about mobile development, architecture, product and technology.",
      cta: "Chat on WhatsApp",
      location: "Available for remote work",
      whatsappMessage: "Hi Paulo! I saw your portfolio and would like to chat.",
    },
    footer: {
      built: "Built with Next.js, Tailwind CSS and Framer Motion",
    },
  },
} as const;
