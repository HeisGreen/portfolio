# Quick Setup Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your profile photo:**
   - Place your profile photo in the `public` folder
   - Name it `profile.jpg`
   - Recommended size: 800x800px or larger (square format works best)

3. **Add your resume (optional):**
   - Export your resume as a PDF
   - Place it in the `public` folder
   - Name it `resume.pdf`

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:5173`

## 📝 Next Steps

### Update Your Content

1. **Projects Section** (`src/components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Add project images, descriptions, tech stacks, and links

2. **Resume Section** (`src/components/Resume.tsx`):
   - Update your work experience
   - Add your education details
   - Include certifications if any

3. **Blog Section** (`src/components/Blog.tsx`):
   - Add your blog posts
   - Update post titles, descriptions, and links

4. **About Section** (`src/components/About.tsx`):
   - Customize the features section if needed
   - Update any additional details

### Customize Colors

Edit `src/index.css` to change the color scheme:
- `--color-accent`: Primary color (currently indigo)
- `--color-emerald`: Secondary accent color
- All other theme colors are defined there

### Contact Form

The contact form is currently a placeholder. To make it functional:

**Option 1: EmailJS (Easiest)**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Install: `npm install @emailjs/browser`
4. Update `src/components/Contact.tsx` with EmailJS integration

**Option 2: Formspree**
1. Sign up at [Formspree](https://formspree.io/)
2. Get your form endpoint
3. Update the form action in `src/components/Contact.tsx`

**Option 3: Backend API**
- Connect to your own backend API
- Update the `handleSubmit` function in `src/components/Contact.tsx`

## 🎨 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth scroll animations
✅ Intersection Observer for scroll-triggered animations
✅ Modern glassmorphism effects
✅ Gradient accents
✅ Social media links
✅ Contact form (ready for integration)
✅ Blog section
✅ Resume/CV section
✅ Projects showcase

## 📦 Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## 🌐 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import on Vercel
3. Deploy!

### Netlify
1. Push to GitHub
2. Import on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

---

**Need help?** Check the main README.md for more details!

