# 🎬 CineSeek

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

CineSeek is a modern movie discovery application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It allows users to browse movies from the **MoviesDatabase API**, view detailed movie information, and search by year or genre.  
The goal is to build a **responsive**, **well-structured** application with robust API integration and strong TypeScript typing.


## 📚 Learning Objectives
- Understand API documentation and integration
- Implement TypeScript interfaces for API responses
- Create reusable React components
- Build responsive layouts with Tailwind CSS
- Manage state for filtering and pagination
- Implement proper error handling and loading states
- Set up Next.js API routes for server-side data fetching
- Manage environment variables for API keys


## 🛠 Technical Stack
- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Data Source**: MoviesDatabase API


## 📦 Development Requirements
- Node.js **v16+**
- npm or yarn
- Git for version control


## 📂 Project Structure
```plaintext
alx-movie-app/
├── components/
│   ├── commons/                  # Reusable UI elements
│   │   ├── Button.tsx             # Styled button component
│   │   ├── Loading.tsx            # Loading spinner component
│   │   └── MovieCard.tsx          # Movie card display
│   └── layouts/                   # Page layout components
│       ├── Footer.tsx              # App footer
│       ├── Header.tsx              # App header/navigation
│       └── Layout.tsx              # Main layout wrapper
├── interfaces/                    # TypeScript interfaces
│   └── index.ts
├── pages/
│   ├── api/
│   │   └── fetch-movies.ts         # API route for fetching movies
│   ├── movies/
│   │   └── index.tsx               # Movies listing page
│   ├── _app.tsx                    # App entry point
│   └── index.tsx                   # Home page
├── public/                         # Static assets
├── styles/
│   └── globals.css                 # Global styles
├── .env.local                      # Environment variables
├── .eslintrc.json                  # ESLint config
├── .gitignore                      # Ignored files
├── next.config.js                  # Next.js config
├── package.json
└── tsconfig.json                   # TypeScript config
````


## ✅ Best Practices

### Code Quality

* TypeScript interfaces for all props and API responses
* Clear component-based architecture
* Proper error handling for API requests
* Loading states for smooth UX
* Environment variables for sensitive keys

### Performance

* Client-side navigation with Next.js router
* Optimized API calls with pagination
* Responsive design via Tailwind CSS
* Image optimization using Next.js `Image` component

### Maintainability

* Consistent code formatting
* Logical folder structure
* Reusable components
* Comprehensive typing and documentation


## 🌐 API Overview

The **MoviesDatabase API** provides a large catalog of movies with support for filtering, searching, and pagination.
Key features include:

* Fetching movie data by year, genre, or keywords
* Detailed movie information (title, release year, genres, poster)
* Pagination support for browsing
* API key authentication for secure access


## 📌 API Version

**v1**


## 🔗 Available Endpoints

* **`/titles`** – Fetch a list of movies (supports year, genre, and pagination filters)
* **`/titles/{id}`** – Fetch details for a specific movie
* **`/genres`** – Retrieve a list of all available genres


## 📄 Request and Response Format

### Example Request

```http
GET /titles?year=2020&genre=Action&page=1
Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

### Example Response

```json
{
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Example Movie" },
      "releaseYear": { "year": 2020 },
      "primaryImage": { "url": "https://image.url/poster.jpg" },
      "genres": { "genres": [{ "text": "Action" }] }
    }
  ],
  "page": 1,
  "total_pages": 50
}
```


## 🔑 Authentication

* Uses **API Key** authentication
* Pass API key via request headers:

  * `X-RapidAPI-Key: YOUR_API_KEY`
  * `X-RapidAPI-Host: moviesdatabase.p.rapidapi.com`
* API keys are stored in `.env.local` to prevent exposure


## ⚠️ Error Handling

* **400 Bad Request** – Invalid parameters or missing required fields
* **401 Unauthorized** – Missing or invalid API key
* **404 Not Found** – Resource does not exist
* **429 Too Many Requests** – Rate limit exceeded
* **500 Server Error** – API server issues

**Implementation in Code:**

* Wrap API calls in `try/catch`
* Check `response.ok` before processing data
* Use loading and error UI states


## 📊 Usage Limits and Best Practices

* **Rate Limits**: API has request caps per minute/hour (see provider’s docs)
* **Pagination**: Use `page` parameter to fetch results gradually
* **Caching**: Store frequent queries client-side to reduce API calls
* **Error Boundaries**: Gracefully handle failures without breaking the app
* **Secure Keys**: Always keep API keys in environment variables


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Yuchels/alx-movie-app.git
cd alx-movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file:

```
MOVIES_API_KEY=your_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.
