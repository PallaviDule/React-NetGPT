
# 🎬 React-NetGpt

A Netflix-inspired movie browsing app powered by **TMDB** for real-time movie data and **OpenAI's GPT** for intelligent search queries. Integrated with **Firebase** for secure authentication and hosting.

🚀 **Live Demo**: [react-netgpt.web.app](https://react-netgpt.web.app/) 
(**Important:** The demo link may stop working after **25th August 2025** due to Firebase Dynamic Links shutdown.)
<img width="1688" height="900" alt="image" src="https://github.com/user-attachments/assets/b26c5595-2272-434f-adc3-9a2b17fbe514" />


## Tech Stack

- React (with Redux Toolkit)
- Tailwind CSS for styling
- Firebase for Auth + Hosting
- TMDB for movie data (trailers, search, now playing)
- OpenAI GPT for natural language movie search

## 📦 Installation & Setup

```bash
npm install
npm run start
```

Open your browser at `http://localhost:3000/`

🔧 Project setup steps are documented here: [Setup Guide](./doc/setup.md)

## 📂 Features & Docs

The app is broken down into modular features, each with its own detailed documentation:

| Feature | Description | Docs |
|--------|-------------|------|
| **Firebase Auth & Hosting** | Email/password login, Firebase setup, deployment steps | [Firebase.md](./doc/Firebase.md) |
| **TMDB Integration** | Movie listings, trailers, image management | [tmdbAPIs.md](./doc/tmdbAPIs.md) |
| **GPT Search** | GPT-powered search bar, OpenAI API integration | [Gpt.md](./doc/Gpt.md) |
| **Styling Notes** | Tailwind utilities and layout patterns used | [tailwind-styling.md](./doc/tailwind-styling.md) |

## Current Features

- Browse trending & now-playing movies (via TMDB)
- Watch trailers directly inside the app
- GPT-powered movie search using natural language
- Firebase email/password authentication
- Fully responsive UI with Tailwind

## Future Enhancements

- Add movie bookmarking & favorites
- Enhance GPT results with multi-modal response
- Add dark/light mode toggle
- Pagination support for TMDB queries

## Acknowledgements

- [TMDB API](https://developer.themoviedb.org/)
- [OpenAI](https://platform.openai.com/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
