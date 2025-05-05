const themes = ['dark', 'light']

const switchThemes = () => {
    const body = document.querySelector('body')
    const currentTheme = body.classList[0].replace('c--theme-', '')
    const currentThemeIndex = themes.indexOf(currentTheme)
    // move to next theme
    const newTheme = `c--theme-${
        themes[(currentThemeIndex + 1) % themes.length]
    }`
    body.classList = newTheme
    localStorage.setItem('theme', newTheme)
}

const processForm = form => {
    const data = new FormData(form)
    data.append('form-name', 'newsletter');
    fetch('/', {
        method: 'POST',
        body: data,
    })
        .then(() => {
            form.innerHTML = `<div class="form--success">Thanks! Check your inbox for a confirmation e-mail.</div>`;
            
        })
        .catch(error => {
            form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
        })
}

const updateTime = () => {
    const now = new Date()
    const time = document.querySelectorAll('.currentTime')
    time.forEach(t => {
        t.innerHTML = now.toLocaleTimeString(undefined, {timeStyle: 'short'}).replace("AM","").replace("PM","")
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.nav--theme-switcher')
    themeToggle.addEventListener('click', e => {
        e.preventDefault()
        switchThemes()
    })

    const emailForm = document.querySelector('.email-form')

    if (emailForm) {
        emailForm.addEventListener('submit', e => {
            e.preventDefault();
            processForm(emailForm);
        })
    }
    updateTime();
})
