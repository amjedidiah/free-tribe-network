# Free Tribe Network

A web platform for a non-profit organization focused on public health initiatives and social justice advocacy.

## Table of Content

- [Project Info](#project-info)
- [Quick Start](#quick-start)
- [Resources](#resources)
- [License](#license)
- [Tech Stack](#tech-stack)
- [Create Next App](#create-next-app)

## Project Info

### Project Overview

Digital platform enabling Free Tribe Network to:

- Showcase public health initiatives (STAR Project, Boost Camp, Helpline)
- Manage multilingual content (English primary language)
- Present research findings and project reports
- Facilitate volunteer engagement and donations
- Share organizational resources and updates

### Why This Project?

- To create a modern digital presence for health advocacy efforts
- To centralize community resources and program information
- To enable efficient content management through CMS integration
- To support multi-language accessibility for diverse communities

### App Architecture

- Next.js 14 App Router architecture
- Tailwind CSS with custom design system
- Internationalization (i18n) support
- Hybrid static & server-side rendering
- Cloudinary media management
- Apollo Client for GraphQL integration with WordPress

## Quick Start

### Installation

```bash
git clone https://github.com/amjedidiah/free-tribe-network.git
cd free-tribe-network
yarn install
yarn dev
```

### Environment Setup

Create `.env.local` file with required environment variables (refer to .env.example)

### WordPress Docker Setup

1. Start the Docker containers

   ```bash
      cd wordpress
      docker-compose up -d
   ```

2. Run this only once to Setup WordPress

   ```bash
         chmod +x setup-wordpress.sh ./setup-wordpress.sh
   ```

## Resources

- [Figma Design](https://www.figma.com/design/3PAojEhbxDFw6fo9XNCeTW/Free-Tribe-Network-Website?node-id=800-5046)
- [Google Drive Folder](https://drive.google.com/drive/folders/1SyyuOufjaArZUu9Kqb1Ul3q_PErj7HVi) - Organizational documents and resources
- [Locale Files](src/locales) - Internationalization content
- [Component Library](src/components) - Reusable UI components

## License

Proprietary software. All rights reserved by Free Tribe Network.

## Tech Stack

### Core Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- GraphQL (Apollo Client)
- WordPress
- Docker

### Key Integrations

- Cloudinary (Media Management)
- Flutterwave (Payments)
- Algolia (Search)
- Next-Intl (i18n)

## Create Next App

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/pages/api-reference/create-next-app).
