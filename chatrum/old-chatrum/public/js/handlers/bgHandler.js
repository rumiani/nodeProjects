const bg_pic = document.querySelector('#bg_pic')
const randomBackground = () =>{
    const picNumber = Math.floor(Math.random()*18) +1
    bg_pic.src = `../assets/images/bg/${picNumber}.jpg`;
}
randomBackground()

setInterval(() => {
    randomBackground()
}, 60000);