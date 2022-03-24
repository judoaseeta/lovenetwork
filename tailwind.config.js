module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#010404',
                secondary: '#053254',
                cont1: '#f0e9bb',
                cont2: '#37bfdb',
                cont3: '#f928a7',
                high1: '#d0282a',
                stable: '#56aad0',
                network1: '#f8f8da',
                network2: '#103d4c',
                network3: '#797cc8',
                network4: '#fcb3c9',
                love: '#6c0d2e',
            },
        },
    },
    plugins: [],
}
