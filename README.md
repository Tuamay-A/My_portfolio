# 🚀 Personal Portfolio Website

A modern, responsive full-stack portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with a clean design, smooth animations, and a fully functional contact form backed by Node.js and PostgreSQL.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://tuamay-assefa.vercel.app/)

## ✨ Features

- **Responsive Design** — Fully optimized for mobile, tablet, and desktop screens
- **Dark/Light Mode** — Theme toggle with localStorage persistence
- **Smooth Animations** — AOS (Animate On Scroll) effects throughout
- **Portfolio Filtering** — Isotope.js for dynamic project filtering (Web Dev, Mobile App, AI/ML)
- **Working Contact Form** — Full backend integration with PostgreSQL database
- **Interactive UI** — Typed.js animations, lightbox gallery, progress bars
- **Modern Stack** — Built with HTML5, CSS3, Bootstrap 5, Node.js, Express, PostgreSQL

## 🖼️ Sections

- **Hero** — Introduction with animated role titles
- **About** — Professional background and skills overview
- **Skills** — Categorized technical skills with animated progress bars
- **Portfolio** — 6 real projects with live demos and GitHub links
- **Contact** — Functional form with email validation and database storage

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5 (responsive grid system)
- AOS (Animate On Scroll)
- Typed.js (text animations)
- Isotope.js (portfolio filtering)
- GLightbox (image lightbox)
- Swiper (carousel slider)

### Backend
- Node.js
- Express.js
- PostgreSQL (with `pg` driver)
- CORS
- dotenv (environment variables)

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: PostgreSQL (hosted on Render)

## 📂 Project Structure

```
portfolio/
├── client/                 # Frontend files
│   ├── assets/
│   │   ├── css/           # Stylesheets
│   │   ├── js/            # JavaScript files
│   │   ├── img/           # Images (profile, portfolio, icons)
│   │   └── vendor/        # Third-party libraries
│   ├── index.html         # Main portfolio page
│   ├── portfolio-details.html
│   └── service-details.html
│
├── server/                # Backend files
│   ├── db.js              # PostgreSQL connection & table setup
│   ├── server.js          # Express server & routes
│   ├── package.json       # Node.js dependencies
│   └── .env               # Environment variables (not in repo)
│
└── README.md
```

## 🚀 Performance

- Lazy loading for images
- Optimized vendor libraries
- Minified CSS/JS (in production)
- Efficient PostgreSQL queries
- CORS restricted to frontend domain

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, please give it a star!**

Built with ❤️ by Tuamay Assefa | Evangadi Tech Aug 2026 Batch
