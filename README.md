# boulandm.com - Personal Portfolio

A single-page website featuring an animated 3D Rubik's cube built with Three.js. Showcasing backend development skills and algorithmic problem-solving expertise.

**Built with [Claude](https://claude.ai)**

## Features

- **3D Rendering**: Interactive Rubik's cube with realistic colors
- **Smooth Animation**: Continuous rotation with multiple axes
- **Mouse Interaction**: Camera tilts based on mouse position
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Aesthetics**: Dark gradient background with clean typography
- **Modular Code**: Well-organized, scalable codebase

## Project Structure

```
boulandm.com/
├── index.html              # Main HTML entry point
├── CNAME                   # GitHub Pages custom domain
├── package.json            # Project metadata
├── README.md               # This file
├── src/
│   ├── styles/
│   │   └── main.css        # Global styles and animations
│   ├── scripts/
│   │   ├── cube.js         # Rubik's cube component module
│   │   └── main.js         # Application initialization and scene setup
│   └── assets/
│       └── images/         # (placeholder for images/icons)
├── public/                 # Static assets
└── docs/                   # Documentation (future use)
```

## Getting Started

### Quick Start

1. Open `index.html` in your web browser, or
2. Start a local server:

```bash
# Using Python 3
cd boulandm.com
python -m http.server 8000

# Then visit http://localhost:8000
```

### Development

The codebase is organized for easy expansion:

- **cube.js** - Contains the `RubiksCube` module with `create()` and `rotate()` methods
- **main.js** - Application setup with lighting, events, and animation loop
- **main.css** - Styling for content and layout

### Code Organization

The application follows a modular pattern:

1. **RubiksCube Module** (`cube.js`) - Encapsulates all cube-related logic
2. **Application** (`main.js`) - Manages scene, camera, renderer, and interactions
3. **Styles** (`main.css`) - UI styling and animations

## Customization

### Change Cube Colors

Edit the `colors` object in `src/scripts/cube.js`:

```javascript
const colors = {
    white: 0xffffff,
    yellow: 0xffed00,
    red: 0xff0000,
    orange: 0xff8c00,
    blue: 0x0051ba,
    green: 0x00a651
};
```

### Adjust Animation Speed

Modify the rotation values in the `animate()` call in `src/scripts/main.js`:

```javascript
RubiksCube.rotate(rubiksCube, 0.003, 0.005, 0.002);
//                           x      y      z
```

### Update Content

Edit text in `index.html` within the `.content` section.

### Modify Background

Update the gradient in `src/styles/main.css`:

```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
```

## Technologies

- **Three.js** - 3D graphics library (loaded from CDN)
- **HTML5/CSS3/JavaScript** - Web standards
- **WebGL** - 3D rendering engine
- **GitHub Pages** - Hosting and deployment

## Browser Support

Works on all modern browsers supporting WebGL:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages with Custom Domain

1. Push code to GitHub repository
2. Configure GitHub Pages in repo settings
3. Add DNS records in AWS Route 53 pointing to GitHub Pages IPs
4. HTTPS will be automatically provisioned

### Environment Variables

None required - this is a static site with no backend dependencies.

## Future Development

The modular structure supports:
- Additional 3D objects or scenes
- Form submissions or API integrations
- Blog or project showcase sections
- Analytics tracking
- Dark/light mode toggle

## Contributing

This is a personal portfolio, but the code structure is designed to be maintainable and extensible.

## License

MIT

## Contact

- GitHub: https://github.com/boulandm
- LinkedIn: https://www.linkedin.com/in/mohammad-bouland/
- LeetCode: https://leetcode.com/u/internal_logic/
- Email: mohammad.bouland@gmail.com
