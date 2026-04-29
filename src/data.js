const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "HR Analytics",
    description: "Analyzing employee data to gain insights into attrition, performance, and workforce trends.",
    image: `${base}hr_analytics.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/ElusiveParadox/HR_analytics",
    live: "https://public.tableau.com/app/profile/aditya.kishore2698/viz/HRAnalyticsDashboard_17774472723050/Dashboard1?publish=yes"
  },
  {
    name: "Hospital Readmission Analysis",
    description: "Analyzing hospital readmission data to identify risk factors and improve patient care strategies.",
    image: `${base}hospital_readmission.png`,
    tags: ["Tableau", "Python", "Data Analytics"],
    github: "https://github.com/ElusiveParadox/hospital_readmission",
    live: "https://public.tableau.com/app/profile/aditya.kishore2698/viz/HospitalReadmissionDashboard_17774465747960/Dashboard1?publish=yes"
  },
  {
    name: "Netflix Analytics",
    description: "Analyzing Netflix content data to identify trends in genres, viewership, and regional popularity.",
    image: `${base}netflix.png`,
    tags: ["Tableau", "Python", "Data Analytics"],
    github: "https://github.com/ElusiveParadox/netflix",
    live: "https://public.tableau.com/app/profile/aditya.kishore2698/viz/NetflixDashboard_17774463008100/Netflix?publish=yes"
  },
  {
    name: "Road Accident Analytics",
    description: "Detailed analysis of road accidents to identify patterns, causes, and areas for potential safety improvements.",
    image: `${base}accident.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/ElusiveParadox/road_accident_analysis",
    live: "https://public.tableau.com/app/profile/aditya.kishore2698/viz/Road_Accident_Analysis_17774471240560/RoadAccident_Dashboard?publish=yes"
  },
  {
    name: "Amazon PrimeVideo Analytics",
    description: "An exploratory data analysis of the Amazon Prime Video catalog, examining content distribution, ratings, and genres.",
    image: `${base}primevideo.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/ElusiveParadox/amazon_prime",
    live: "https://public.tableau.com/app/profile/aditya.kishore2698/viz/AmazonPrimeDashboard_17774459955990/Dashboard1?publish=yes"
  },
  {
    name: "Stock Market Analysis",
    description: "A comprehensive Excel-based real estate market analysis and investment strategy evaluating property trends and profitability.",
    image: `${base}stock_market.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/ElusiveParadox/stock_market",
    live: "https://public.tableau.com/app/profile/aditya.kishore2698/viz/StockMarketAnalysis_Dashboard_17774466960220/Dashboard1?publish=yes"
  },
]

export default projects
