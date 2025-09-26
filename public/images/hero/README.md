# Hero Images Setup

## Instructions for downloading and setting up hero carousel images:

1. **Visit the gallery**: https://noahife.pixieset.com/bistro53/

2. **Download the following images** and save them in `/public/images/hero/` with these exact names:

   - `hero-1.jpg` - Download IMG_8631.jpg (food plating shot)
   - `hero-2.jpg` - Download IMG_8619.jpg (restaurant interior/food)
   - `hero-3.jpg` - Download IMG_8657.jpg (food presentation)
   - `hero-4.jpg` - Download IMG_8643.jpg (dining setup)
   - `hero-5.jpg` - Download IMG_8668.jpg (food close-up)
   - `hero-6.jpg` - Download IMG_8695.jpg (beverage/food combo)
   - `hero-7.jpg` - Download IMG_8684.jpg (restaurant ambiance)
   - `hero-8.jpg` - Download IMG_8712.jpg (food styling shot)

3. **Make sure the images are**:
   - High quality (preferably 1920x1080 or similar)
   - Optimized for web (compressed but still good quality)
   - In JPG format

4. **File structure should look like**:
   ```
   /public/images/hero/
   ├── hero-1.jpg
   ├── hero-2.jpg
   ├── hero-3.jpg
   ├── hero-4.jpg
   ├── hero-5.jpg
   ├── hero-6.jpg
   ├── hero-7.jpg
   └── hero-8.jpg
   ```

5. **After adding the images**, restart the development server to see the carousel in action.

## Features of the Hero Carousel:
- ✨ Full-screen image slideshow
- 🖼️ Automatic image transitions every 4 seconds
- 🎯 Manual navigation with dots
- 📱 Mobile-responsive design
- 🌚 Dark overlay for text readability
- 🏷️ Bistro logo positioned at top-left
- 🔄 Smooth slide transitions
- ⬇️ Scroll indicator for navigation to menu

## Customization:
- Change transition timing in `HeroCarousel.tsx` (currently 4000ms)
- Adjust overlay opacity in the component
- Modify text content and CTA buttons
- Update logo size and position
