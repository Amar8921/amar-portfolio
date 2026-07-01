import feeForecastImage from "../assets/fee_forecast_platform.png";

const projects = [
    {
        id: 1,
        featured: true,
        title: "Fee Collection Forecasting Platform",
        category: "MLOps",
        description:
            "An end-to-end event-driven MLOps platform for forecasting monthly school fee collections. Integrates real-time payment ingestion via Apache Kafka, automated incremental aggregation & data prep via Apache Airflow, model tracking & registry via MLflow, FastAPI prediction serving, and systems monitoring with Prometheus & Grafana, all containerized in a single Docker stack.",
        technologies: [
            "Python",
            "Prophet",
            "FastAPI",
            "Apache Airflow",
            "MLflow",
            "Apache Kafka",
            "Docker",
            "Prometheus",
            "Grafana"
        ],
        github: "https://github.com/Amar8921/FeeforecastMonthlyMlops",
        demo: "",
        image: feeForecastImage
    },
];

export default projects;