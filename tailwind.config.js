/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#2563EB', // Professional blue (blue-600)
        'primary-50': '#EFF6FF', // Light blue tint (blue-50)
        'primary-100': '#DBEAFE', // Lighter blue (blue-100)
        'primary-500': '#3B82F6', // Medium blue (blue-500)
        'primary-600': '#2563EB', // Primary blue (blue-600)
        'primary-700': '#1D4ED8', // Darker blue (blue-700)
        
        // Secondary Colors
        'secondary': '#64748B', // Sophisticated slate (slate-500)
        'secondary-100': '#F1F5F9', // Light slate (slate-100)
        'secondary-200': '#E2E8F0', // Lighter slate (slate-200)
        'secondary-300': '#CBD5E1', // Light-medium slate (slate-300)
        'secondary-400': '#94A3B8', // Medium slate (slate-400)
        'secondary-500': '#64748B', // Secondary slate (slate-500)
        'secondary-600': '#475569', // Darker slate (slate-600)
        'secondary-700': '#334155', // Dark slate (slate-700)
        
        // Accent Colors
        'accent': '#0EA5E9', // Vibrant sky blue (sky-500)
        'accent-100': '#E0F2FE', // Light sky blue (sky-100)
        'accent-500': '#0EA5E9', // Accent sky blue (sky-500)
        'accent-600': '#0284C7', // Darker sky blue (sky-600)
        
        // Background Colors
        'background': '#FAFAFA', // Warm off-white (neutral-50)
        'surface': '#FFFFFF', // Pure white (white)
        
        // Text Colors
        'text-primary': '#1E293B', // Deep charcoal (slate-800)
        'text-secondary': '#64748B', // Medium gray (slate-500)
        
        // Status Colors
        'success': '#059669', // Professional emerald (emerald-600)
        'success-100': '#D1FAE5', // Light emerald (emerald-100)
        'success-500': '#10B981', // Medium emerald (emerald-500)
        'success-600': '#059669', // Success emerald (emerald-600)
        
        'warning': '#D97706', // Balanced amber (amber-600)
        'warning-100': '#FEF3C7', // Light amber (amber-100)
        'warning-500': '#F59E0B', // Medium amber (amber-500)
        'warning-600': '#D97706', // Warning amber (amber-600)
        
        'error': '#DC2626', // Clear red (red-600)
        'error-100': '#FEE2E2', // Light red (red-100)
        'error-500': '#EF4444', // Medium red (red-500)
        'error-600': '#DC2626', // Error red (red-600)
        
        // Border Colors
        'border': '#E2E8F0', // Neutral border (slate-200)
        'border-light': '#F1F5F9', // Light border (slate-100)
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'caption': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'elevation-3': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s ease-out',
        'magnetic': 'magnetic 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--magnetic-x, 0), var(--magnetic-y, 0))' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms',
      },
      zIndex: {
        '1000': '1000',
        '1100': '1100',
        '1200': '1200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}