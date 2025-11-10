# 📍 Location Tracker - Real-time GPS Tracking Website

A modern, responsive web application for tracking and displaying real-time GPS location data with an interactive map interface.

## ✨ Features

### Core Functionality
- **Real-time Location Tracking** - Uses HTML5 Geolocation API to continuously track user's GPS coordinates
- **Interactive Map Display** - Powered by Leaflet.js with OpenStreetMap tiles
- **Live Location Updates** - Displays latitude, longitude, accuracy, and timestamp
- **Reverse Geocoding** - Converts coordinates to readable addresses using Nominatim API
- **Location History** - Tracks and displays up to 20 recent location points with timestamps
- **Start/Stop Controls** - Easy-to-use buttons to control tracking
- **Error Handling** - Comprehensive error messages for permission denied, unavailable location, etc.

### User Interface
- **Modern Design** - Beautiful gradient backgrounds and smooth animations
- **Responsive Layout** - Mobile-first design that works on all devices
- **Status Indicators** - Visual badges showing active/inactive tracking status
- **Loading States** - Spinner animations and overlay messages
- **Interactive Elements** - Hover effects, transitions, and visual feedback

## 🚀 How to Use

### Getting Started
1. Open `index.html` in a modern web browser
2. Click the **"Start Tracking"** button
3. Allow location permissions when prompted by your browser
4. Your location will appear on the map with a marker
5. Location details will update in real-time

### Controls
- **Start Tracking** - Begin tracking your location
- **Stop Tracking** - Stop location updates
- **Clear History** - Remove all saved location history

### Location Information Displayed
- **Latitude & Longitude** - Precise GPS coordinates (6 decimal places)
- **Accuracy** - Location accuracy in meters
- **Address** - Human-readable address from reverse geocoding
- **Last Updated** - Timestamp of the last location update
- **Status Badge** - Shows whether tracking is active or inactive

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Structure and Geolocation API
- **CSS3** - Modern styling with flexbox, grid, animations
- **JavaScript (ES6+)** - Core functionality and API integration
- **Leaflet.js** - Interactive map library
- **OpenStreetMap** - Map tiles and data
- **Nominatim API** - Reverse geocoding service

### Browser Requirements
- Modern browser with Geolocation API support
- JavaScript enabled
- Location services enabled on device
- Internet connection for map tiles and geocoding

### Geolocation Options
```javascript
{
  enableHighAccuracy: true,  // Use GPS for better accuracy
  timeout: 10000,            // 10 second timeout
  maximumAge: 0              // Don't use cached positions
}
```

## 📱 Responsive Design

### Desktop (768px+)
- Two-column grid layout
- Map on the left (full height)
- Info cards on the right
- Larger text and spacing

### Mobile (<768px)
- Single-column stacked layout
- Optimized touch targets
- Compact spacing
- Full-width buttons

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to violet (#667eea → #764ba2)
- **Success**: Green (#4caf50)
- **Error**: Red (#f44336)
- **Neutral**: Grays for text and backgrounds

### Animations
- Fade-in effects on page load
- Slide-in animations for history items
- Pulse effect on active status badge
- Smooth transitions on all interactive elements
- Spinner for loading states

## 🔒 Privacy & Security

- Location data is processed locally in the browser
- No data is sent to external servers (except for map tiles and geocoding)
- Location history is stored only in browser memory (cleared on page refresh)
- User must explicitly grant location permissions

## 🐛 Error Handling

The application handles various error scenarios:

1. **Permission Denied** - User denies location access
2. **Position Unavailable** - GPS/location services unavailable
3. **Timeout** - Location request takes too long
4. **Unsupported Browser** - Browser doesn't support Geolocation API
5. **Network Errors** - Failed to load map tiles or geocoding data

## 📂 Project Structure

```
/vercel/sandbox/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── LOCATION-TRACKER-README.md  # This file
```

## 🌐 APIs Used

### Leaflet.js
- **CDN**: https://unpkg.com/leaflet@1.9.4/
- **Purpose**: Interactive map rendering
- **License**: BSD 2-Clause

### OpenStreetMap
- **Tile Server**: https://{s}.tile.openstreetmap.org/
- **Purpose**: Map tiles and geographic data
- **License**: Open Data Commons Open Database License (ODbL)

### Nominatim
- **API**: https://nominatim.openstreetmap.org/
- **Purpose**: Reverse geocoding (coordinates to address)
- **Usage Policy**: Max 1 request per second

## 🚀 Running the Project

### Option 1: Direct File Access
Simply open `index.html` in your browser

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then open: http://localhost:8000
```

**Note**: Some browsers require HTTPS for Geolocation API in production. Local development (localhost) works with HTTP.

## 📝 Future Enhancements

Potential features for future versions:
- Save location history to localStorage
- Export location data as CSV/JSON
- Distance traveled calculation
- Speed and altitude display
- Multiple marker support for tracking others
- Geofencing and location alerts
- Dark mode toggle
- Custom map styles
- Offline map support

## 🙏 Acknowledgments

- **Leaflet.js** - For the excellent mapping library
- **OpenStreetMap** - For free and open map data
- **Nominatim** - For geocoding services
- **Apexplanet Internship** - For the learning opportunity

## 📄 License

This project is created for educational purposes as part of the Apexplanet Web Development Internship.

---

**Created by**: Apexplanet Intern  
**Date**: November 2025  
**Project Type**: Web Development - Location Tracking Application
