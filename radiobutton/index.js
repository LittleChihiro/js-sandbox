function doIt() {
    let radioButtons = document.getElementsByName('element')

for (let index = 0; index < radioButtons.length; index++) {
    const radio = radioButtons[index];
    if (radio.checked) {
        let value = radio.value
        if (value == 54) {
            alert('yeeeeey!')
        } else {
            alert('neeeiiiiinnnnn :(')
        }
    }
    
    
}
}
