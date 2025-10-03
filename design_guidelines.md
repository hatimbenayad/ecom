# Design Guidelines: Foot on Mars E-Commerce Recreation

## Design Approach
**Reference-Based Approach**: Exact pixel-perfect recreation of footonmars.com sneaker e-commerce website with Spanish language interface and full e-commerce functionality.

## Color Palette

### Light Mode (Primary)
- **Background**: 255 0% 100% (white)
- **Primary Text**: 0 0% 0% (black)
- **Secondary Text**: 0 0% 33% (gray #555555)
- **Accent/CTA**: 0 100% 45% (red #e60000)
- **Discount Highlight**: 0 100% 50% (bright red #ff0000)
- **Button Primary**: Black background with white text
- **Button Secondary**: White background with black border/text, rounded

## Typography
- **Font Family**: Clean sans-serif (Helvetica Neue/Inter/similar)
- **Weights**: Thin to bold, predominantly using light/regular weights
- **Header Navigation**: Bold uppercase
- **Section Titles**: Bold uppercase, centered
- **Product Text**: Regular weight
- **Announcement Bar**: Small uppercase

## Layout System
- **Spacing Units**: Tailwind spacing - primarily p-4, p-6, p-8, py-12, py-16, py-20
- **Container**: Full-width sections with centered content (max-w-7xl)
- **Grid System**: CSS Grid + Flexbox
  - Desktop: 4-column product grids
  - Tablet: 2-column layouts
  - Mobile: Single column, stacked

## Component Library

### Header (Sticky)
- **Announcement Bar**: Full-width white strip, centered text "ENVÍOS GRATIS A PARTIR DE 70 €", uppercase, small black text
- **Main Header**: 
  - Logo: Red "Foot on Mars" logo (left)
  - Navigation: Bold uppercase links - CALZADO, ROPA, ACCESORIOS, MARCAS, OUTLET (center)
  - Search bar with placeholder "Buscar"
  - Icons: User account, Wishlist (heart), Shopping cart (right)
- Sticky positioning on scroll

### Hero Banner
- Full-width image banner with New Balance "The 740" branding
- Large product imagery (legs/shoes centered)
- Text overlay: White bold text, left-aligned logo
- Responsive image scaling

### Product Grid Cards
- Clean white background
- Product image (shoe only, clean background)
- Brand name above model name
- Price: Black text (standard), Red strikethrough + bold black (discounted)
- Wishlist heart icon (top-right corner, toggles outline/filled)

### Category Cards (EXPLORA)
- Full-bleed images
- Overlay button with category name
- Hover: Zoom-in effect on image
- 4-column desktop, 2-column tablet, stacked mobile

### Brand Banners
- Two half-width banners side-by-side
- Full-bleed images with models/products
- "VER TODO" buttons: Rounded, white background, black border/text, bottom center

### Gender Categories
- 3-column full-bleed images
- Text labels top-left: "HOMBRE", "MUJER", "JUNIOR"
- Hover: Darken image overlay

### Newsletter Signup
- White background section
- Heading: "¡ÚNETE!" (bold uppercase)
- Subheading: "¡Descubre novedades, tendencias y ofertas con nuestra newsletter!"
- Email input field + "Suscribirme" button (black bg, white text)
- Discount offer text: "¡Recibe un descuento del 10% en tu primera compra!"

### Footer
- 4-column layout:
  - Col 1: Logo + payment method icons (Visa, Mastercard, PayPal, Bizum)
  - Col 2: Ayuda links (FAQ, Shipping & Returns, Contact, Gift Cards)
  - Col 3: About links (Stores, Company info, About Foot on Mars)
  - Col 4: Legal links (Terms, Privacy, Cookies)
- Bottom bar: Copyright + "Developed by Experimentosgilizity" credit

## Images
**Critical Images Required**:
1. **Hero Banner**: Full-width New Balance "The 740" campaign - two people's legs wearing sneakers, desert/mars background
2. **EXPLORA Grid** (4 images):
   - Nike shoes with desert/mars background
   - Converse shoe close-up
   - Couple in apparel
   - Nike shoes close-up (Ofertas)
3. **Brand Banners** (2 images):
   - Nike model on sofa
   - Adidas shoe in desert canyon
4. **Adidas Gazelle Feature**: Full-width desert background with floating Gazelle shoe (rendered with shadow)
5. **Gender Categories** (3 images):
   - Man in black tracksuit (Hombre)
   - Woman in white dress + Nike shoes (Mujer)
   - Kid with basketball (Junior)
6. **Converse Collection**: Man wearing Converse with "LOVE Chuck" handwritten overlay
7. **Product Grid**: 8-12 clean product shots of sneakers

## Interactions & Animations
- **Hover Effects**: 
  - Images: Slight zoom-in (transform: scale(1.05))
  - Buttons: Invert colors or add underline
  - Wishlist hearts: Toggle between outline/filled
- **Transitions**: Smooth CSS transitions (0.3s ease)
- **Mobile Navigation**: Hamburger menu collapse
- **Search**: Expands to overlay input on mobile

## Responsive Behavior
- **Desktop**: Multi-column grids, all navigation visible
- **Tablet**: 2-column layouts, condensed spacing
- **Mobile**: Single column, stacked vertically, hamburger menu, touch-optimized targets