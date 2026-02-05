export const aboutPageTranslations = {
  es: {
    // Hero section
    greeting: "¡Hola a todos!",
    imName: "Soy Nacho Villanúa",
    intro1: "Soy un ingeniero de Robótica e IA, apasionado por el aprendizaje continuo. Mi amor por las matemáticas y la física, junto con una profunda curiosidad sobre cómo funciona el mundo, me ha llevado a enfrentar los emocionantes desafíos de la robótica y la inteligencia artificial.",
    intro2: "Me especializo en el desarrollo de software para plataformas robóticas y aplicaciones potenciadas por IA, con un fuerte enfoque en IA Generativa y agentes inteligentes. También he trabajado en interfaces web y desplegado soluciones en Google Cloud Platform, siempre buscando construir sistemas que sean tanto técnicamente sólidos como prácticamente valiosos.",
    
    // Section headers
    professionalPath: "Experiencia",
    academicJourney: "Educación",
    technicalEcosystem: "Habilidades",
    certificationsTitle: "Certificaciones y Cursos",
    
    // Labels (unused as titles now)
    experienceLabel: "01 / Experiencia",
    educationLabel: "02 / Educación",
    skillsLabel: "03 / Habilidades",
    
    // Experience details
    icai: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      intro1: "Supervisión de sesiones prácticas de robótica móvil para alumnos de grado. Instrucción enfocada en algoritmos de **localización** (**SLAM**, **AMCL**), **planificación** y **seguimiento de trayectorias** en plataformas reales.",
    },
    syntonize: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      intro1: "Diseño de **arquitecturas de soluciones**, **despliegue**, gestión de la **comunicación con stakeholders** y **monitorización** de aplicaciones en **producción**.",
      projectTitle: "IA Generativa y Cloud",
      projectList: [
        "Desarrollo de aplicación para la inferencia de perfiles psicográficos (motivaciones, salarios, edad) y estimación de datos personales de leads usando IA Generativa para optimizar la conversión en UNIR.",
        "Implementación de un pipeline de análisis de llamadas (**Speech-to-Text** + **LLMs**) para extraer información y evaluar la calidad comercial (auditorías).",
        "Desarrollo de **agentes de voz en tiempo real** para contestar llamadas telefónicas.",
        "Diseño de una aplicación de **IA generativa** para recomendación de carreras basada en trayectorias profesionales.",
        "Despliegues Cloud gestionados con **Terraform** en **Microsoft Azure** (FastAPI, microservicios)."
      ]
    },
    acciona: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      summary: "Ingeniero de Software Full Stack especializado en **Robótica** e **Inteligencia Artificial Generativa**. Liderazgo del ciclo completo de desarrollo de **sistemas autónomos** (**ROS**, **Spot**, **ROVs**) y arquitecturas **RAG** avanzadas (**Agentes**, **HITL**, **Grafos de Conocimiento**), integrando soluciones cloud robustas (**GCP**, **Docker**, **Celery**) directamente con las necesidades de negocio.",
      intro1: "Desarrollo de Software en el Digital Hub de Acciona, con foco en el diseño y creación de aplicaciones innovadoras que incorporan tecnologías de vanguardia en soluciones de negocio reales. Contribución tanto en desarrollo backend (rol principal) como en tareas de frontend en diversos proyectos.",
      intro2: "Participación en proyectos desde etapas iniciales: recopilación de requisitos de clientes, análisis de necesidades, diseño de arquitecturas, planificación de recursos y desarrollo del producto final. Seguimiento continuo para alinear el progreso con expectativas y mejora iterativa de soluciones.",
      
      // Robotics section
      roboticsSection: {
        title: "Robótica",
        manipulation: {
            title: "Manipulación y Robots Móviles",
            items: [
                "Programación de brazos robóticos colaborativos (**UR3**, **UR10**) para tareas automatizadas, incluyendo clasificación de residuos usando visión 3D e IA.",
                "Despliegue y programación de un robot móvil **MiR** para navegación autónoma y desinfección en entornos corporativos.",
                "Operación y mantenimiento de **Spot** (Boston Dynamics), desplegándolo en eventos públicos y zonas de riesgo para inspección.",
                "Calibración y configuración de **robots submarinos** (ROVs) para inspección y mantenimiento."
            ]
        },
        navigation: {
            title: "Navegación y Sensores",
            items: [
                "Diagnóstico y reparación de conexiones y sensores en robot **Summit-XL**, habilitando navegación autónoma con **LiDAR 2D**, **GPS-RTK** e **IMU**, integrados mediante **filtros de Kalman** y **AMCL** en **ROS**.",
                "Diseño e implementación de algoritmo de seguimiento de trayectoria para **Summit-XL** para patrullas de seguridad nocturnas y detección de anomalías."
            ]
        },
        interfaces: {
            title: "Interfaces y Robots de Servicio",
            items: [
                "Desarrollo de interfaz web de teleoperación en tiempo real (**WebSockets**, **NGINX**, **Docker**) para control remoto del robot.",
                "Programación de robots de servicio **KettyBot** y **Bellabot** para entrega de alimentos e interacción en cafetería."
            ]
        }
      },

      // Generative AI section
      aiSection: {
        title: "Inteligencia Artificial y Data Science",
        generativeAi: {
          title: "IA Generativa y Agentes",
          items: [
            "Desarrollo de un sistema de ingesta de documentos no estructurados (PDF, Word, Excel, PowerPoint, imágenes) usando **OCR** y **YOLO** para detectar tablas y elementos visuales. El pipeline extrae contenido, genera resúmenes y calcula embeddings para indexado semántico. Orquestado mediante microservicios con **Celery** para integración asíncrona en sistemas **RAG**.",
            "Construcción de un sistema **RAG** basado en agentes con interacción humana (**HITL**), capaz de ejecutar consultas **SQL** y recuperar respuestas predefinidas. El agente aplica estrategias de reformulación y desambiguación, comunicando transparentemente las fuentes de datos.",
            "Diseño y desarrollo de un algoritmo de detección de inconsistencias en grandes bases documentales usando filtrado semántico y grafos jerárquicos. Comparación multinivel para identificar contradicciones. Uso de **Knowledge Graphs** y protocolo **MCP**.",
            "Fine-tuning de **Deepseek** localmente usando **LoRA** y cuantización, y de **Gemini** en **GCP**. Extracción de métricas de sistemas RAG y despliegues en nube."
          ]
        },
        dataScience: {
          title: "Ciencia de Datos",
          items: [
            "Desarrollo de un sistema de modelado predictivo para optimizar estrategias en licitaciones públicas, combinando **Redes Neuronales**, **KNN** y simulaciones de **Monte Carlo**. Integración en interfaz web para ajuste de parámetros.",
            "Entrenamiento de una red neuronal convolucional (**CNN**) con **TensorFlow** para detectar grietas en carreteras, automatizando flujos de inspección."
          ]
        }
      },
      
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
    professionalPath: "Experience",
    academicJourney: "Education",
    technicalEcosystem: "Skills",
    certificationsTitle: "Certifications & Courses",
    
    // Labels (unused as titles now)
    experienceLabel: "01 / Experience",
    educationLabel: "02 / Education",
    skillsLabel: "03 / Skills",
    
    // Experience details
    icai: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      intro1: "Supervision of practical mobile robotics sessions for undergraduate students. Instruction focused on **localization** algorithms (**SLAM**, **AMCL**), **planning**, and **trajectory tracking** on real platforms.",
    },
    syntonize: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      intro1: "Design of **solution architectures**, **deployment**, **stakeholder communication** management, and **monitoring** of applications in **production**.",
      projectTitle: "Generative AI & Cloud",
      projectList: [
        "Development of an application for inferring psychographic profiles (motivations, salaries, age) and estimating personal data of leads using Generative AI to optimize conversion at UNIR.",
        "Implementation of a call analysis pipeline (**Speech-to-Text** + **LLMs**) to extract information and evaluate commercial quality (audits).",
        "Development of **Real-time Voice Agents** for answering phone calls.",
        "Design of a **Generative AI** application for career recommendation based on professional trajectories.",
        "Cloud deployments managed with **Terraform** on **Microsoft Azure** (FastAPI, microservices)."
      ]
    },
    acciona: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      summary: "Full Stack Software Engineer specialized in **Robotics** and **Generative AI**. Leadership of the full development lifecycle of **autonomous systems** (**ROS**, **Spot**, **ROVs**) and advanced **RAG** architectures (**Agents**, **HITL**, **Knowledge Graphs**), integrating robust cloud solutions (**GCP**, **Docker**, **Celery**) directly with business needs.",
      intro1: "Software Development at Acciona's Digital Hub, focusing on the design and creation of innovative applications incorporating cutting-edge technologies into real-world business solutions. Contribution to both backend (main role) and frontend tasks across various projects.",
      intro2: "Involvement in projects from initial stages: requirement gathering, needs analysis, system architecture design, resource planning, and final product development. Continuous monitoring to align progress with expectations and iterative solution improvement.",

      // Robotics section
      roboticsSection: {
        title: "Robotics",
        manipulation: {
            title: "Manipulation & Mobile Robots",
            items: [
                "Programmed collaborative robotic arms (**UR3**, **UR10**) for automated tasks, including the detection and classification of waste using AI-based models and 3D point clouds.",
                "Deployed and programmed a **MiR** mobile robot for autonomous navigation and workspace disinfection within a corporate campus environment.",
                "Operated and maintained Boston Dynamics **Spot**, deploying it in public events and high-risk zones for inspection and monitoring tasks.",
                "Calibration and configuration of **underwater robots** (ROVs) for inspection and maintenance."
            ]
        },
        navigation: {
            title: "Navigation & Sensors",
            items: [
                "Diagnosed and repaired sensor and computer connections on a **Summit-XL** robot, enabling autonomous navigation using **2D LiDAR**, **RTK-GPS**, and **IMU**, integrated via **Kalman filters** and **AMCL** within the **ROS** ecosystem.",
                "Designed and implemented a trajectory-following algorithm for the **Summit-XL** to perform nighttime security patrols, capturing images and triggering alarms upon detecting anomalies."
            ]
        },
        interfaces: {
            title: "Interfaces & Service Robots",
            items: [
                "Developed a real-time web interface to remotely control the **Summit-XL** robot, using **WebSockets** communication, hosted on **Docker**ized **NGINX** servers running on Ubuntu.",
                "Programmed service robots **KettyBot** and **Bellabot** to operate in a café environment, delivering food and interacting with customers autonomously."
            ]
        }
      },

      // Generative AI section
      aiSection: {
        title: "Artificial Intelligence & Data Science Projects",
        generativeAi: {
          title: "Generative AI & Agents",
          items: [
            "Developed an unstructured document ingestion system for PDFs, Word, Excel, PowerPoint files, and images, using **OCR** and **YOLO** for detecting tables and visual elements. The pipeline extracted raw content, generated summaries, and computed embeddings for semantic indexing. All tasks were orchestrated via a microservice architecture with **Celery**-based asynchronous processing, enabling seamless integration into downstream **RAG** systems.",
            "Built an agent-based **RAG** system with Human-in-the-Loop (**HITL**) interaction, capable of executing **SQL** queries against structured databases and retrieving predefined admin-defined responses. The agent applied advanced question reformulation and disambiguation strategies, transparently communicating data sources.",
            "Designed and developed an inconsistency detection algorithm across large document bases using semantic filtering and a graph-based structure. Documents were organized hierarchically, enabling relationship-based reasoning to identify contradictions. Use of **Knowledge Graphs** and **MCP** protocol.",
            "Fine-tuning of **Deepseek** LLM locally using quantization techniques, **LoRA**, etc., and on **GCP** with their **Gemini** model. Extraction of metrics from RAG systems. GCP deployments."
          ]
        },
        dataScience: {
            title: "Data Science",
            items: [
                "Developed a predictive modeling system to optimize bidding strategies in public tenders by forecasting competitors' offers. Combined **Neural Networks**, K-Nearest Neighbors (**KNN**), and **Monte Carlo** simulations. Integrated the model into a Django-based web interface.",
                "Trained a convolutional neural network (**CNN**) using **TensorFlow** to detect cracks in road surfaces. The model was trained on annotated datasets and contributed to the automation of road inspection workflows."
            ]
        }
      },
      
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
