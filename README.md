# 🎟️ Ticket Venuma

![Electron](https://img.shields.io/badge/Electron-47848F?style=flat&logo=electron&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A modern **movie ticket booking desktop application** built using Electron, HTML, CSS, and JavaScript. The app provides a complete movie-theater browsing experience with seat booking, showtime filtering, rating forms, payment UI, and multi-movie support.

---

## ✨ Features

### 🎬 Browse Movies
- **Huge catalog** of movies organized neatly in folders
- Individual movie pages with:
  - Detailed descriptions
  - Interactive rating forms
  - Trailer and media sections
  - Custom styling per movie

### 🏢 Theater Selection
- **Theater listings** for each movie
- **Showtimes** with smart filters:
  - Today
  - Tomorrow
  - Day After

### 🎟️ Ticket Booking Flow
- Interactive seat selection interface
- Multiple showtime options
- Ticket details stored temporarily during session
- Smooth navigation between booking pages

### 💳 Payment Page
- Mock payment interface for demonstration
- **Works completely offline**
- Clean, modern UI design

### 🖥️ Electron-Powered Desktop App
- Native Windows desktop application
- Fast, responsive performance
- Standalone executable (no browser required)

---

## 📂 Project Structure
```
TicketVenumma/
├── home.html                    # Landing page (hero + movie list)
├── index.js                     # Electron main process file
├── style.css                    # Global application styling
├── ALL MOVIES INDEX PAGES/      # Movie-specific pages
│   └── MovieName/
│       ├── index.html           # Movie details page
│       ├── script.js            # Movie page logic
│       ├── styles.css           # Movie-specific styles
│       ├── rating_form.html     # User rating interface
│       └── Threater/
│           ├── index.html       # Theater selection page
│           ├── nw/
│           │   └── book.html    # Seat booking interface
│           └── payments/
│               ├── paymentpage.html  # Payment UI
│               └── scripts.js        # Payment logic
├── assests/
│   ├── main tumhara.jpg         # Hero image
│   └── logo.png                 # Application logo
├── package.json                 # Node.js dependencies
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v14+) and **npm** installed:
```bash
node --version
npm --version
```

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/avkbsurya119/ticket-venuma.git
cd ticket-venuma
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the application**
```bash
npm start
```

The Electron app will launch automatically! 🎉

---

## 📦 Building the Application

To create a standalone `.exe` file for Windows:
```bash
npm run build
```

The built application will be generated in the `home-win32-x64` folder.

> 📝 **Note:** The build folder is included in `.gitignore` to keep the repository size manageable.

---

## 🎮 How to Use

1. **Launch the app** - Run `npm start` to open Ticket Venuma
2. **Browse movies** - Scroll through the movie catalog on the home page
3. **Select a movie** - Click on any movie to view details
4. **Choose theater & showtime** - Pick your preferred theater and time slot
5. **Book seats** - Select available seats from the interactive seating chart
6. **Complete payment** - Proceed to the mock payment page
7. **Enjoy your movie!** 🍿

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Electron** | Desktop application framework |
| **HTML5** | Page structure and content |
| **CSS3** | Styling and animations |
| **JavaScript** | Interactive functionality |
| **Google Maps API** | Theater location display |

---


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Surya Adapa**  
🔗 GitHub: [@avkbsurya119](https://github.com/avkbsurya119)  
📧 Feel free to reach out for collaborations or questions!

---

## 🙏 Acknowledgments

- Built as a college project demonstrating full-stack desktop app development
- Inspired by modern movie booking platforms
- Special thanks to the Electron community for excellent documentation

---

⭐ **Star this repo** if you like the project!
