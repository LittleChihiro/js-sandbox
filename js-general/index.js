function sayHi() {
    const date = new Date()
    const hour = date.getHours()
    console.log(date)
    console.log(hour)
    let dayTime = 'morning'
    if (hour >= 12 ) {
        dayTime = 'afternoon'
    }
      
    const hiElemment = document.getElementById('hi')
    hiElemment.value = 'good ' + dayTime

}

