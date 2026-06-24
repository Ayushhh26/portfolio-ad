const projects = [
  {
    name: "FinnTrack",
    image: "/finntrack.png",
    link: "https://github.com/Ayushhh26/FinnTrack",
    tags: ["Next.Js", "Firebase", "CSS"],
    categories: ["Full Stack"],
    featured: true,
    description:
      "A responsive web application for personal financial management, enabling users to log, categorize, and track their expenses in real time. Designed an intuitive user interface with dynamic charts and visualizations to provide insights into spending patterns.",
  },
  {
    name: "FlameBot - Grid Escape",
    image: "/FlameBot.png",
    link: "https://github.com/Ayushhh26/FlameBot-Grid-Escape",
    tags: ["Python", "Tkinter", "OOP", "Algorithms"],
    categories: ["Systems"],
    description:
      "Designed an AI-driven bot navigation system for a dynamic 40x40 grid with evolving fire spread. Simulated four bot strategies, achieving an 85% success rate across 1000+ trials. Integrated a fire propagation model with adjustable flammability, reducing failure rates by 20%. Optimized real-time pathfinding using probabilistic modeling, cutting navigation time by 25% while enhancing escape efficiency.",
  },
  {
    name: "ForgeryGuard",
    image: "/Forgery.png",
    link: "",
    tags: ["CNN", "TensorFlow", "Gradio"],
    categories: ["AI / NLP"],
    description:
      "A custom CNN model build to detect forged images achieving 91.32% accuracy using ELA technique.",
  },
  {
    name: "Twitter Hotspot Analysis",
    image: "/Hotspot.png",
    link: "https://github.com/Ayushhh26/Traffic-Hotspot-Analysis",
    tags: ["Python", "Data Analysis", "K-Means"],
    categories: ["Data / Cloud"],
    description:
      "Extracted the data from Twitter's Official Handle of Mumbai Traffic Police and used NER to extract all the locations in Mumbai and plotted clusters based on traffic level using K-Means algorithm",
  },
  {
    name: "Distributed Billing Aggregation",
    image:
      "https://opengraph.githubassets.com/portfolio/Ayushhh26/Distributed-Billing-Aggregation-A-MapReduce-Approach",
    link: "https://github.com/Ayushhh26/Distributed-Billing-Aggregation-A-MapReduce-Approach",
    tags: ["PySpark", "Docker", "Kubernetes", "AWS", "MapReduce"],
    categories: ["Data / Cloud", "Systems"],
    featured: true,
    description:
      "Built a distributed billing aggregation pipeline that prices API logs per user with Spark MapReduce. Includes a Python baseline, Dockerized Spark cluster setup, Kubernetes/AWS submit scripts, S3/local input support, configurable billing rates, and pytest coverage for map/reduce behavior.",
  },
  {
    name: "Community QA Moderation",
    image:
      "https://opengraph.githubassets.com/portfolio/Ayushhh26/Community-QA-Moderation",
    link: "https://github.com/Ayushhh26/Community-QA-Moderation",
    tags: ["NLP", "BERT", "XGBoost", "SHAP", "T5"],
    categories: ["AI / NLP"],
    description:
      "Developed an NLP moderation workflow for community Q&A quality classification. The notebook combines BERT embeddings, NER-derived features, TF-IDF signals, XGBoost classifiers, SHAP explainability, keyword extraction, and FLAN-T5 rephrasing for low-quality posts.",
  },
  {
    name: "AWS Lex Lambda Job Bot",
    image:
      "https://opengraph.githubassets.com/portfolio/Ayushhh26/aws-lex-lambda-job-bot",
    link: "https://github.com/Ayushhh26/aws-lex-lambda-job-bot",
    tags: ["AWS Lex", "Lambda", "Python", "BeautifulSoup"],
    categories: ["AI / NLP", "Data / Cloud"],
    description:
      "Created an Amazon Lex chatbot backed by a Python Lambda function that collects campus and keyword slots, scrapes Rutgers job postings with BeautifulSoup, and returns matching roles through structured Lex session responses with graceful error handling.",
  },
  {
    name: "Horizon Techfolio",
    image: "/horizon.png",
    link: "https://github.com/Ayushhh26/Horizon-Techfolio",
    tags: ["Node.js", "Express", "MongoDB", "Trading", "Gemini"],
    categories: ["Full Stack", "Data / Cloud"],
    featured: true,
    description:
      "Built a stock portfolio and paper-trading platform with wallet management, buy/sell transactions, curated portfolios, technical indicators, strategy signals, and a backtesting engine. The backend integrates market data services and Gemini-powered investment insights.",
  },
  {
    name: "Cloud Resource Inventory Query Engine",
    image:
      "https://opengraph.githubassets.com/portfolio/Ayushhh26/cloud-resource-inventory-query-engine",
    link: "https://github.com/Ayushhh26/cloud-resource-inventory-query-engine",
    tags: ["C++17", "CMake", "JSON", "Indexing"],
    categories: ["Data / Cloud", "Systems"],
    description:
      "Implemented a C++17 command-line inventory engine that loads cloud resources from JSON, builds indexes by type, location, tag, and dependency relationships, and supports fast interactive queries for filters, dependency graphs, counts, stats, and timing.",
  },
  {
    name: "Prompt2Flow",
    image:
      "https://opengraph.githubassets.com/portfolio/Ayushhh26/Prompt2Flow",
    link: "https://github.com/Ayushhh26/Prompt2Flow",
    tags: ["React", "React Flow", "Express", "OpenAI"],
    categories: ["AI / NLP", "Full Stack"],
    description:
      "Built a prompt-to-diagram tool that converts text or code into React Flow node and edge structures. The app pairs an interactive canvas with an Express API layer that calls OpenAI, validates diagram JSON, rate-limits requests, and handles upstream timeouts.",
  },
  {
    name: "RunQ",
    image: "https://opengraph.githubassets.com/portfolio/Ayushhh26/RunQ",
    link: "https://github.com/Ayushhh26/RunQ",
    tags: ["FastAPI", "Redis", "PostgreSQL", "Docker", "NLP"],
    categories: ["AI / NLP", "Data / Cloud", "Systems"],
    featured: true,
    description:
      "Designed an asynchronous document-processing queue with a FastAPI job API, Redis-backed worker pipeline, PostgreSQL job state, retries, stale-job recovery, dead-letter queue handling, and NLP processors for metadata extraction, classification, and summarization.",
  },
  {
    name: "DevLoop",
    image: "https://opengraph.githubassets.com/portfolio/Ayushhh26/DevLoop",
    link: "https://github.com/Ayushhh26/DevLoop",
    tags: ["Streamlit", "LangChain", "ChromaDB", "Tree-sitter", "RAG"],
    categories: ["AI / NLP", "Systems"],
    featured: true,
    description:
      "Built a multi-agent repo analysis assistant that ingests codebases into ChromaDB, extracts AST-aware chunks across languages with tree-sitter, combines semantic and keyword retrieval, and runs a coder/critic loop with query sanitization and LLM provider support.",
  },
  {
    name: "ChurnGuard",
    image:
      "https://opengraph.githubassets.com/portfolio/Ayushhh26/ChurnGuard",
    link: "https://github.com/Ayushhh26/ChurnGuard",
    tags: ["Databricks", "PySpark", "dbt", "DuckDB", "Streamlit"],
    categories: ["Data / Cloud"],
    featured: true,
    description:
      "Created a customer retention analytics pipeline using Bronze/Silver/Gold Delta layers in Databricks, dbt and DuckDB modeling, Snowflake setup scripts, and a Streamlit dashboard for churn KPIs, revenue loss, contract segments, tenure, and payment-method drilldowns.",
  },
  {
    name: "flowboard",
    image: "/flowboard.png",
    link: "https://github.com/Ayushhh26/flowboard",
    tags: ["Next.js", "Prisma", "Supabase", "dnd-kit", "AI"],
    categories: ["Full Stack", "Realtime"],
    featured: true,
    description:
      "Built a collaborative Kanban board with Supabase auth/realtime, Prisma/PostgreSQL models for boards, members, invitations, labels, and cards, drag-and-drop ordering with fractional indexes, role-aware sharing, filters, API tokens, and AI-powered smart card creation.",
  },
  {
    name: "relay",
    image: "/relay.png",
    link: "https://github.com/Ayushhh26/relay",
    tags: ["React", "SpacetimeDB", "WebRTC", "TypeScript", "Pyodide"],
    categories: ["Full Stack", "Realtime", "Systems"],
    featured: true,
    description:
      "Built a realtime collaborative coding and interview room with SpacetimeDB reducers, synced documents, participant roles, heartbeat presence, WebRTC video signaling, interview question selection, browser-based JavaScript/Python execution, and an assist API for guided coding help.",
  },
];

export default projects;
