addEventListener('click', function (e) {
    if (e.target.id === 'fromPrevMsg') {
        e.preventDefault();e.target
        const id = e.target.getAttribute('href').substring(1)
        const targetScroll = document.getElementById(id)
        targetScroll.scrollIntoView({block: "center", behavior: 'smooth' })
    }   
});

const containerEl = document.getElementById('messages_container')
const scrollDown = document.getElementById('scrollDown')
const diff = containerEl.scrollHeight - containerEl.scrollTop  
containerEl.addEventListener('scroll', () =>{    
    const newDiff = containerEl.scrollHeight - containerEl.scrollTop
    if (newDiff - diff > 40) {
        scrollDown.style.display = 'inline'
    }else{
        scrollDown.style.display = 'none'
    }
})
addEventListener('click', (e) =>{
        if (e.target.id === 'scrollDown') {
            containerEl.scrollTop = containerEl.scrollHeight;
        }
})