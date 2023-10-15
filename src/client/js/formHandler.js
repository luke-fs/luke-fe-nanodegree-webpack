function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value

    if (Client.checkForURL(formText)) {
    console.log("::: Form Submitted :::")

    postData('http://localhost:8080/api', {url: formText})

    .then(function(res) {
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(res.score_tag);
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
    })
    } else {
        alert('Retry with a valid URL, please!');
    }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

// output of API (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
const polarityChecker = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}

export { handleSubmit }
export { polarityChecker }