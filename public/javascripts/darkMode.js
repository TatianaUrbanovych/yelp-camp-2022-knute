function toggleTheme(theme) {
    const body = document.body;
    const card = document.querySelectorAll('#card');
    const map = document.querySelector("#map");
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
    for (let i of card) {
        i.classList.remove('dark', 'light')
        if (theme == 'dark') {
            i.classList.add('dark')
        } else {
            i.classList.add('light')
        }
    }
    map.classList.remove('dark', 'light')
    if (theme == 'dark') {
        map.classList.add('dark')
    } else {
        map.classList.add('light')
    }
}

