addEventListener('click', function (e) {
    if (e.target.id === 'fromPrevMsg') {
        e.preventDefault();e.target
        const id = e.target.getAttribute('href').substring(1)
        const targetScroll = document.getElementById(id)
        targetScroll.scrollIntoView({block: "center", behavior: 'smooth' })
    }   
});