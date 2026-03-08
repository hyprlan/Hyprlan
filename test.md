# Hyprlan Website Test Plan

To ensure the Hyprlan hackathon website works flawlessly and maintains its design integrity (inspired by tech conferences like Devcon), the following tests must be performed:

## 1. Visual & Layout Testing
- [ ] **Hero Section**: Verify the "Build The Future" headline is centered, bold, and uses the correct gradient/colors.
- [ ] **Navigation Bar**: Check that the sticky header contains links to About, Tracks, Prizes, Speakers, Schedule, FAQ, and Sponsors.
- [ ] **Call to Action**: Ensure the "Register Now" button is prominently displayed and has a hover effect.
- [ ] **Responsiveness**: Resize the browser window to mobile width to ensure the layout stacks correctly and the navigation transforms into a hamburger menu.
- [ ] **Dark Mode Aesthetics**: Confirm that the dark theme, grid background, and neon accents render correctly across different sections.

## 2. Functional Testing
- [ ] **Routing**: Click on each navigation link to verify smooth scrolling to the respective section or correct page routing.
- [ ] **Registration Flow**: Test the "Register Now" button to confirm it opens the registration modal or redirects to the correct form.
- [ ] **Authentication**: If integrated, verify login/signup flows via NextAuth.
- [ ] **Performance**: Run Lighthouse on the local build (`npm run build && npm start`) to ensure the site meets basic metrics for LCP, CLS, and FID.

## 3. Comparative Analysis
- [ ] Compare the overall look and feel with event pages like Devcon.org. The site should inspire the same level of professionalism and developer focus, while maintaining its unique cyber-tech identity.
