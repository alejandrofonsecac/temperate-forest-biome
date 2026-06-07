import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // =====================================================
      // PALETA DE CORES DO SITE — Floresta Sazonal Temperada
      // Baseada na teoria 70/20/10:
      //   70% → tons escuros de floresta (verde-floresta e carvão)
      //   20% → tons médios terrosos e âmbar
      //   10% → laranja outonal como destaque/acento
      // =====================================================
      colors: {
        floresta: {
          // Verde floresta profundo — cor base predominante
          900: '#1A2E1B',
          800: '#243D25',
          700: '#2E4D2F',
          600: '#3D6B3F',
          500: '#4E8A50',
          400: '#6BAD6D',
          300: '#93C895',
          200: '#C0E2C1',
          100: '#E8F5E9',
        },
        outono: {
          // Laranja e âmbar outonal — cor de destaque (10%)
          900: '#7A2F00',
          800: '#A84000',
          700: '#C95200',
          600: '#E07B39',  // Principal destaque
          500: '#F09050',
          400: '#F5AC70',
          300: '#F8C898',
          200: '#FCE3C8',
          100: '#FEF3E8',
        },
        terra: {
          // Tons terrosos / marrom — cor secundária (20%)
          900: '#2C1A0A',
          800: '#4A2E12',
          700: '#6B4220',
          600: '#8B5E3C',
          500: '#A67C5B',
          400: '#C4A882',
          300: '#D9C4A8',
          200: '#EDE0CC',
          100: '#F7F1E8',
        },
        // Neutros do site — substituem o bege genérico
        // Fundo principal usa cinza-escuro quente, não branco/bege
        sombra: {
          950: '#0D1A0E',
          900: '#111C12',
          800: '#162318',
          700: '#1E3020',
        },
        neve: {
          // Para textos claros e fundos de seções específicas
          DEFAULT: '#F4F0EB',
          pura: '#FAFAF8',
        },
      },

      // =====================================================
      // TIPOGRAFIA
      // Playfair Display → títulos elegantes e editoriais
      // DM Sans → corpo de texto limpo e moderno
      // =====================================================
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },

      // =====================================================
      // ESPAÇAMENTOS E TAMANHOS CUSTOMIZADOS
      // =====================================================
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // =====================================================
      // ANIMAÇÕES CUSTOMIZADAS (CSS puro)
      // As mais complexas são feitas via Anime.js nos componentes
      // =====================================================
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'slide-right': 'slide-right 0.7s ease forwards',
        'leaf-sway': 'leaf-sway 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },

      // =====================================================
      // SOMBRAS CUSTOMIZADAS
      // =====================================================
      boxShadow: {
        'floresta': '0 4px 30px rgba(26, 46, 27, 0.35)',
        'outono': '0 4px 30px rgba(224, 123, 57, 0.35)',
        'card': '0 2px 20px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.1)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.15)',
      },

      // =====================================================
      // BORDAS E RAIOS
      // =====================================================
      borderRadius: {
        'pill': '999px',
        '4xl': '2rem',
      },

      // =====================================================
      // BACKDROP BLUR
      // =====================================================
      backdropBlur: {
        xs: '2px',
      },

      // =====================================================
      // GRADIENTES customizados via variáveis CSS
      // =====================================================
      backgroundImage: {
        'gradient-floresta': 'linear-gradient(135deg, #1A2E1B 0%, #2E4D2F 50%, #3D6B3F 100%)',
        'gradient-outono': 'linear-gradient(135deg, #C95200 0%, #E07B39 50%, #F5AC70 100%)',
        'gradient-terra': 'linear-gradient(135deg, #4A2E12 0%, #8B5E3C 100%)',
        'overlay-dark': 'linear-gradient(to bottom, rgba(13,26,14,0) 0%, rgba(13,26,14,0.85) 100%)',
        'overlay-top': 'linear-gradient(to top, rgba(13,26,14,0) 0%, rgba(13,26,14,0.7) 100%)',
      },

      // Breakpoints extras para controle fino de responsividade
      screens: {
        'xs': '400px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config
