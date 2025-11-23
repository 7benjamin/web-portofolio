export interface Project {
  id: string;
  title: string;
  description: string;
  detailDescription: string;
  image: string;
  image2?: string;
  image3?: string;
  tags: string[];
  gallery: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portofolio Website",
    description: "Fresh from the oven. I can make it for you or your company too",
    detailDescription: `
      <p>Portfolio website is built to support both personal and corporate branding, offering a clean, modern, and high-performance platform to showcase projects, achievements, and professional identity.</p>

      <p>Developed using React, TypeScript, and Tailwind CSS, the project focuses on speed, reliability, customization, and long-term scalability.</p>

      <p>React delivers efficient rendering, smooth transitions, and modular UI components that make future updates effortless. TypeScript enhances code quality through type safety, reducing bugs and ensuring easy feature expansion. Tailwind CSS provides utility-first styling, enabling consistent design, fast development, and responsive layouts across all devices.</p>

      <p><Key Advantages:</p>
      <ul>
        <li>Component reusability for long-term maintainability</li>
        <li>SEO-friendly structure for better online visibility</li>
        <li>Optimized performance with minimal styling overhead</li>
        <li>Highly customizable themes suitable for individuals or companies</li>
        <li>Type-safe and scalable architecture using TypeScript</li>
        <li>Responsive and accessible design on all devices</li>
      </ul>

      <p>Overall, this project combines modern technologies to create a fast, elegant, and scalable portfolio solution for professionals, creatives, and businesses.</p>
    `,
    image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731599/porto_1_pqex5m.png",
    image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731586/Porto_2_bsr63h.png",
    image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731593/porto_3_x6coi9.png",
    tags: ["React", "Typescript", "Tailwind"],
    demoLink: "https://benjamin-portofolio.netlify.app/",
    codeLink: "https://github.com/7benjamin/web-portofolio",
    featured: true,
    gallery: [
      "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731599/porto_1_pqex5m.png",
      "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731586/Porto_2_bsr63h.png",
    ],
  },
  // {
  //   id: "2",
  //   title: "Android Absence System",
  //   description: "No more paper, just quick check-ins right from your phone.",
  //   image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.01.21_PM_vm2nrd.jpg",
  //   image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728317/WhatsApp_Image_2025-05-20_at_3.02.44_PM_nrydlk.jpg",
  //   image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.03.50_PM_rtr2a5.jpg",
  //   tags: ["Android", "Java"],
  //   demoLink: "#",
  //   codeLink: "https://github.com/7benjamin/AdaAbsensiOnline",
  //   featured: true
  // },
  // {
  //   id: "3",
  //   title: "Product Branding Website",
  //   description: "Led this project from 2021 to early 2024. I planning, keeping things on track, and making sure hit the goals",
  //   image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_1_mbat2p.png",
  //   image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_2_gvmokn.png",
  //   image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_3_gakpn7.png",
  //   tags: ["IT Project Management", "Laravel"],
  //   demoLink: "#",
  //   codeLink: "#",
  //   featured: true
  // }
];
