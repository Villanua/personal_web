export const dataTranslations = {
  es: {
    experience: [
      {
        role: 'Profesor Adjunto de Robótica Móvil',
        company: 'ICAI Comillas',
        period: 'Enero 2026 - Actualidad',
        description: 'Impartir sesiones prácticas de navegación autónoma, localización y control de sistemas robóticos para alumnos de grado.',
      },
      {
        role: 'Software Developer',
        company: 'Syntonize',
        period: 'Julio 2025 - Actualidad',
        description: 'Consultoría para la UNIR (Proeduca) en aplicaciones basadas en IA generativa, incluyendo NLP y Marketing Predictivo.',
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'Enero 2023 - Julio 2025',
        description: 'Liderazgo y desarrollo de proyectos de IA generativa, sistemas autónomos y robótica, desde la interacción con clientes hasta la implementación.',
      }
    ],
    education: [
      {
        degree: 'Máster en Robótica y Automatización',
        institution: 'Universidad Carlos III de Madrid',
        year: '2023',
        details: 'Especialización en robótica médica y colaboración humano-robot.',
      },
      {
        degree: 'Grado en Ingeniería en Tecnologías Industriales',
        institution: 'Universidad de Málaga',
        year: '2021',
        details: 'Especialización en automática y robótica móvil.',
      }
    ],
    courses: [
      { name: 'LangGraph - Develop LLM AI agents with LangGraph', year: '2024' },
      { name: 'LangChain - Develop LLM applications with LangChain', year: '2024' },
      { name: 'Introduction to Monte Carlo Methods', year: '2024' },
      { name: 'Responsive Web Design', year: '2023' },
      { name: 'Iniciación a ROS (Robot Operating System)', year: '2022' }
    ]
  },
  en: {
    experience: [
      {
        role: 'Teaching Assistant, Mobile Robotics',
        company: 'ICAI Comillas',
        period: 'January 2026 - Present',
        description: 'Delivering practical sessions on autonomous navigation, localization, and control of robotic systems for undergraduate students.',
      },
      {
        role: 'Software Developer',
        company: 'Syntonize',
        period: 'July 2025 - Present',
        description: 'Consulting for UNIR (Proeduca) on generative AI applications, including NLP and Predictive Marketing.',
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'January 2023 - July 2025',
        description: 'Leadership and development of generative AI projects, autonomous systems, and robotics, from client interaction to implementation.',
      }
    ],
    education: [
      {
        degree: 'Master\'s in Robotics and Automation',
        institution: 'Universidad Carlos III de Madrid',
        year: '2023',
        details: 'Specialization in medical robotics and human-robot collaboration.',
      },
      {
        degree: 'B.S. in Industrial Technologies Engineering',
        institution: 'Universidad de Málaga',
        year: '2021',
        details: 'Specialization in automation and mobile robotics.',
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
  'Python', 'C++', 'ROS/ROS2', 'TensorFlow', 'PyTorch', 'OpenCV', 
  'SLAM', 'Generative AI', 'Deep Learning', 'Reinforcement Learning',
  'LangChain', 'GCP', 'Docker', 'Linux', 'Git', 'Robot Manipulation'
];
