export const aboutPageTranslations = {
  es: {
    // Hero section
    greeting: "¡Hola a todos!",
    imName: "Soy Nacho Villanúa",
    intro1: "Soy un ingeniero de Robótica e IA, apasionado por el aprendizaje continuo. Mi amor por las matemáticas y la física, junto con una profunda curiosidad sobre cómo funciona el mundo, me ha llevado a enfrentar los emocionantes desafíos de la robótica y la inteligencia artificial.",
    intro2: "Me especializo en el desarrollo de software para plataformas robóticas y aplicaciones potenciadas por IA, con un fuerte enfoque en IA Generativa y agentes inteligentes. También he trabajado en interfaces web y desplegado soluciones en Google Cloud Platform, siempre buscando construir sistemas que sean tanto técnicamente sólidos como prácticamente valiosos.",
    
    // Section headers
    professionalPath: "Trayectoria Profesional",
    academicJourney: "Trayectoria Académica",
    technicalEcosystem: "Ecosistema Técnico",
    certificationsTitle: "Certificaciones y Cursos",
    
    // Labels
    experienceLabel: "01 / Experiencia",
    educationLabel: "02 / Educación",
    skillsLabel: "03 / Habilidades",
    
    // Experience details
    acciona: {
      intro1: "Trabajo como Desarrollador de Software en el Digital Hub de Acciona, enfocándome en el diseño y desarrollo de aplicaciones innovadoras que incorporan tecnologías de vanguardia en soluciones de negocio del mundo real. Aunque mi rol principal es el desarrollo backend, también he contribuido en tareas de frontend en varios proyectos.",
      intro2: "He participado en proyectos desde sus etapas iniciales: recopilando requisitos directamente de los clientes, analizando sus necesidades, diseñando arquitecturas de sistemas, planificando recursos y plazos, y desarrollando el producto final. También participo en reuniones de seguimiento para alinear el progreso con las expectativas del cliente y mejorar iterativamente nuestras soluciones.",
      
      // Generative AI section
      aiTitle: "Inteligencia Artificial y Ciencia de Datos",
      aiSummary: "Desarrollo de sistemas RAG, agentes autónomos inteligentes y fine-tuning de modelos de lenguaje tanto localmente como en la nube.",
      aiFullText: "He trabajado en una variedad de proyectos aplicando técnicas de Machine Learning y Deep Learning para extraer insights, predecir comportamientos y apoyar decisiones basadas en datos. Mi enfoque principal ha sido la IA Generativa y el diseño de agentes inteligentes, construyendo soluciones personalizadas que satisfacen las necesidades reales de los clientes.\n\nEsto incluye el desarrollo de sistemas RAG (Retrieval-Augmented Generation) personalizados con pipelines Human-in-the-Loop, creando agentes autónomos capaces de ejecutar código Python, realizar búsquedas web en tiempo real o analizar documentos en múltiples modalidades (texto, imágenes, tablas). También he diseñado agentes capaces de detectar inconsistencias en bases de documentos o encontrar contradicciones basados en Knowledge Graphs.\n\nHe construido agentes utilizando frameworks como LangChain y LangGraph, adaptando sus arquitecturas a flujos de trabajo específicos y necesidades de integración. También he trabajado aplicando Knowledge Graphs para estructurar datos no organizados en relaciones significativas basadas en grafos, ayudando a definir dependencias, mejorar la búsqueda semántica y apoyar tareas de razonamiento en sistemas más grandes.\n\nAdemás, he realizado fine-tuning tanto localmente como en la nube, aplicando técnicas como LoRA y cuantización de modelos. Esto incluye fine-tuning local de modelos como Deepseek y Gemma, así como fine-tuning en la nube de Gemini 2.0 en Google Cloud Platform. Estos esfuerzos me han permitido adaptar LLMs a necesidades específicas del dominio y optimizar su rendimiento para casos de uso del mundo real.",
      clickToExpand: "Click para ver más detalles",
      clickToCollapse: "Click para ocultar detalles",
      
      // Robotics section  
      roboticsTitle: "Desarrollo en Robótica",
      roboticsSummary: "Trabajo con manipuladores colaborativos, robots móviles autónomos, sistemas de localización y arquitecturas basadas en ROS.",
      roboticsFullText: "He trabajado con una amplia gama de plataformas robóticas en diferentes dominios, incluyendo manipuladores colaborativos y robots móviles autónomos. Mi experiencia incluye la programación y despliegue de sistemas utilizando brazos robóticos UR3 y UR10, así como plataformas móviles como Boston Dynamics Spot, Summit-XL, MiR, Bellabot y Kettybot, cada uno adaptado a tareas específicas en logística, inspección e interacción humano-robot.\n\nPara brazos robóticos, he integrado periféricos como elevadores, cintas transportadoras y grippers personalizados, creando flujos de trabajo de automatización complejos. En robots móviles, he implementado sistemas de localización utilizando EKF y AMCL, construido lógica de comportamiento de misión a través de máquinas de estados en C++, y desarrollado sistemas de planificación utilizando bases de datos SQLite para la secuenciación de tareas y navegación.\n\nTambién he construido interfaces web conectadas a ROS a través de ROSBridge para permitir un control y monitorización intuitivos, mejorando la accesibilidad para operadores y usuarios no técnicos. Además, he gestionado despliegues de campo y procedimientos de recuperación para casos de uso del mundo real, como desinfección autónoma, participación en eventos y vigilancia de campus."
    },
    
    // Education details
    master: {
      intro: "Obtuve mi Máster en Robótica y Automatización en la Universidad Carlos III de Madrid, donde avancé mis conocimientos en control inteligente, machine learning, visión por computador, robótica médica, humanoides y robótica móvil.",
      thesisTitle: "Tesis: SLAM y Segmentación",
      thesisDesc: "Mi Tesis de Máster, \"Simultaneous Localization and Mapping and Segmentation\", se centró en robótica móvil y comprensión espacial. Desarrollé un algoritmo SLAM capaz de generar mapas 2D y 3D utilizando técnicas de registro de nubes de puntos como ICP y NDT, integrados a través de pose graphs.",
      contributionsTitle: "Contribuciones Técnicas",
      contributionsItems: [
        "Algoritmo SLAM: generación de mapas 2D/3D",
        "Registro de nubes de puntos: ICP y NDT",
        "Pose graphs para optimización de trayectorias",
        "Pipeline de segmentación: puertas y habitaciones usando algoritmos watershed",
        "Fusión multi-método para detección robusta",
        "Generación de mapas topológicos desde datos geométricos"
      ]
    },
    bachelor: {
      intro1: "Obtuve mi Grado en Ingeniería en Tecnologías Industriales en la Universidad de Málaga. Este programa multidisciplinar proporcionó una comprensión amplia y sólida de los fundamentos de ingeniería, incluyendo mecánica, análisis estructural, sistemas eléctricos, termodinámica, dinámica de fluidos y teoría de control.",
      intro2: "Más allá de las asignaturas troncales, el grado enfatizó el pensamiento analítico y la resolución de problemas, equipándome con la habilidad de entender y modelar sistemas complejos y abordar desafíos desde una perspectiva sistémica.",
      specializationTitle: "Especialización",
      specializationDesc: "Me especialicé en el campo de la automatización y electrónica, donde estudié robótica industrial y colaborativa, visión por computador, electrónica digital y analógica, así como técnicas de machine learning y deep learning aplicadas a sistemas inteligentes.",
      thesisTitle: "Tesis: Robótica Quirúrgica CRANEEAL",
      thesisDesc: "Mi Tesis de Grado, \"Estrategia de colaboración humano-robot en cirugía endonasal\", fue parte del Plan Nacional de Investigación. Contribuyó a la publicación \"Collaborative Robotic Assistant Platform for Endonasal Surgery: Preliminary In-Vitro Trials\".",
      contributionsTitle: "Contribuciones Técnicas",
      contributionsItems: [
        "Generación de obstáculos virtuales con retroalimentación de fuerza",
        "Calibración de cámara y mapeo 3D-2D",
        "Máquina de estados basada en ontología para cambio de modo",
        "Arquitectura de software ROS e integración",
        "Interfaz web de monitorización en tiempo real"
      ]
    }
  },
  en: {
    // Hero section
    greeting: "Hello Everyone!",
    imName: "I'm Nacho Villanúa",
    intro1: "I'm a Robotics & AI engineer, passionate about continuous learning. My love for mathematics and physics, along with a deep curiosity about how the world works, has driven me to take on the exciting challenges of robotics and artificial intelligence.",
    intro2: "I specialize in software development for robotic platforms and AI-powered applications, with a strong focus on Generative AI and intelligent agents. I've also worked on web interfaces and deployed solutions on Google Cloud Platform, always aiming to build systems that are both technically solid and practically valuable.",
    
    // Section headers
    professionalPath: "Professional Path",
    academicJourney: "Academic Journey",
    technicalEcosystem: "Technical Ecosystem",
    certificationsTitle: "Certifications & Courses",
    
    // Labels
    experienceLabel: "01 / Experience",
    educationLabel: "02 / Education",
    skillsLabel: "03 / Skills",
    
    // Experience details
    acciona: {
      intro1: "I work as a Software Developer at Acciona's Digital Hub, focusing on the design and development of innovative applications that bring cutting-edge technologies into real-world business solutions. While my main role is backend development, I've also contributed to frontend tasks across various projects.",
      intro2: "I've been involved in projects from their earliest stages: gathering requirements directly from clients, analyzing their needs, designing system architectures, planning resources and timelines, and developing the final product. I also participate in follow-up meetings to align progress with client expectations and iteratively improve our solutions.",
      
      // Generative AI section
      aiTitle: "Artificial Intelligence & Data Science",
      aiSummary: "Development of RAG systems, intelligent autonomous agents, and fine-tuning of language models both locally and in the cloud.",
      aiFullText: "I've worked on a range of projects applying Machine Learning and Deep Learning techniques to extract insights, predict behaviors, and support data-driven decisions. My main focus has been on Generative AI and intelligent agent design, where I build tailored solutions that meet real client needs.\n\nThis includes developing customized RAG (Retrieval-Augmented Generation) systems with Human-in-the-Loop pipelines, creating autonomous agents capable of executing Python code, performing live web searches, or analyzing documents across modalities (text, image, tables). I've also designed agents capable of detecting inconsistencies across document bases or finding contradictions based in Knowledge Graphs.\n\nI've built agents using frameworks like LangChain and LangGraph, adapting their architectures to specific workflows and integration needs. I've also worked on applying Knowledge Graphs to structure unorganized data into meaningful graph-based relationships—helping define dependencies, enhance semantic search, and support reasoning tasks in larger systems.\n\nAdditionally, I've performed fine-tuning both locally and in the cloud, applying techniques like LoRA and model quantization. This includes local fine-tuning of models such as Deepseek and Gemma, as well as cloud-based fine-tuning of Gemini 2.0 on Google Cloud Platform.",
      clickToExpand: "Click for more details",
      clickToCollapse: "Click to hide details",
      
      // Robotics section
      roboticsTitle: "Robotics Development",
      roboticsSummary: "Work with collaborative manipulators, autonomous mobile robots, localization systems, and ROS-based architectures.",
      roboticsFullText: "I've worked with a wide range of robotic platforms across different domains, including collaborative manipulators and autonomous mobile robots. My experience includes programming and deploying systems using UR3 and UR10 robotic arms, as well as mobile platforms like Boston Dynamics Spot, Summit-XL, MiR, Bellabot, and Kettybot—each adapted to specific tasks in logistics, inspection, and human-robot interaction.\n\nFor robotic arms, I've integrated peripherals such as elevators, conveyors, and custom grippers, creating complex automation workflows. On mobile robots, I've implemented localization systems using EKF and AMCL, built mission behavior logic through C++ state machines, and developed planning systems using SQLite databases for task sequencing and navigation.\n\nI've also built web interfaces connected to ROS via ROSBridge to allow intuitive control and monitoring, enhancing accessibility for operators and non-technical users. Additionally, I've managed field deployments and recovery procedures for real-world use cases, such as autonomous disinfection, event participation, and campus surveillance."
    },
    
    // Education details
    master: {
      intro: "I earned a Master's Degree in Robotics and Automation from Universidad Carlos III de Madrid, where I advanced my knowledge in intelligent control, machine learning, computer vision, medical robotics, humanoids, and mobile robotics.",
      thesisTitle: "Thesis: SLAM & Segmentation",
      thesisDesc: "My Master's Thesis, \"Simultaneous Localization and Mapping and Segmentation\", focused on mobile robotics and spatial understanding. I developed a SLAM algorithm capable of generating 2D and 3D maps using point cloud registration techniques such as ICP and NDT, integrated through pose graphs.",
      contributionsTitle: "Technical Contributions",
      contributionsItems: [
        "SLAM algorithm: 2D/3D map generation",
        "Point cloud registration: ICP & NDT",
        "Pose graphs for trajectory optimization",
        "Segmentation pipeline: doors & rooms using watershed algorithms",
        "Multi-method fusion for robust detection",
        "Topological map generation from geometric data"
      ]
    },
    bachelor: {
      intro1: "I earned my Bachelor's Degree in Industrial Technologies Engineering at the University of Málaga. This multidisciplinary program provided a broad and solid understanding of engineering fundamentals, including mechanics, structural analysis, electrical systems, thermodynamics, fluid dynamics, and control theory.",
      intro2: "Beyond the core subjects, the degree emphasized analytical thinking and problem-solving, equipping me with the ability to understand and model complex systems and to approach challenges from a systemic perspective.",
      specializationTitle: "Specialization",
      specializationDesc: "I specialized in the field of automation and electronics, where I studied industrial and collaborative robotics, computer vision, digital and analog electronics, as well as machine learning and deep learning techniques applied to intelligent systems.",
      thesisTitle: "Thesis: CRANEEAL Surgical Robotics",
      thesisDesc: "My Bachelor's Thesis, \"Human-Robot Collaboration Strategy in Endonasal Surgery\", was part of the National Research Plan. It contributed to the publication \"Collaborative Robotic Assistant Platform for Endonasal Surgery: Preliminary In-Vitro Trials\".",
      contributionsTitle: "Technical Contributions",
      contributionsItems: [
        "Virtual obstacle generation with force feedback",
        "Camera calibration & 3D-2D mapping",
        "State machine based on ontology for mode switching",
        "ROS software architecture & integration",
        "Real-time web monitoring interface"
      ]
    }
  }
} as const;
