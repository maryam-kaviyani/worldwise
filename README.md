# WorldWise – Travel Tracking App

WorldWise is a travel tracking application built with React. It allows users to keep track of the cities and countries they have visited, view their locations on an interactive map, and save their travel experiences.

## Features

- Interactive map powered by React Leaflet and Leaflet.
- Add and remove visited cities.
- Select locations on the map.
- View city details and travel dates.
- Browse saved cities and countries.
- Client-side routing with React Router.
- Protected routes with a demo authentication flow.
- State management using Context API and useReducer.
- Data persistence using JSON Server in development and localStorage in production.

## Tech Stack

- React
- Vite
- React Router DOM
- Context API and useReducer
- React Leaflet and Leaflet
- JSON Server
- CSS
- Browser localStorage API

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/maryam-kaviyani/worldwise.git
```

Navigate to the project directory:

```bash
cd worldwise
```

Install dependencies:

```bash
npm install
```

### Run the Application

Start the JSON Server in a separate terminal:

```bash
npm run server
```

Start the Vite development server in another terminal:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

**Note:** Both the JSON Server and Vite development server must be running for the development version to work correctly.

## Data Storage

WorldWise uses different data storage methods depending on the environment.

### Development

- City data is fetched from and saved to the local JSON Server API.
- JSON Server uses `data/cities.json` as its database.
- The city list starts empty.
- Both the JSON Server and Vite development server must be running.

### Production

In production deployments (Vercel and GitHub Pages):

- City data is stored in the browser's localStorage.
- The application starts with an empty city list on the first visit.
- Added and deleted cities remain saved after refreshing the page.
- Each browser and deployment domain has its own localStorage data.

**Important:** Data is stored locally in the browser, not in a shared database. Therefore, cities saved on Vercel are not automatically available on GitHub Pages or on another browser or device. Clearing the browser's site data may also remove saved cities.

## Network Requirements

The application uses external map tile services to display the interactive map.

Depending on your network or geographic location, a VPN connection may be required to load the map correctly.

**Important:**

- The JSON Server API runs locally and does not require a VPN.
- A stable internet connection is required to load external map tiles.
- If the map does not load, check your internet connection and VPN availability.

## Build and Preview

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

Open the preview URL displayed in your terminal to test the production version.

## Authentication

This project uses a demo authentication flow for learning purposes. It is not intended for production authentication or secure user management.

## Project Purpose

This project was developed as part of my learning journey in React, with a focus on component-based development, state management, routing, API integration, interactive maps, and data persistence.

## Screenshots

### Home Page

![WorldWise Home Page](public/screenshots/home.png)

### Cities List

![WorldWise Cities](public/screenshots/cities.png)

### Countries List

![WorldWise Countries](public/screenshots/countries.png)

### City Details

![WorldWise City Details](public/screenshots/city-details.png)

### Add City

![WorldWise Add City](public/screenshots/add-city.png)
