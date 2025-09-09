module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: { // <-- 所有的自定义内容都包裹在这个 'extend'（扩展）代码块里
      colors: {
        primary: {
          DEFAULT: '#165DFF',
          '10': 'rgba(22, 93, 255, 0.1)',
          '20': 'rgba(22, 93, 255, 0.2)'
        },
        dark: {
          100: '#333333',
          200: '#2A2A2A',
          300: '#222222',
          400: '#1A1A1A',
          500: '#121212',
          600: '#0B0B0B', // 为以防万一，增加一些更深的色号
          700: '#121212', // 为了和您body的class一致，重新映射一些值
          800: '#181818',
        },
        gray: {
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
        },
        red: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        yellow: {
          400: '#facc15',
          500: '#eab308'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
    },
  },
  plugins: [],
}