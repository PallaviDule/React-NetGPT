# 🎬 TMDB (The Movie Database) Integration Guide

This project uses [TMDB](https://www.themoviedb.org/) for fetching movie-related data such as trailers, posters, and now-playing content.

## Getting Started with TMDB

### 1. Create an Account
- Sign up or log in at [themoviedb.org](https://www.themoviedb.org/).

### 2. Generate API Key
- Navigate to:  `Profile Icon → Settings → API`  
  or directly visit: [API Settings](https://www.themoviedb.org/settings/api)
- You will need to:
  - Fill in a short form to **register your app/project**.
  - After submitting, you’ll receive:
    - ✅ **API Key (v3 auth)**
    - ✅ **API Read Access Token (v4 auth)**

> 🔐 Keep your API key private and do not expose it publicly.

## API Endpoints Used

TMDB provides official documentation for each endpoint. We used the following:

### 1. Now Playing Movies  
Used to show a list of movies currently playing in theaters.  
📘 [Now Playing API](https://developer.themoviedb.org/reference/movie-now-playing-list)

### 2. Movie Trailers  
Fetch video content such as YouTube trailers. Used on the **Browse** page.  
📘 [Movie Videos API](https://developer.themoviedb.org/reference/movie-videos)

### 3. Image Configuration  
Details about how to fetch and format poster/backdrop URLs using image base paths.  
📘 [Image Basics](https://developer.themoviedb.org/docs/image-basics)

### 4. Search for Movies  
Used in the search functionality of the app.  
📘 [Search Movie API](https://developer.themoviedb.org/reference/search-movie)


## 🔗 Helpful Links

- 📘 [TMDB Docs Home](https://developer.themoviedb.org/reference/intro/getting-started)
- ⚙️ [TMDB API Settings](https://www.themoviedb.org/settings/api)

## ✅ Pro Tips

- Store API keys in a `.env` file and use `process.env.REACT_APP_TMDB_API_KEY` to reference it in your app.
- Image URLs should be built using TMDB's base URL + poster/backdrop path. Refer to the **Image Basics** doc for proper formatting.
