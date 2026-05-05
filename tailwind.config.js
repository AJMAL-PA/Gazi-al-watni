/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "primary-fixed-dim": "#b9c7e4",
          "outline-variant": "#44474d",
          "surface-container-low": "#111c2d",
          "on-secondary-fixed-variant": "#39485a",
          "surface-container-high": "#1f2a3c",
          "on-primary-fixed": "#0d1c32",
          "tertiary-container": "#141a1f",
          "surface": "#081425",
          "on-secondary-fixed": "#0d1c2d",
          "tertiary-fixed-dim": "#c1c7cf",
          "on-secondary-container": "#a7b6cc",
          "surface-dim": "#081425",
          "surface-container-lowest": "#040e1f",
          "outline": "#8f9097",
          "on-tertiary-fixed": "#161c22",
          "secondary-fixed-dim": "#b9c8de",
          "primary": "#b9c7e4",
          "on-background": "#d8e3fb",
          "on-tertiary-fixed-variant": "#41474e",
          "secondary-container": "#39485a",
          "inverse-on-surface": "#263143",
          "on-secondary": "#233143",
          "inverse-surface": "#d8e3fb",
          "on-error": "#690005",
          "error-container": "#93000a",
          "on-tertiary": "#2b3137",
          "surface-bright": "#2f3a4c",
          "on-surface-variant": "#c5c6cd",
          "tertiary-fixed": "#dde3eb",
          "surface-container-highest": "#2a3548",
          "error": "#ffb4ab",
          "secondary-fixed": "#d4e4fa",
          "on-surface": "#d8e3fb",
          "on-tertiary-container": "#7c838a",
          "primary-container": "#0a192f",
          "on-error-container": "#ffdad6",
          "surface-variant": "#2a3548",
          "surface-container": "#152031",
          "tertiary": "#c1c7cf",
          "on-primary-container": "#74829d",
          "inverse-primary": "#515f78",
          "surface-tint": "#b9c7e4",
          "secondary": "#b9c8de",
          "primary-fixed": "#d6e3ff",
          "on-primary-fixed-variant": "#39475f",
          "on-primary": "#233148",
          "background": "#081425"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
      "animation": {
          "marquee": "marquee 30s linear infinite"
      },
      "keyframes": {
          "marquee": {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-50%)" }
          }
      },
      "spacing": {
          "section-gap": "120px",
          "gutter": "24px",
          "container-max": "1440px",
          "margin": "40px",
          "unit": "8px"
      },
      "fontFamily": {
          "headline-lg": ["Bebas Neue", "sans-serif"],
          "label-caps": ["Share Tech", "monospace"],
          "body-md": ["Share Tech", "monospace"],
          "display-xl": ["Bebas Neue", "sans-serif"],
          "body-lg": ["Share Tech", "monospace"],
          "headline-md": ["Bebas Neue", "sans-serif"],
          "inter": ["Inter", "sans-serif"],
          "anton": ["Bebas Neue", "sans-serif"],
          "bebas": ["Bebas Neue", "sans-serif"],
          "bigshoulders": ["Big Shoulders Display", "sans-serif"],
          "tech": ["Share Tech", "monospace"],
          "serif": ["Bebas Neue", "sans-serif"]
      },
      "fontSize": {
          "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
          "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
          "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
          "display-xl": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
          "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
          "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "700" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
