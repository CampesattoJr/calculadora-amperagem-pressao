const inputsAmperage = document.querySelectorAll('#input-amperage');
    
let sum = undefined

const buttonAmperage = document.querySelector('.btn')

const averageAmperage = () => {
    sum = Array.from(inputsAmperage).reduce((accumulator, input) => {
        return accumulator + (parseFloat(input.value));
    }, 0);

    const average = sum / 5

    return average
}

const maxAmperage = () => averageAmperage() + averageAmperage() * 0.05

const maxAmperageTolerance = () => maxAmperage() + 0.10

const minAmperage = () => averageAmperage() - averageAmperage() * 0.05

const minAmperageTolerance = () => minAmperage() - 0.10

function getResultAmperage() {
    if (averageAmperage() === 0 || isNaN(averageAmperage())) {
        alert('Preencha os campos com valores válidos!')
        return
    }

    averageAmperage()
    maxAmperage()
    minAmperage()

    document.querySelector('.result-amperage').innerHTML = `<table>
                                                        <thead>
                                                            <tr>
                                                                <th scope="row" colspan="2">Average:</th>
                                                                <td colspan="2">${averageAmperage().toFixed(3)}</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Max:</th>
                                                                <td>${maxAmperage().toFixed(2)}</td>
                                                                <th>Tolerance:</th>
                                                                <td>${maxAmperageTolerance().toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Min:</th>
                                                                <td>${minAmperage().toFixed(2)}</td>
                                                                <th>Tolerance:</th>
                                                                <td>${minAmperageTolerance().toFixed(2)}</td>
                                                            </tr>
                                                        <tbody>
                                                   </table>`
}

buttonAmperage.addEventListener('click', e => {
    e.preventDefault()
    
    getResultAmperage()
})