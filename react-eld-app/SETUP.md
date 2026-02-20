# LogiTrack - ELD & Trip Planning App (React + Vite)

A professional Electronic Logging Device (ELD) and trip planning application built with React, Vite, and React Router.

## Project Structure

```
react-eld-app/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Top navigation bar
│   │   └── Navigation.css       # Navigation styles
│   ├── pages/
│   │   ├── TripInputPage.jsx    # Trip planning form
│   │   ├── TripInputPage.css
│   │   ├── RouteMapPage.jsx     # Route visualization
│   │   ├── RouteMapPage.css
│   │   ├── ELDLogsPage.jsx      # ELD logbook with duty hours
│   │   └── ELDLogsPage.css
│   ├── App.jsx                  # Router setup
│   ├── App.css
│   ├── index.css               # Global styles & design tokens
│   └── main.jsx                # React entry point
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## Installation & Setup

### Step 1: Install Dependencies

```bash
cd react-eld-app
npm install
```

This will install:
- React 18.2.0
- React Router DOM 6.20.0
- Vite (build tool)
- Lucide React (icons)

### Step 2: Run Development Server

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Step 3: Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## Features

### 1. **Trip Input Page** (`/`)
- Two-step form for entering trip details
- Current location and cycle hours tracking
- Pickup and dropoff location entry
- HOS compliance validation
- Responsive step indicator

### 2. **Route Map Page** (`/map`)
- Trip summary display
- Hours of Service status
- Planned stops with markers
- Visual route representation
- Distance and time estimates

### 3. **ELD Logs Page** (`/eld`)
- **Duty Hours Input**: Real-time input controls for:
  - Off Duty
  - Sleeper Berth
  - Driving
  - On Duty (Not Driving)
- **24-Hour Grid**: 
  - Ruler with 30-minute markers
  - Fine vertical grid lines (every 30 minutes)
  - Half-hour increment visualization
  - Continuous black line showing duty status transitions
- **Total Hours Validation**: Enforces 24-hour limit with visual feedback
- **Driver Information**: Shows driver, vehicle, odometer, and date
- **Remarks Section**: For logging notes and violations
- **Compliance Status**: Visual indicator of HOS compliance

### 4. **Navigation**
- Sticky navigation bar
- Active page highlighting
- Responsive button labels (full on desktop, abbreviated on mobile)
- Driver connection status indicator

## Design System

### Colors
- **Primary**: Navy Blue (#2563eb, oklch: 0.372 0.167 263.903)
- **Accent**: Orange (#d97706, oklch: 0.576 0.245 27.325)
- **Success**: Green (#16a34a)
- **Neutrals**: Slate grays for backgrounds and text

### Typography
- **Font**: Geist (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, 14-16px
- **Monospace**: Geist Mono (for data/numbers)

### Spacing
- Uses standard rem-based scale (0.25rem, 0.5rem, 1rem, etc.)
- Grid-based layout with gaps

## Customization

### Change Colors
Edit the CSS custom properties in `src/index.css`:
```css
:root {
  --primary: oklch(0.372 0.167 263.903);
  --accent: oklch(0.576 0.245 27.325);
  /* ... other colors */
}
```

### Modify Duty States
Edit `src/pages/ELDLogsPage.jsx`:
```javascript
const dutyStates = [
  'Off Duty',
  'Sleeper Berth',
  'Driving',
  'On Duty (Not Driving)',
]
```

### Adjust Grid Dimensions
In `src/pages/ELDLogsPage.jsx`:
```javascript
const ROW_HEIGHT = 100 // Height of each duty row in pixels
const HOURS_IN_DAY = 24 // Hours per day (always 24)
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- SVG support required for grid visualization

## Performance Optimization

- Vite provides fast hot module replacement (HMR)
- CSS is co-located with components for better code splitting
- Minimal dependencies reduce bundle size

## Development Tips

### Adding New Pages
1. Create a new file in `src/pages/`
2. Create corresponding CSS file
3. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```
4. Update Navigation.jsx if needed

### Using Lucide Icons
All lucide icons are available:
```javascript
import { Download, Printer, MapPin } from 'lucide-react'
<Download size={16} />
```

### Responsive Design
Breakpoints:
- Mobile: default
- Tablet: `@media (min-width: 768px)`
- Desktop: `@media (min-width: 1024px)`
- Large: `@media (min-width: 1280px)`

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Deploy to GitHub Pages
1. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repo-name/',
})
```
2. Run `npm run build`
3. Push `dist/` to gh-pages branch

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Clear cache and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**SVG grid not rendering?**
Ensure width/height are set on SVG element and viewBox is correct.

## Future Enhancements

- Backend API integration for saving logs
- Database support (Supabase, Firebase)
- User authentication
- Real map integration (Google Maps, Mapbox)
- Canvas drawing for manual log entry
- Multi-day trip support
- Trip history and analytics
- Mobile app version

## License

MIT

## Support

For issues or questions, check the React and Vite documentation:
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
