/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({addVariant, e, postcss}) => {
            addVariant('mouse-hover', ({container, separator}) => {
                const mediaRule = postcss.atRule({name: 'media', params: '(hover: hover)'})
                mediaRule.append(container.nodes);
                container.append(mediaRule);

                mediaRule.walkRules(rule => {
                    rule.selector = `.${e(`mouse-hover${separator}${rule.selector.slice(1)}`)}:hover`
                })
            })
        })
    ],
}