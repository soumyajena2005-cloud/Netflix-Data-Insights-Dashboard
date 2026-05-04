# %% [markdown]
# # Netflix Data Cleaning Project
# This notebook handles the preprocessing of the raw Netflix dataset.

# %%
import pandas as pd
import numpy as np

# Load dataset
df = pd.read_csv('netflix_titles.csv')

# %% [markdown]
# ### 1. Handling Missing Values
# We replace null values in critical columns with placeholders.

# %%
df['director'] = df['director'].fillna('Unknown director')
df['cast'] = df['cast'].fillna('No cast info')
df['country'] = df['country'].fillna(df['country'].mode()[0])

# Drop titles with missing 'date_added' or 'rating' (minimal losses)
df.dropna(subset=['date_added', 'rating'], inplace=True)

# %% [markdown]
# ### 2. Correcting Data Types
# Convert 'date_added' to datetime objects.

# %%
df['date_added'] = pd.to_datetime(df['date_added'].str.strip())

# %% [markdown]
# ### 3. Feature Engineering
# Extract specific time components and categorize duration.

# %%
df['year_added'] = df['date_added'].dt.year
df['month_added'] = df['date_added'].dt.month_name()

def categorize_duration(row):
    if row['type'] == 'TV Show':
        return row['duration']
    try:
        minutes = int(row['duration'].split(' ')[0])
        if minutes < 60: return 'Short'
        if minutes < 120: return 'Medium'
        return 'Feature Length'
    except:
        return 'Unknown'

df['duration_category'] = df.apply(categorize_duration, axis=1)

# %% [markdown]
# ### 4. Export Cleaned Data

# %%
df.to_csv('cleaned_netflix_data.csv', index=False)
print("Data Cleaning Complete. Cleaned data saved.")
