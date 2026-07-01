import feeForecastImage from "../assets/fee_forecast_platform.png";

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
        image: feeForecastImage
    },
];

export default projects;