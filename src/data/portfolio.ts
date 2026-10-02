export const portfolioData = {
  name: "Akash Verma",
  role: "Full-Stack Developer & AI Engineer",
  email: "as8052528735@gmail.com",
  phone: "7905874934",
  location: "Noida, Uttar Pradesh",
  github: "https://github.com/sky2d",
  
  about: "I'm a Full-stack developer with 2+ years of experience designing and building scalable systems. My expertise spans from multi-provider AI gateways to async job pipelines. I specialize in building unified AI inference infrastructures serving high-volume workloads and crafting robust frontend experiences. I work closely with customers, focus on system design, and ship fast.",
  
  experience: [
    {
      id: "znapai",
      company: "ZnapAi",
      role: "Full Stack Developer",
      date: "02/2026 – Present",
      location: "Delhi",
      metrics: [],
      points: [
        "Engineered a multi-provider AI inference infrastructure with intelligent model routing, async job processing, and provider failover for reliable, low-latency generation",
        "Built a unified AI inference gateway for LLM, image, video, audio, and coding-agent APIs across 9+ AI providers",
        "Built scalable APIs for authentication, usage tracking, monitoring, and provider management supporting high-volume AI workloads",
        "Integrated Inngest for asynchronous workflows and PostHog/DodoPayments for analytics and payments tracking"
      ],
      technologies: ["Node.js", "Python", "FastAPI", "Inngest", "PostHog"]
    },
    {
      id: "at-craya",
      company: "AT Craya",
      role: "Fullstack Developer",
      date: "07/2024 – 01/2026",
      location: "Delhi",
      metrics: [
        { value: "40%", label: "Faster Event Discovery" },
        { value: "50%", label: "Less Customization Time" },
        { value: "20%", label: "Speed Improvement" }
      ],
      points: [
        "Built a full-stack event discovery platform, reducing event discovery time by 40% using Next.js and TypeScript.",
        "Developed a drag-and-drop website builder with AI-assisted component placement, reducing website customization time by 50%.",
        "Integrated Razorpay and Shiprocket, including payment workflows, seller KYC, shipping, and order management.",
        "Implemented bulk product upload workflows for efficiently onboarding large product catalogs.",
        "Built reusable React components and optimized frontend performance, improving page load speed by 20%."
      ],
      technologies: ["Next.js", "TypeScript", "React"]
    }
  ],
  
  projects: [
    {
      id: "craya",
      name: "Craya — AI-Powered E-commerce & Product Content Platform",
      description: "Built a full-stack AI-powered e-commerce platform enabling brands and sellers to create and manage online storefronts, generate websites and manage their inventories, and automate product content workflows.",
      image: "/craya.png",
      link: "https://drive.google.com/file/d/1hF8OezO0tRo031nSY9vwmSZ-RNGlz0KU/view?usp=drive_link",
      points: [
        "Built a full-stack AI-powered e-commerce platform enabling brands and sellers to create and manage online storefronts and generate websites.",
        "Developed scalable backend services for inventory management and automated product content workflows.",
        "Built media-processing pipelines and payment integrations.",
        "Implemented AI generation workflows using various AI APIs."
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "AWS", "AI APIs"]
    },
    {
      id: "jobflow",
      name: "JobFlow (Distributed Job Processing)",
      description: "Production-pattern distributed background job processing system built on Kafka, Node.js, and PostgreSQL in a pnpm monorepo.",
      link: "https://github.com/sky2d/JobFlow",
      points: [
        "Architected a Kafka-backed distributed job pipeline in a pnpm monorepo, decoupling a reusable message-brokering package from business job handlers via a versioned JobMessage contract and type-safe topic registry.",
        "Engineered a fault-tolerant job retry system with bounded attempt tracking, durable PostgreSQL state synchronization, and structured Dead Letter Queue publishing for post-mortem analysis.",
        "Implemented idempotent Kafka job handlers with explicit state machine transitions (PENDING → PROCESSING → COMPLETED) and terminal-state guards, ensuring correctness under at-least-once delivery."
      ],
      technologies: ["Node.js", "TypeScript", "Apache Kafka", "PostgreSQL", "Prisma", "Express.js", "Docker", "pnpm Workspaces"]
    },
    {
      id: "ai-voice",
      name: "AI Voice Receptionist",
      description: "Multitenant AI receptionist platform autonomously handling customer inquiries and live handoffs.",
      link: "https://github.com/sky2d/Ai-Receptionist",
      points: [
        "Architected a multitenant AI receptionist platform with FastAPI and Next.js.",
        "Implemented a Retrieval-Augmented Generation (RAG) system with pgvector and sentence-transformers.",
        "Designed dynamic tool-calling integration for OpenAI LLM to execute real-time backend functions like Calendar booking.",
        "Built a low-latency voice pipeline integrating Twilio telephony, Deepgram speech-to-text, and Edge TTS."
      ],
      technologies: ["FastAPI", "Python", "Twilio", "Deepgram", "Groq", "ElevenLabs", "PostgreSQL", "pgvector", "Next.js"]
    },
    {
      id: "oshoot",
      name: "Oshoot (AI Content Generation Platform)",
      description: "Asynchronous AI generation pipeline queuing and processing hundreds of concurrent AI media jobs.",
      image: "/0shoot.png",
      link: "https://drive.google.com/file/d/1iCTpIFLTZNucFgTCywTqV27E9SBWORsA/view?usp=drive_link",
      points: [
        "Architected an asynchronous AI generation pipeline using Inngest across OpenAI, Gemini, and Fal AI.",
        "Designed a fault-tolerant retry system with exponential backoff on upstream rate limits and timeouts.",
        "Built an atomic status-computation system in PostgreSQL using custom SQL functions.",
        "Implemented partial-success handling gracefully surfacing successful outputs and localized retries."
      ],
      technologies: ["Next.js 15", "Node.js", "PostgreSQL", "Drizzle ORM", "Inngest", "OpenAI", "Gemini"]
    },
    {
      id: "docmind",
      name: "DocMind– RAG System",
      description: "Modular RAG system for querying PDF, TXT, Markdown, and DOCX documents using semantic search and LLM-based generation.",
      link: "https://github.com/sky2d/DocMind",
      points: [
        "Developed a modular RAG system for querying PDF, TXT, Markdown, and DOCX documents using semantic search and LLM-based generation.",
        "Implemented recursive chunking with ~500-token chunks and 50-token overlap to preserve context and improve retrieval quality.",
        "Generated 384-dimensional embeddings using Sentence Transformers and stored vectors in Supabase PostgreSQL with pgvector.",
        "Built a scalable FastAPI backend with SQLAlchemy, modularizing document ingestion, chunking, embedding, retrieval, and generation.",
        "Designed source-aware responses and provider-agnostic abstractions for embeddings, chunking, retrieval, and LLMs to support future RAG optimizations."
      ],
      technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "Supabase", "pgvector"]
    }
  ],
  skills: {
    frameworks: ["React", "React Native", "Next.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS"],
    languages: ["JavaScript", "TypeScript", "Python", "C/C++", "HTML/CSS"],
    databases: ["PostgreSQL", "Prisma", "Drizzle", "SQL"],
    tools: ["Kafka", "Git", "Docker", "Postman", "Inngest"]
  },

  education: {
    college: "Ajay Kumar Garg Engineering College",
    degree: "Bachelor of Technology in Information Technology",
    date: "11/2021 – 11/2025",
    location: "Ghaziabad"
  }
};
