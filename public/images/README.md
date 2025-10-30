# Image Assets

This folder contains all the images used on the Donna Gabriel Consulting website.

## Required Images

Please add the following images to this directory:

### 1. hero.jpg
- **Purpose:** Main hero section image on homepage
- **Recommended Size:** 1920x1080px (landscape orientation)
- **Description:** Professional photo of Donna Gabriel
- **Used In:** components/Hero.tsx

### 2. speaking.jpg
- **Purpose:** About section image
- **Recommended Size:** 800x1000px (portrait orientation)
- **Description:** Photo of Donna presenting or speaking
- **Used In:** components/About.tsx

### 3. community1.jpg
- **Purpose:** Community Impact section background
- **Recommended Size:** 1920x800px (wide landscape)
- **Description:** Group celebration or community photo
- **Used In:** components/Community.tsx

### 4. logo.png
- **Purpose:** Website logo (optional)
- **Recommended Size:** 200x200px (square with transparency)
- **Description:** DGC logo with speech bubbles and figure
- **Used In:** Navigation (if you want to replace text logo)

## Image Optimization Tips

- Use high-quality images (but not too large - aim for <500KB per image)
- Ensure images are properly cropped and oriented
- Use JPG for photos, PNG for logos with transparency
- Next.js will automatically optimize images when served

## After Adding Images

Once you've added your images to this folder, you need to:

1. Open the component files that use these images
2. Uncomment the `<Image>` component code
3. Comment out or remove the placeholder divs

Example in Hero.tsx:
```tsx
// Remove this:
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
  {/* Placeholder content */}
</div>

// Uncomment this:
<Image
  src="/images/hero.jpg"
  alt="Donna Gabriel - Motivational Speaker and Coach"
  fill
  className="object-cover"
  priority
/>
```

## Need Help?

If you need help optimizing or preparing images, consider using:
- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Image optimization
- [Remove.bg](https://www.remove.bg/) - Background removal (for logos)
