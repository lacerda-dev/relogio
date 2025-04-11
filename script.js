const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

function formatarTempo(tempo) {
    return tempo < 10 ? '0' + tempo : tempo
}

const relogio = setInterval(function atualizarRelogio() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()
    
    horas.textContent = formatarTempo(hr)
    minutos.textContent = formatarTempo(min)
    segundos.textContent = formatarTempo(seg)
}, 1000)