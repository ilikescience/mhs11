const themes = ['dark', 'light']

const setTheme = () => {
    document.querySelector('body').classList = localStorage.getItem('theme') || 'c--theme-light';
}

const switchThemes = () => {
    const body = document.querySelector('body')
    const currentTheme = body.classList[0].replace('c--theme-', '')
    const currentThemeIndex = themes.indexOf(currentTheme)
    // move to next theme
    const newTheme = `c--theme-${
        themes[(currentThemeIndex + 1) % themes.length]
    }`
    body.classList = newTheme
    localStorage.setItem('theme', newTheme);
}

window.addEventListener('DOMContentLoaded', () => {
    setTheme();
    const themeToggle = document.querySelector('.nav--theme-switcher')
    themeToggle.addEventListener('click', e => {
        e.preventDefault()
        switchThemes()
    })
})
