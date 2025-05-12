const themes = ['dark', 'light'];
const textThemes = ['default', 'serif'];

const switchColorThemes = () => {
    const body = document.querySelector('body');
    const currentClass = [...body.classList].find(cls => cls.startsWith('c--theme-'));
    const currentTheme = currentClass ? currentClass.replace('c--theme-', '') : themes[0];
    const currentThemeIndex = themes.indexOf(currentTheme);
    const newTheme = `c--theme-${themes[(currentThemeIndex + 1) % themes.length]}`;
    
    if (currentClass) {
        body.classList.replace(currentClass, newTheme);
    } else {
        body.classList.add(newTheme);
    }

    localStorage.setItem('theme', newTheme);
};

const switchTextThemes = () => {
    const body = document.querySelector('body');
    const currentClass = [...body.classList].find(cls => cls.startsWith('t--theme-'));
    const currentTextTheme = currentClass ? currentClass.replace('t--theme-', '') : textThemes[0];
    const currentTextThemeIndex = textThemes.indexOf(currentTextTheme);
    const newTextTheme = `t--theme-${textThemes[(currentTextThemeIndex + 1) % textThemes.length]}`;

    if (currentClass) {
        body.classList.replace(currentClass, newTextTheme);
    } else {
        body.classList.add(newTextTheme);
    }

    localStorage.setItem('textTheme', newTextTheme);
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
    const colorThemeToggle = document.querySelector('.nav--theme-switcher')
    colorThemeToggle.addEventListener('click', e => {
        e.preventDefault()
        switchColorThemes()
    })

    const textThemeToggle = document.querySelector('.nav--textTheme-switcher')
    textThemeToggle.addEventListener('click', e => {
        e.preventDefault()
        switchTextThemes()
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
