# Netflix Data Insights: Trends & Patterns

This project provides a comprehensive end-to-end analysis of the Netflix dataset, covering everything from raw data cleaning to interactive visualization.

## Project Structure

- `cleaning.ipynb`: Python notebook containing the data cleaning and feature engineering logic.
- `analysis.sql`: SQL scripts for deep-dive exploratory data analysis.
- `Netflix_Dashboard.pbix`: Power BI dashboard file (Note: View the interactive version in the web app).
- `cleaned_netflix_data.csv`: The final dataset used for analysis.

## Key Stages

### 1. Data Cleaning
- Handled 2,000+ missing values in `director` and `cast` columns.
- Standardized date formats.
- Engineered features: `Year Added`, `Month Added`, and `Duration Category`.

### 2. SQL Analysis
- Analyzed content distribution by type and country.
- Identified growth patterns over the last decade.
- Aggregated genre performance metrics.

### 3. Power BI Dashboard
- KPI overview for executive summary.
- Global content map.
- Rating and Genre breakdown.

## Insights Summary
- US and India produce ~45% of total content.
- 2019 was the peak year for new content additions.
- Mature content (TV-MA) dominates the library composition.
