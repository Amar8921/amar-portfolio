const projects = [
    {
        id: 1,
        featured: true,
        title: "Fee Collection Forecasting Platform",
        category: "MLOps",
        description:
            "An end-to-end MLOps platform for forecasting monthly school fee collections. Integrates automated Prophet model training, data preparation via Apache Airflow, model tracking via MLflow, FastAPI prediction serving, and systems monitoring with Prometheus and Grafana, all containerized via Docker.",
        technologies: [
            "Python",
            "Prophet",
            "FastAPI",
            "Apache Airflow",
            "MLflow",
            "Docker",
            "Prometheus",
            "Grafana"
        ],
        github: "https://github.com/Amar8921/FeeCollectionMonthly",
        demo: "",
        image: "/projects/fee-platform.png"
    },
    {
        id: 2,
        featured: true,
        title: "Real-Time Streaming Pipeline for IoT Analytics",
        category: "Data Engineering",
        description:
            "A scalable streaming ingestion pipeline that processes high-throughput IoT sensor data. Designed to ingest streams, perform real-time aggregations and windowing, and load processed data into PostgreSQL/TimescaleDB. Uses Docker Compose for easy orchestration and Git Actions for CI/CD.",
        technologies: [
            "Python",
            "SQL",
            "PostgreSQL",
            "Docker",
            "Git",
            "GitHub Actions"
        ],
        github: "https://github.com/Amar8921/iot-stream-pipeline",
        demo: "",
        image: "/projects/data-pipeline.png"
    }
];

export default projects;