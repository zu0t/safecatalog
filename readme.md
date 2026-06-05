# 🛡️ SafeCatalog

> A curated, community-driven catalog of verified applications, modifications, and cracked software for Android, Windows, and Linux. 

SafeCatalog helps users navigate the often dangerous landscape of third-party software by providing a clean, searchable directory with explicit safety ratings.

🌐 **Live Website: http://safecatalog.one**

---

## ✨ Features

* **100% Client-Side:** No backend, no databases, no tracking. Fast, secure, and hosted entirely on GitHub Pages.
* **Safety Ratings:** Every app is labeled as 🟢 Safe, 🟡 Untested, or 🔴 Dangerous.
* **Advanced Filtering:** Instantly filter by Platform (Android, Windows, Linux) and Type (Original, Modded, Cracked).
* **Dark/Light Mode:** First-class dark mode support (saved to local storage).
* **Search Engine:** Instant, as-you-type fuzzy searching across apps and descriptions.

## 🛠️ Tech Stack

SafeCatalog is built to be as simple and maintainable as possible:
* **HTML5**
* **Vanilla JavaScript** (ES6)
* **Tailwind CSS** (via CDN for rapid styling)
* **Fonts:** JetBrains Mono & DM Sans (via Google Fonts)

---

## 📂 Project Structure

The codebase is split into modular files for easy maintenance:

* `index.html` — The main structure and layout.
* `style.css` — Custom CSS, animations, and Tailwind overrides.
* `data.js` — The "database". Contains all application entries in a simple array.
* `app.js` — The logic for rendering cards, filtering, searching, and theme toggling.
* `privacy.html` / `tos.html` — Legal and privacy documentation.

---

## 🚀 Local Deployment

To run this project locally, you don't need Node.js, npm, or any build tools. 
1. Clone the repository.
2. Open `index.html` in any modern web browser.
*(Note: Some browsers block local file fetching due to CORS, but since all data is in a `.js` file instead of `.json`, it should run perfectly even from the `file://` protocol).*

## ⚖️ Disclaimer

**SafeCatalog is an informational reference catalog only.** We do not host, distribute, or endorse any of the software listed. Modifying software or using third-party patches carries inherent risks, including malware, system instability, and account bans. 

**Always conduct your own research and use the information provided at your own risk.** Please refer to our [Terms of Service](tos.html) for more details.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
