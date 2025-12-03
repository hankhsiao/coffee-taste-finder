# Coffee Taste Finder

A systematic tool to discover coffee beans by taste notes and document coffee shops for future visits.

## Project Goal

To find coffee beans by taste notes and maintain a curated collection of coffee shops through an intuitive, visually-driven interface.

## Requirements

### Overall Design Principles
- **Responsive Design**: Mobile and desktop optimized
- **Theme Support**: Dark mode and light mode
- **Design Philosophy**: 
  - Intuitive interaction with clear and concise information
  - Shibui color pattern: muted tones with Moss Green and Earthy Brown as key colors
  - Simple, professional, welcoming typography
  - Minimal color usage for page architecture (content focuses on taste colors)

### Common Page Structure
- **Header**: Navigation menu to switch between different tools
- **Footer**: Copyright and social information
- **Entity Pages** (Coffee shops, coffee beans):
  - Image area with swipeable gallery support
  - Simple, clear feature icons
  - Concise descriptions
- **List Views**: 
  - Two columns on mobile, three columns on desktop
  - Square image areas with descriptions below each item

### Pages

#### Main Page
Tool to find coffee beans by tastes:
- Pick from flavor wheel
- Pick from similar coffee beans
- Intuitive discovery experience

#### Coffee Bean Page
- Image with taste color background
- Detailed coffee information
- Social signals and engagement

#### Coffee Shop Page
- Key images with swipeable gallery
- Feature icons
- Basic location and information

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will auto-update as you edit files in `app/` directory.

### Build & Production

```bash
npm run build
npm start
```

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- TypeScript - Type safety
- Tailwind CSS - Styling (responsive, dark mode support)

## Project Structure

```
app/
├── page.tsx              # Main landing page
├── coffee-bean/[id]/     # Coffee bean detail pages
├── coffee-shop/[id]/     # Coffee shop detail pages
├── components/           # Reusable React components
└── data/                 # Data files (coffee beans, shops, flavors)
```
