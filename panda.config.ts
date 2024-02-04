import { globalCss } from '@/styles/globals'
import { layerStyles } from '@/styles/layerStyles'
import { textStyles } from '@/styles/textStyles'
import { tokens } from '@/styles/tokens'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        tokens: tokens,
        breakpoints: {
            mobile: '375px',
            tablet: '768px',
            bigTablet: '1024px',
            desktop: '1440px',
        },
        textStyles: textStyles,
        layerStyles: layerStyles,
    },

    // The output directory for your css system
    outdir: 'styled-system',
    globalCss: globalCss,
    // strictTokens: true,
    strictPropertyValues: true,
})
