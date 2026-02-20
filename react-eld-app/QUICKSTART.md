# Quick Start Guide - LogiTrack React App

## 🚀 Get Up and Running in 5 Minutes

### 1️⃣ Navigate to Project Directory
```bash
cd react-eld-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

Your app will automatically open at **http://localhost:3000** ✨

---

## 📖 How to Use the App

### 🏠 Home Page - Plan Your Trip
1. Enter your current location and cycle hours used
2. Click "Next"
3. Enter pickup and dropoff locations
4. Click "Plan Trip"

### 🗺️ Route Map Page
- View your trip summary
- Check Hours of Service status
- See planned stops along the route
- Visual route representation

### 📋 ELD Logs Page (Main Feature)
1. **Update Duty Hours**:
   - Adjust hours for each duty status (Off Duty, Sleeper Berth, Driving, On Duty)
   - Grid updates in real-time as you change values
   - Total hours must not exceed 24

2. **View 24-Hour Grid**:
   - Hour markers from Midnight to Noon
   - 30-minute ruler markers (darker lines) and 15-minute increments (lighter lines)
   - Black line shows your duty status transitions throughout the day
   - Total hours displayed per duty status

3. **Check Compliance**:
   - Green badge confirms you're compliant with FMCSA Hours of Service
   - Remarks section for any violations or notes

---

## 🎨 Visual Guide

```
┌─────────────────────────────────────┐
│     LogiTrack - ELD & Trip Planner  │
├─────────────────────────────────────┤
│  [Trip]  [Map]  [ELD Logs]          │  ← Navigation
├─────────────────────────────────────┤
│                                     │
│  Input Duty Hours:                  │
│  ☐ Off Duty         8h   ↔          │  ← Interactive Inputs
│  ☐ Sleeper Berth    4h   ↔          │
│  ☐ Driving          8h   ↔          │
│  ☐ On Duty          4h   ↔          │
│                                     │
│  Total: 24h / 24h ✓ FULL            │  ← Validation
│                                     │
│  ┌─────────────────────────────┐    │
│  │ Driver Info │ Vehicle │ ... │    │  ← Info Cards
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  Midnight    Noon           │ ← 30min marks
│  │  ▏▏▏▏▏▏▏▏▏▏▏▏▏▏▏▏▏▏        │ ← 15min grid
│  │  Off Duty  ▔▔▔▔▔▔▔▔▔▔▔▔▔    │ ← Duty rows
│  │  Sleeper   ▔▔▔▔▔▔▔▔▔▔▔▔▔    │
│  │  Driving   ━━━━━━━━━━━━━━   │ ← Black line
│  │  On Duty   ▔▔▔▔▔▔▔▔▔▔▔▔▔    │    shows status
│  └─────────────────────────────┘    │
│                                     │
│  ✓ Compliant with FMCSA HOS        │  ← Status Badge
└─────────────────────────────────────┘
```

---

## 🛠️ Common Tasks

### Change App Colors
Edit `src/index.css`:
```css
:root {
  --primary: oklch(0.372 0.167 263.903); /* Navy Blue */
  --accent: oklch(0.576 0.245 27.325);   /* Orange */
}
```

### Add New Duty Status
Edit `src/pages/ELDLogsPage.jsx`:
```javascript
const dutyStates = [
  'Off Duty',
  'Sleeper Berth',
  'Driving',
  'On Duty (Not Driving)',
  'Inspection', // ← Add new status here
]
```

### Make Grid Rows Taller
Edit `src/pages/ELDLogsPage.jsx`:
```javascript
const ROW_HEIGHT = 120; // Changed from 100
```

---

## 📁 Project Files You'll Edit

```
react-eld-app/
├── src/
│   ├── pages/
│   │   ├── ELDLogsPage.jsx    ← Main ELD logbook
│   │   ├── TripInputPage.jsx  ← Trip form
│   │   └── RouteMapPage.jsx   ← Route view
│   ├── components/
│   │   └── Navigation.jsx     ← Navigation bar
│   ├── App.jsx                ← Routes setup
│   └── index.css              ← Global colors/styles
├── package.json               ← Dependencies
└── vite.config.js            ← Build config
```

---

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Test the production build locally

### Deploy to Vercel (Free)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Run `npm run build`
2. Drag `dist/` folder to [Netlify](https://netlify.com)
3. Done! 🎉

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| Module not found | `rm -rf node_modules && npm install` |
| Page blank | Check browser console for errors (F12) |
| Styles not loading | Clear browser cache (Ctrl+Shift+Delete) |
| Grid not rendering | Check window width is > 0 |

---

## 📚 Learn More

- [React Docs](https://react.dev) - React fundamentals
- [Vite Docs](https://vitejs.dev) - Build tool docs
- [React Router](https://reactrouter.com) - Navigation
- [Lucide Icons](https://lucide.dev) - Icons list

---

## ✨ What's Included

✅ **Professional UI** - Responsive design, polished components  
✅ **Duty Hours Input** - Real-time grid updates  
✅ **24-Hour Grid** - 30-minute rulers + fine grid lines  
✅ **24-Hour Validation** - Prevents exceeding limits  
✅ **Dark Mode Ready** - CSS variables for theming  
✅ **Mobile Friendly** - Works on all devices  
✅ **Fast Development** - Vite hot reload  

---

## 🎯 Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Explore the three pages
3. ✅ Try updating duty hours on ELD page
4. ✅ Customize colors and layout
5. ✅ Deploy to Vercel or Netlify

---

**Questions?** Check the full docs in `SETUP.md` or `README.md`

Happy coding! 🚛🎉
