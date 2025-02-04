/*função para fazer o pesornagem pular sempre que aperta o botao*/
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

/*funçao para quando o personagem encosta no tunel ele perder*/

const loop = setInterval(()=> {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    console.log(marioPositon);

    if (pipePosition <= 80 && pipePosition > 0 && marioPositon <50){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${ marioPositon}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '50px'
        mario.style,marginLeft = '35 px'
       
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown' ,jump);