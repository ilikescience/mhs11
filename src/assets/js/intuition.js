const updateResult = () => {
    const results = document.querySelector(".intuition--results .intuition--value");
    
    const intuition = document.querySelector('#intuition').value;
    const data = document.querySelector('#data').value;
    const correct = Math.pow(10, document.querySelector('#correct').value);
    const cost = Math.pow(10, document.querySelector('#cost').value);

    
    results.innerHTML = ((intuition - data) * ( correct) + (cost)).toFixed(2);
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input').forEach((element) => {
        element.addEventListener("change", updateResult)
    })
})