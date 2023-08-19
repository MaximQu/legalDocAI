/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: '#03052c',
                secondary: '#3B3B60',
            },
            backgroundSize: {
                '270': '270%',
                '80': '80%',
                '70': '70%',
                '60': '60%',
            },
        },
        fontFamily: {
            'helvetica': ['Helvetica', ...defaultTheme.fontFamily.sans],
            'noto': ['Noto Sans', ...defaultTheme.fontFamily.sans],
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                xxs: '375px',
                xs: '480px',
                sm: '575px',
                md: '768px',
                lg: '991px',
                xl: '1199',
                '2xl': '1330px',
            },
        },

    },
    plugins: [],
    darkMode: 'class'
}