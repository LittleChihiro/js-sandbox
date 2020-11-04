function wecker(hour,min) {
    let min1 = 1
    let hour1 = 1

    while (!(hour1 == hour && min1 == min)) {
        const date = new Date()
        hour1 = date.getHours()
        min1 = date.getMinutes()
        console.log(hour1 + ':' + min1)

    }
    alert('haaallllooooo!!!!')
}

function setWecker() {
    let hourEl = document.getElementById('hour')
    let hour = hourEl.value
   let minEl = document.getElementById('min')
   let min = minEl.value
   wecker(hour, min)
}