# LogiTrack - Electronic Logging Device (ELD) & Trip Planning

A modern, professional React application for truck drivers to manage Electronic Logging Device (ELD) logs and plan trips with FMCSA Hours of Service compliance.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-green)
![License](https://img.shields.io/badge/License-MIT-orange)

## Features

✨ **Trip Planning**
- Two-step form to enter trip details
- Current location and cycle hours tracking
- Visual step indicator with validation

🗺️ **Route Planning**
- View trip summary with distance and estimated time
- Track Hours of Service compliance status
- See scheduled stops and delivery points
- Visual route representation

📋 **ELD Daily Logs**
- Interactive duty hours input (Off Duty, Sleeper Berth, Driving, On Duty)
- Professional 24-hour grid with:
  - 30-minute ruler markers
  - Fine vertical grid lines (15-minute increments)
  - Continuous line showing duty transitions
  - Real-time grid regeneration as you update hours
- 24-hour limit validation with visual feedback
- Professional remarks section
- FMCSA compliance status indicator
- Driver and vehicle information display

🎨 **Professional UI**
- Responsive design (mobile, tablet, desktop)
- Color-coded duty status cards
- Smooth animations and transitions
- Accessible form inputs

🔗 **Navigation**
- React Router for seamless page transitions
- Sticky navigation bar
- Active page highlighting

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx        # Navigation bar with routing
├── pages/
│   ├── TripInputPage.jsx     # Step-by-step trip form
│   ├── RouteMapPage.jsx      # Route visualization
│   └── ELDLogsPage.jsx       # Main ELD logbook
├── App.jsx                   # React Router setup
├── index.css                 # Global styles
└── main.jsx                  # React entry point
```

## Pages

### 1. Plan Trip (`/`)
Enter trip details in a two-step form:
- Step 1: Current location and cycle hours
- Step 2: Pickup and dropoff locations

### 2. Route Map (`/map`)
View your trip:
- Trip summary (distance, time)
- Hours of Service status
- Planned stops
- Route visualization

### 3. ELD Logs (`/eld`)
Manage daily logs:
- Update duty hours with real-time grid regeneration
- 24-hour ruler with 30-minute markers
- Duty status visualization
- Compliance status tracking

## Key Components

### Duty Hours Input
```javascript
<DutyInput 
  hours={8}
  state="Driving"
  onChange={handleChange}
/>
```

### 24-Hour Grid
- Ruler header with hour markers (0-24)
- 30-minute increment visualization
- Fine grid lines (15-minute intervals)
- Continuous polyline showing duty transitions
- Total hours calculation

### Navigation
```javascript
<Navigation />
// Provides routing between pages
```

## Customization

### Add New Duty States
Edit `ELDLogsPage.jsx`:
```javascript
const dutyStates = [
  'Off Duty',
  'Sleeper Berth',
  'Driving',
  'On Duty (Not Driving)',
  // Add new state here
]
```

### Change Colors
Edit `index.css`:
```css
:root {
  --primary: oklch(0.372 0.167 263.903); /* Navy Blue */
  --accent: oklch(0.576 0.245 27.325);   /* Orange */
}
```

### Adjust Grid Size
Edit `ELDLogsPage.jsx`:
```javascript
const ROW_HEIGHT = 100; // Pixels per row
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires CSS Grid, Flexbox, and SVG support.

## Dependencies

- **react**: UI library
- **react-dom**: React rendering
- **react-router-dom**: Client-side routing
- **lucide-react**: Icon library
- **vite**: Build tool

## Development

### Hot Module Replacement
Changes to components auto-refresh without page reload.

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### CSS Organization
- Global styles in `index.css`
- Component styles in co-located `.css` files
- CSS custom properties for theming

## Performance

- Vite provides ultra-fast builds
- React.StrictMode for development safety
- Optimized SVG rendering for grid

## Future Features

- Backend API integration
- Database persistence (Supabase, Firebase)
- User authentication
- Real map integration (Google Maps)
- Canvas drawing for manual entry
- Multi-day trip support
- Trip history and analytics

## License

MIT - Feel free to use for personal or commercial projects

## Support

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

## Author

Created as a professional ELD and trip planning solution for truck drivers.

---

**Ready to get started?** Run `npm install && npm run dev` to launch the development server!
