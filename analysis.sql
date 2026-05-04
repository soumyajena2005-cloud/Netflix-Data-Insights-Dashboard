-- Netflix Data Analysis Queries

-- 1. Total content count (Movies vs TV Shows)
SELECT 
    type, 
    COUNT(*) as total_count
FROM netflix_titles
GROUP BY type;

-- 2. Content added per year
SELECT 
    release_year, 
    COUNT(*) as titles_added
FROM netflix_titles
GROUP BY release_year
ORDER BY release_year DESC;

-- 3. Top 10 countries producing content
SELECT 
    country, 
    COUNT(*) as total_titles
FROM netflix_titles
WHERE country IS NOT NULL
GROUP BY country
ORDER BY total_titles DESC
LIMIT 10;

-- 4. Most frequent genres (Top 15)
SELECT 
    listed_in as genre, 
    COUNT(*) as title_count
FROM netflix_titles
GROUP BY listed_in
ORDER BY title_count DESC
LIMIT 15;

-- 5. Average duration of movies (in minutes)
SELECT 
    AVG(CAST(SPLIT_PART(duration, ' ', 1) AS INTEGER)) as avg_movie_duration
FROM netflix_titles
WHERE type = 'Movie';
