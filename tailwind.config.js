/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
        "./svg/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
            },
            fontSize: {
                '0': ['0', '0'],
            },
            height: {
                'win': 'var(--win-height, 100vh)',
            },
            minHeight: {
                'win': 'var(--win-height, 100vh)'
            },
            maxHeight: {
                'win': 'var(--win-height, 100vh)'
            },
        },
    },
    plugins: [
        plugin(({addVariant, e, postcss}) => {
            addVariant('mouse-hover', ({container, separator}) => {
                const mediaRule = postcss.atRule({name: 'media', params: '(hover: hover)'})
                mediaRule.append(container.nodes);
                container.append(mediaRule);

                mediaRule.walkRules(rule => {
                    const ruleSelectorClear = rule.selector.slice(1) // Remove dot in the beginning of the selector
                        .replace('\\/', '/'); // Replace \/ with /, so that PostCSS doesn't escape the slash twice

                    rule.selector = `.${e(`mouse-hover${separator}${ruleSelectorClear}`)}:hover`
                })
            })
        })
    ],
}