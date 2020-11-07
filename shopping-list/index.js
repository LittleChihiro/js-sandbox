function addItem() {
    let item = {}
    item.name = document.getElementById('name').value
    item.price = parseInt(document.getElementById('price').value)

    let listElemment = document.getElementById('list')

    let li = document.createElement('li')

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.setAttribute("name", "selector")
    check.setAttribute("value", item.price)
    

    let nameSpan = document.createElement("span")
    nameSpan.setAttribute("class", "name")
    nameSpan.innerHTML = item.name
    let priceSpan = document.createElement("span")
    priceSpan.setAttribute("class", "price")
    priceSpan.innerHTML = item.price
    
    li.appendChild(check)
    li.appendChild(nameSpan)
    li.appendChild(priceSpan)

    
    listElemment.appendChild(li)
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