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
- Fetch and store city data using a JSON Server API.

## Tech Stack

- React
- Vite
- React Router DOM
- Context API and useReducer
- React Leaflet and Leaflet
- JSON Server
- CSS

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

    git clone https://github.com/maryam-kaviyani/worldwise.git

Navigate to the project directory:

    cd worldwise

Install dependencies:

    npm install

### Run the Application

Start the JSON Server in a separate terminal:

    npm run server

Start the Vite development server in another terminal:

    npm run dev

Open the local URL displayed in your terminal to view the application.

**Note:** Both the JSON Server and Vite development server must be running for the application to work correctly.

## Network Requirements

The application uses external map tile services to display the interactive map.

Depending on your network or geographic location, a VPN connection may be required to load the map correctly.

**Important:**

- The JSON Server API runs locally and does not require a VPN.
- Adding and saving cities uses the local JSON Server.
- A stable internet connection is required to load external map tiles.
- If the map does not load, check your internet connection and VPN availability.

## Build

To create a production build:

    npm run build

## Authentication

This project uses a demo authentication flow for learning purposes. It is not intended for production authentication or secure user management.

## Project Purpose

This project was developed as part of my learning journey in React, with a focus on component-based development, state management, routing, API integration, and interactive maps.

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
