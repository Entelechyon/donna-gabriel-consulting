# Donna Gabriel Consulting Website

A professional single-page website for Donna Gabriel Consulting - a motivational speaker, coach, and facilitator based in Melbourne, Australia.

**Tagline:** "Get Donna & Get Moving!"

**Website:** [donnagabriel.com](https://donnagabriel.com)

## Features

✨ **Single-Page Scrolling Design** - Modern, clean layout with smooth navigation
🎨 **Brand Colors** - Teal (#1A9B8E) and Orange (#F7941D)
📱 **Fully Responsive** - Mobile-first design that works on all devices
🤖 **AI Chatbot** - Powered by Anthropic Claude API
📧 **Contact Form** - Email integration with nodemailer
📅 **Calendly Integration** - Direct booking for discovery calls
🔍 **SEO Optimized** - Meta tags, structured data, and accessibility
⚡ **Fast Performance** - Optimized images and lazy loading

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude API
- **Email:** Nodemailer
- **Fonts:** Inter (Google Fonts)
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## Project Structure

```
donna-gabriel-consulting/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form API endpoint
│   │   └── chat/route.ts         # Chatbot API endpoint
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Main homepage
│   └── globals.css               # Global styles
├── components/
│   ├── Navigation.tsx            # Sticky header navigation
│   ├── Hero.tsx                  # Hero section
│   ├── About.tsx                 # About Donna section
│   ├── Methodology.tsx           # Finding Your Flourish approach
│   ├── Services.tsx              # Services section (4 cards)
│   ├── Community.tsx             # Community impact section
│   ├── Testimonials.tsx          # Testimonials (placeholders)
│   ├── Contact.tsx               # Contact form + Calendly
│   ├── Footer.tsx                # Footer with links
│   └── ChatbotWidget.tsx         # AI chatbot widget
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   └── images/                   # Image assets (add photos here)
│       └── README.md             # Image requirements guide
├── .env.local.example            # Environment variables template
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Anthropic API key ([Get one here](https://console.anthropic.com/))
- Email service credentials (Gmail, SendGrid, AWS SES, etc.)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd donna-gabriel-consulting
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Edit `.env.local` and add your API keys:**
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=donna@donnagabriel.com.au
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Photos

### Required Images

You need to add 3 main images to the `public/images/` folder:

1. **hero.jpg** - Professional photo of Donna (1920x1080px)
2. **speaking.jpg** - Photo of Donna presenting (800x1000px)
3. **community1.jpg** - Group celebration photo (1920x800px)

### Steps to Add Images

1. Place your images in the `public/images/` folder
2. Open the component files that use these images:
   - `components/Hero.tsx`
   - `components/About.tsx`
   - `components/Community.tsx`
3. Uncomment the `<Image>` component code
4. Remove or comment out the placeholder div

**Example:**
```tsx
// In Hero.tsx - Remove the placeholder div and uncomment:
<Image
  src="/images/hero.jpg"
  alt="Donna Gabriel - Motivational Speaker and Coach"
  fill
  className="object-cover"
  priority
/>
```

See `public/images/README.md` for detailed instructions.

## Updating Content

### Testimonials

Edit `components/Testimonials.tsx`:

```tsx
const testimonials = [
  {
    id: 1,
    content: 'Working with Donna transformed how I lead my team...',
    author: 'Jane Smith',
    role: 'CEO, Tech Company',
  },
  // Add more testimonials...
]
```

### About Section

Edit the biography text in `components/About.tsx` (lines 23-31).

### Services

Modify service cards in `components/Services.tsx` (lines 14-68).

### Social Media Links

Update social media URLs in `components/Footer.tsx` (lines 67-115).

## Environment Variables

### Required Variables

#### Anthropic API Key (for chatbot)
```env
ANTHROPIC_API_KEY=sk-ant-...
```
Get your key from: https://console.anthropic.com/

#### Email Configuration (for contact form)

**Option 1: Gmail SMTP**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # Generate from Google Account settings
EMAIL_FROM=noreply@donnagabriel.com.au
EMAIL_TO=donna@donnagabriel.com.au
```

**Option 2: SendGrid (Recommended for production)**
```env
SENDGRID_API_KEY=SG.xxx...
EMAIL_TO=donna@donnagabriel.com.au
```
Then update `app/api/contact/route.ts` to use SendGrid SDK.

**Option 3: AWS SES**
```env
AWS_REGION=ap-southeast-2
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=xxx...
EMAIL_TO=donna@donnagabriel.com.au
```

### Gmail Setup

To use Gmail:
1. Go to [Google Account settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → App passwords
3. Generate an app password
4. Use the app password in `EMAIL_PASS`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/donna-gabriel-consulting.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `ANTHROPIC_API_KEY`
     - `EMAIL_HOST`
     - `EMAIL_PORT`
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `EMAIL_TO`
   - Click "Deploy"

3. **Connect your domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add `donnagabriel.com`
   - Update your domain's DNS settings as instructed

### Alternative: Deploy to Netlify

```bash
npm run build
```

Then drag the `.next` folder to Netlify or use their CLI.

## Customization Guide

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1A9B8E',    // Teal
  accent: '#F7941D',     // Orange
}
```

### Fonts

The site uses Inter font. To change:

Edit `app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google'
```

### Chatbot Personality

Edit the system prompt in `app/api/chat/route.ts` (lines 8-32).

### Navigation Links

Edit `components/Navigation.tsx` (lines 19-24).

### Footer Content

Edit `components/Footer.tsx` to update:
- Quick links
- Contact information
- Social media icons
- ABN

## Features Breakdown

### 1. Navigation
- Sticky header that appears on scroll
- Smooth scrolling to sections
- Mobile hamburger menu
- Prominent "Book Discovery Call" CTA

### 2. Hero Section
- Large headline and tagline
- Two CTAs (Calendly + Learn More)
- Professional photo of Donna
- Responsive layout

### 3. About Section
- Biography of Donna
- Credentials with checkmarks
- Professional photo

### 4. Methodology (Finding Your Flourish)
- Three-step approach visualization
- Self-Regulation → Self-Liberation → Self-Reimagination
- Icon-based cards with keywords

### 5. Services
- Four service cards:
  1. 1:1 Coaching (links to Calendly)
  2. Workshops & Programmes (links to contact)
  3. Speaking & Events (links to contact)
  4. DGC Events (opens modal with details)

### 6. Community Impact
- Full-width image section
- Overlay text highlighting impact since 2012

### 7. Testimonials
- Three testimonial cards
- Easily editable placeholders
- Quote icons and author attribution

### 8. Contact Section
- Two-column layout
- Left: Contact form with validation
- Right: Calendly inline widget + direct contact info
- Form sends emails via API

### 9. Footer
- Company info and tagline
- Quick navigation links
- Contact details
- Social media icons (placeholders)
- ABN

### 10. AI Chatbot
- Bottom-right floating button
- Powered by Claude API
- Pre-configured knowledge about services
- Provides Calendly link
- Warm, encouraging personality

## Troubleshooting

### Chatbot not working
- Check that `ANTHROPIC_API_KEY` is set in `.env.local`
- Verify API key is valid
- Check browser console for errors

### Contact form not sending emails
- Verify email credentials in `.env.local`
- For Gmail, ensure you're using an app password
- Check spam folder
- Review server logs for errors

### Images not showing
- Ensure images are in `public/images/` folder
- Check that `<Image>` component is uncommented
- Verify image filenames match exactly

### Build errors
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Clear `.next` folder: `rm -rf .next`

## Support

For technical issues or questions:
- Check the component files for inline comments
- Review Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS docs: https://tailwindcss.com/docs

## License

© 2025 Donna Gabriel Consulting. All rights reserved.

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Anthropic Claude](https://www.anthropic.com/)
- [Calendly](https://calendly.com/)

---

**Ready to deploy!** 🚀

If you have any questions, refer to this README or check the component files for detailed comments.
