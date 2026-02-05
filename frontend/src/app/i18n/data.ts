export const dataTranslations = {
  es: {
    experience: [
      {
        role: 'Profesor Adjunto de Robótica Móvil',
        company: 'ICAI Comillas',
        period: 'Enero 2026 - Actualidad',
        description: 'Impartir sesiones prácticas de navegación autónoma, localización y control de sistemas robóticos para alumnos de grado.'
      },
      {
        role: 'Software Developer',
        company: 'Syntonize',
        period: 'Julio 2025 - Actualidad',
        description: 'Consultoría para la UNIR (Proeduca) en aplicaciones basadas en IA generativa, incluyendo NLP y Marketing Predictivo.'
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'Enero 2023 - Julio 2025',
        description: 'Ingeniero de Software Full Stack especializado en **Robótica** e **Inteligencia Artificial Generativa**. Liderazgo del ciclo completo de desarrollo de **sistemas autónomos** (**ROS**, **Spot**, **ROVs**) y arquitecturas **RAG** avanzadas (**Agentes**, **HITL**, **Grafos de Conocimiento**), integrando soluciones cloud robustas (**GCP**, **Docker**, **Celery**) directamente con las necesidades de negocio.'
      }
    ],
    education: [
      {
        degree: 'Máster en Robótica y Automatización',
        institution: 'Universidad Carlos III de Madrid',
        year: '2023',
        details: 'Especialización en robótica médica y colaboración humano-robot.'
      },
      {
        degree: 'Grado en Ingeniería en Tecnologías Industriales',
        institution: 'Universidad de Málaga',
        year: '2021',
        details: 'Especialización en automatización y robótica móvil.'
      }
    ],
    courses: [
      { name: 'LangGraph - Develop LLM AI agents with LangGraph', year: '2024' },
      { name: 'LangChain - Develop LLM applications with LangChain', year: '2024' },
      { name: 'Introduction to Monte Carlo Methods', year: '2024' },
      { name: 'Responsive Web Design', year: '2023' },
      { name: 'Introduction to ROS (Robot Operating System)', year: '2022' }
    ]
  },
  en: {
    experience: [
      {
        role: 'Teaching Assistant, Mobile Robotics',
        company: 'ICAI Comillas',
        period: 'January 2026 - Present',
        description: 'Delivering practical sessions on autonomous navigation, localization, and control of robotic systems for undergraduate students.'
      },
      {
        role: 'Software Developer',
        company: 'Syntonize',
        period: 'July 2025 - Present',
        description: 'Consulting for UNIR (Proeduca) on generative AI applications, including NLP and Predictive Marketing.'
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'January 2023 - July 2025',
        description: 'Full Stack Software Engineer specialized in **Robotics** and **Generative AI**. Leadership of the full development lifecycle of **autonomous systems** (**ROS**, **Spot**, **ROVs**) and advanced **RAG** architectures (**Agents**, **HITL**, **Knowledge Graphs**), integrating robust cloud solutions (**GCP**, **Docker**, **Celery**) directly with business needs.'
      }
    ],
    education: [
      {
        degree: 'Master\'s in Robotics and Automation',
        institution: 'Universidad Carlos III de Madrid',
        year: '2023',
        details: 'Specialization in medical robotics and human-robot collaboration.'
      },
      {
        degree: 'B.S. in Industrial Technologies Engineering',
        institution: 'Universidad de Málaga',
        year: '2021',
        details: 'Specialization in automation and mobile robotics.'
      }
    ],
    courses: [
      { name: 'LangGraph - Develop LLM AI agents with LangGraph', year: '2024' },
      { name: 'LangChain - Develop LLM applications with LangChain', year: '2024' },
      { name: 'Introduction to Monte Carlo Methods', year: '2024' },
      { name: 'Responsive Web Design', year: '2023' },
      { name: 'Introduction to ROS (Robot Operating System)', year: '2022' }
    ]
  }
} as const;

// Skills data is language-agnostic (same in both languages)
export const skillsData = [
  'Python', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS',
  'ROS/ROS2', 'Mobile Robotics', 'SLAM', 'Navigation', 'Robot Manipulation', 'Sensor Fusion', 'OpenCV', 'PCL',
  'Generative AI', 'LLMs', 'RAG', 'Agents', 'LangChain', 'LangGraph', 'NLP', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Reinforcement Learning', 'Knowledge Graphs',
  'GCP', 'Azure', 'Docker', 'Terraform', 'Linux', 'FastAPI', 'Django', 'Livekit', 'Celery', 'NGINX', 'Git',
  'FullStack Dev', 'Web Design', 'Databases'
];
