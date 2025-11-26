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
  {
    id: "2",
    title: "Android Absence System",
    description: "No more paper, just quick check-ins right from your phone.",
    detailDescription: `
      <p>Android Absence System is designed to bring accuracy, security, and simplicity to employee check-ins. Powered by <b>face recognition</b> and <b>GPS validation</b>, the system ensures every attendance is authentic, location-verified, and fully aligned with company policies.</p>

      <p>Built with <b>Java Android</b>, the mobile app delivers a smooth, reliable experience—capturing real-time check-in and check-out data while preventing fraud and off-site attendance. Everything is crafted to support fast performance and effortless daily use.</p>

      <p>The ecosystem is completed with a sleek <b>React JS web dashboard</b>, enabling companies to track attendance, explore detailed reports, and configure master data—employees, locations, schedules, and rules—with ease.</p>

      <p><b>Key Advantages:</b></p>
        <ul>
           <li>Face recognition for secure, identity-verified attendance</li>
           <li>Location-based validation to prevent off-site check-ins</li>
           <li>Real-time analytics and reporting through a modern React dashboard</li>
           <li>Flexible master data management for company-specific workflows</li>
           <li>Seamless synergy between mobile app and web platform</li>
           <li>Scalable structure suitable for teams of any size</li>
       </ul>

<p>This project encapsulates a modern, high-trust attendance solution—built to empower companies with stronger accuracy, smarter workflows, and a more reliable way to manage their workforce.</p>

    `,
    image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.01.21_PM_vm2nrd.jpg",
    image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728317/WhatsApp_Image_2025-05-20_at_3.02.44_PM_nrydlk.jpg",
    image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.03.50_PM_rtr2a5.jpg",
    tags: ["Android", "Java"],
    demoLink: "",
    codeLink: "https://github.com/7benjamin/AdaAbsensiOnline",
    featured: true,
    gallery: [
      "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.01.21_PM_vm2nrd.jpg",
      "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.03.50_PM_rtr2a5.jpg",
    ],
  },
  {
    id: "3",
    title: "Product Branding Website",
    description: "Let's make your company branding throught website!",
    detailDescription: `
      <pProduct Branding Website is a full-scale branding website created to elevate the digital presence of the company product line. The platform was designed to deliver a bold, modern brand experience that reflects the heritage, personality, and visual identity of the product.</p>

<p>From late 2020 to the end of 2023, I managed the project called rockaroma.id, end-to-end — covering development, maintenance, feature enhancement, and overall site optimization. Built using <b>Laravel</b>, the system consists of two main environments: a <b>public-facing website</b> for brand storytelling and product presentation, and a <b>Content Management System (CMS)</b> for flexible content updates and internal workflow control.</p>

<p>I managed the project with total 4 people. Among them is 1 programmer, 1 graphic design, 1 manual tester and i as a project manager.</p>

<p><b>Key Advantages:</b></p>
<ul>
  <li>Modern brand-focused interface crafted for strong visual impact</li>
  <li>Laravel-based architecture ensuring stability, security, and scalability</li>
  <li>Dedicated CMS enabling dynamic content updates with ease</li>
  <li>Optimized performance for smooth browsing across all devices</li>
  <li>Structured content management supporting long-term brand growth</li>
</ul>

<p>This project represents a complete digital branding solution—connecting storytelling, design, and technology to create a cohesive and memorable brand experience for Aroma products.</p>
    `,
    image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_1_mbat2p.png",
    image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_2_gvmokn.png",
    image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_3_gakpn7.png",
    tags: ["Project Management", "Website Branding", "Laravel"],
    demoLink: "https://rockaroma.id/",
    codeLink: "",
    featured: true,
    gallery: [
      "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_1_mbat2p.png",
      "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_3_gakpn7.png",
    ],
  },
];
