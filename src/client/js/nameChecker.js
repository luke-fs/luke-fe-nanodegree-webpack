function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Luke",
        "Max",
        "Nele",
        "George",
        "Lenni"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
