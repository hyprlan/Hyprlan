/** @type {import('tailwindcss').Config} */
export default {
  // Disable content scanning to avoid Windows symlink issues
  // We'll use utility classes directly in CSS
  content: [],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        hyperlan: {
          blue: '#2563eb',
          cyan: '#0891b2',
          green: '#16a34a',
          purple: '#6b21a8',
          pink: '#db2777',
        },
        bg: {
          main: '#6b21a8',
          card: '#ffffff',
          elevated: '#f8fafc',
        },
        text: {
          primary: '#0f172a',
          muted: '#475569',
          'on-purple': '#ffffff',
        },
        border: {
          DEFAULT: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
};
