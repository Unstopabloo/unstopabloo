/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'unst': '#16ECD3',
      'parrafo': '#D1D5DB',
      'chip': '#161D39',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '90%',
        md: '90%',
        lg: '850px',
        xl: '850px',
      }
    }
  },
  extend: {},
};
