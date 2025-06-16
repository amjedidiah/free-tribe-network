# Free Tribe Network

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)
[![WordPress](https://img.shields.io/badge/WordPress-CMS-blue?logo=wordpress)](https://wordpress.org/)

A web platform for a non-profit organization focused on public health initiatives and social justice advocacy.

## Table of Content

- [Project Info](#project-info)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Resources](#resources)
- [License](#license)

## Project Info

### Project Overview

Digital platform enabling Free Tribe Network to:

- Showcase public health initiatives (STAR Project, Boost Camp, Helpline)
- Manage multilingual content (English primary language)
- Present research findings and project reports
- Facilitate volunteer engagement and donations
- Share organizational resources and updates

### Why This Project?

- Create a modern digital presence for health advocacy efforts
- Centralize community resources and program information
- Enable efficient content management through CMS integration
- Support multi-language accessibility for diverse communities

## Getting Started

### Prerequisites

- Node.js (LTS version)
- Yarn package manager
- Docker (for WordPress setup)

### Installation

```bash
git clone https://github.com/amjedidiah/free-tribe-network.git
cd free-tribe-network
yarn install
```

### Environment Setup

Create `.env.local` file with required environment variables (refer to .env.example)

### WordPress Docker Setup

1. Start the Docker containers

   ```bash
      cd wordpress
      docker-compose up -d
   ```

2. The env variable `NEXT_PUBLIC_WORDPRESS_ENDPOINT` would be the url to view the WordPress site.

3. To view the WordPress admin dashboard, login at `<NEXT_PUBLIC_WORDPRESS_ENDPOINT>/wp-admin`

### Running the Next.js App

1. Open <http://localhost:3000> with your browser to see the result.

## Project Structure

```bash
free-tribe-network/
├── src/                 # Application source code
│   ├── app/             # Next.js app router
│   ├── components/      # Reusable UI components
│   ├── locales/         # Internationalization files
│   └── lib/             # Utilities & helpers
├── public/              # Static assets
├── wordpress/           # Docker setup for WordPress
└── tailwind.config.js   # Design system configuration
```

## Tech Stack

### Core Technologies

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + Custom Design System
- Data Fetching: GraphQL (Apollo Client)
- CMS: WordPress (Headless)
- Containerization: Docker

### Key Integrations

- Cloudinary (Media Management)
- Flutterwave (Payment Processing)
- Algolia (Search Functionality)
- Internationalization: Next-Intl (i18n)

## Resources

- [Figma Design](https://www.figma.com/design/3PAojEhbxDFw6fo9XNCeTW/Free-Tribe-Network-Website?node-id=800-5046)
- [Google Drive Folder](https://drive.google.com/drive/folders/1SyyuOufjaArZUu9Kqb1Ul3q_PErj7HVi) - Organizational documents

## License

Proprietary software. All rights reserved by Free Tribe Network.

> This project was bootstrapped with [Create Next App](https://nextjs.org/docs/pages/api-reference/create-next-app).
