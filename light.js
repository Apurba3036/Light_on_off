document.getElementById('on').addEventListener('click',function(){

    document.getElementById('imgchange').src='Img/bulb_off.png'

    let myAudio = document.querySelector('#audio')
    myAudio.play()


})
document.getElementById('off').addEventListener('click',function(){

    document.getElementById('imgchange').src='Img/bulb_on.png'

    let myAudio = document.querySelector('#audio')
    myAudio.play()


})