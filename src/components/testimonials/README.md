# Testimonials Section Component

## Overview
A modern testimonials section with animated card overlay, navigation controls, and responsive design matching the URBANBUILD design system.

## Component Structure

```
testimonials/
├── testimonials.jsx          # Main section component
├── testimonials.css          # Section layout & animations
├── TestimonialCard.jsx       # Floating card component
└── TestimonialCard.css       # Card styles & animations
```

## Features

### 1. Left Column - Content Area
- Yellow label: "• TESTIMONIALS •"
- Large heading: "Built On Trust, Proven By Results"
- Descriptive paragraph
- Yellow CTA button: "WORK WITH US" with arrow icon
- Fade-in and slide-up animation on page load

### 2. Right Column - Visual Area
- Large construction professional image
- Floating testimonial card positioned over image
- Card includes:
  - Yellow quote icon
  - Testimonial text
  - Author profile image with yellow border
  - Author name and role
  - Navigation buttons (prev/next)

### 3. Animations

**On Page Load:**
- Left content: `fadeInUp` (0s delay)
- Right image: `fadeInRight` (0.2s delay)
- Testimonial card: `scaleIn` (0.6s delay)

**On Hover:**
- CTA button: lifts up, shadow enhancement, arrow slides right
- Navigation buttons: scale(1.1) effect

**On Navigation:**
- Smooth transition between testimonials

## Usage

### Basic Implementation
```jsx
import Testimonials from './components/testimonials/testimonials'

function App() {
  return (
    <div>
      <Testimonials />
    </div>
  )
}
```

### Add Custom Testimonials
Edit the `testimonials` array in `testimonials.jsx`:

```jsx
const testimonials = [
  {
    text: "Your testimonial text here",
    authorName: "Client Name",
    authorRole: "Client Role/Company",
    authorImage: "image-url"
  },
  // Add more testimonials...
]
```

## Layout Details

### Desktop Layout (>768px)
- Two-column grid layout
- Left: Content (text + CTA)
- Right: Image with floating card
- Card positioned absolutely (bottom: -50px, left: -50px)
- Creates depth effect with card overlapping image

### Mobile Layout (≤768px)
- Single column stack
- Card becomes static (no absolute positioning)
- Full-width CTA button
- Maintains all functionality

## Animation Logic

### Staggered Entry Animation
1. **0.0s** - Left content fades in and slides up
2. **0.2s** - Right image fades in from right
3. **0.6s** - Testimonial card scales in

This creates a natural, sequential reveal that guides the user's eye from left to right.

### Hover Interactions
- **CTA Button**: `translateY(-3px)` + shadow + arrow movement
- **Nav Buttons**: `scale(1.1)` for tactile feedback

## Customization

### Change Colors
Uses CSS variables from your design system:
- `--color-accent`: Yellow (#F5A623)
- `--color-dark`: Dark text
- `--color-white`: White background

### Adjust Animation Timing
In CSS files:
```css
/* testimonials.css */
.testimonials-left {
  animation: fadeInUp 0.8s ease-out; /* Change duration */
}

/* TestimonialCard.css */
.testimonial-card {
  animation: scaleIn 0.8s ease-out 0.6s backwards; /* Change delay */
}
```

### Change Card Position
In `TestimonialCard.css`:
```css
.testimonial-card {
  bottom: -50px;  /* Adjust vertical position */
  left: -50px;    /* Adjust horizontal position */
}
```

## State Management

The component uses React `useState` hook to manage:
- `currentIndex`: Tracks active testimonial
- `handlePrev()`: Navigate to previous testimonial
- `handleNext()`: Navigate to next testimonial

Navigation wraps around (last → first, first → last).

## Accessibility

- Semantic HTML structure
- ARIA labels on navigation buttons
- Keyboard accessible buttons
- Alt text on images
- Proper heading hierarchy

## Browser Support

- Modern browsers with CSS Grid and Flexbox
- CSS animations and transitions
- Absolute positioning
- Border-radius and box-shadow

## Dependencies

- React (hooks: useState)
- lucide-react (icons: ArrowRight, ChevronLeft, ChevronRight, Quote)
- CSS Variables from design system

## Integration

Already integrated in `App.jsx`:
```jsx
<Testimonials />
```

Position in page flow:
Hero → About → Services → Construction Services → Features → Projects → **Testimonials** → Contact → CTA
