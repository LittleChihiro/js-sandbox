function addItem() {
    let item = {}
    const nameElement = document.getElementById('name')
    item.name = nameElement.value
    const priceElement = document.getElementById('price')
    item.price = parseInt(priceElement.value)
    const dateElement = document.getElementById('date')
    item.date = dateElement.value


    let listElemment = document.getElementById('list')

    let li = document.createElement('li')

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.setAttribute("name", "selector")
    check.setAttribute("value", item.price)
    check.setAttribute("onclick", "sum()")
    

    let nameSpan = document.createElement("span")
    nameSpan.setAttribute("class", "name")
    nameSpan.innerHTML = item.name
    let priceSpan = document.createElement("span")
    priceSpan.setAttribute("class", "price")
    priceSpan.innerHTML = item.price
    let dateSpan = document.createElement("span")
    dateSpan.setAttribute("class", "date")
    dateSpan.innerHTML = item.date
    
    li.appendChild(check)
    li.appendChild(nameSpan)
    li.appendChild(priceSpan)
    li.appendChild(dateSpan)

    
    listElemment.appendChild(li)
    
    nameElement.value = ''
    priceElement.value = ''
    dateElement.value = ''

    
}

function sum() {
    let total = 0
    let selectors = document.getElementsByName('selector')
    for (let index = 0; index < selectors.length; index++) {
        const selector = selectors[index];
        if (selector.checked) {
            total = total + parseInt(selector.value)
        }
    }
    let totalElement = document.getElementById('total')
    totalElement.innerHTML = total

}