# Chidozie Hamilton Green - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and beautiful UI/UX
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Smooth animations with Framer Motion
- ⚡ Fast and optimized performance
- 📧 Contact form (ready for backend integration)
- 📝 Blog section
- 💼 Resume/CV section
- 🎯 Smooth scrolling navigation

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section
│   ├── Blog.tsx           # Blog posts section
│   ├── Contact.tsx        # Contact form and info
│   ├── Hero.tsx           # Hero/landing section
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   ├── Resume.tsx         # Resume/CV section
│   ├── Skills.tsx         # Skills and technologies
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── App.tsx                # Main app component
├── main.tsx              # Entry point
├── index.css             # Global styles and theme
└── App.css               # App-specific styles
```

## Customization

### Adding Your Profile Photo

1. Place your profile photo in the `public` folder as `profile.jpg`
2. The Hero component will automatically display it

### Adding Your Resume

1. Export your resume as a PDF
2. Place it in the `public` folder as `resume.pdf`
3. The Resume section will automatically link to it

### Updating Content

- **About Section**: Edit `src/components/About.tsx`
- **Skills**: Update the skills array in `src/components/Skills.tsx`
- **Projects**: Add your projects to `src/components/Projects.tsx`
- **Resume**: Update experience/education in `src/components/Resume.tsx`
- **Blog**: Add blog posts to `src/components/Blog.tsx`
- **Contact**: Update social links in `src/components/Contact.tsx`

### Theme Colors

Edit the CSS variables in `src/index.css` to customize colors:

```css
:root {
  --color-accent: #6366f1;      /* Primary accent color */
  --color-emerald: #10b981;     /* Secondary accent color */
  /* ... more colors */
}
```

## Contact Form Integration

The contact form is currently a placeholder. To make it functional, you can:

1. **EmailJS**: Integrate EmailJS for client-side email sending
2. **Formspree**: Use Formspree for form handling
3. **Backend API**: Connect to your own backend API
4. **Netlify Forms**: If deploying on Netlify, use their form handling

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: chidogreen2003@gmail.com
- **GitHub**: [@HeisGreen](https://github.com/HeisGreen)
- **LinkedIn**: [Chidozie Green](https://www.linkedin.com/in/chidozie-green-510220233)
- **Twitter**: [@heis_green](https://x.com/heis_green)

---

Built with ❤️ by Chidozie Hamilton Green
