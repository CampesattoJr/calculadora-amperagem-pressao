const inputsPressure = document.querySelectorAll('#input-pressure');

let sum2 = undefined

const buttonPressure = document.querySelector('.btn-pressure')

const averagePressure = () => {
    sum = Array.from(inputsPressure).reduce((accumulator, input) => {
        return accumulator + (parseFloat(input.value));
    }, 0);

    const average = sum / 5

    return average
}

const maxPressure = () => averagePressure() + averagePressure() * 0.15

const maxPressureTolerance = () => maxPressure() + 0.10

const minPressure = () => averagePressure() - averagePressure() * 0.15

const minPressureTolerance = () => minPressure() - 0.10

function getResultPressure() {
    if (averagePressure() === 0 || isNaN(averagePressure())) {
        alert('Preencha os campos com valores válidos!')
        return
    }

    averagePressure()
    maxPressure()
    minPressure()

    document.querySelector('.result-pressure').innerHTML = `<table>
                                                        <thead>
                                                            <tr>
                                                                <th scope="row" colspan="2">Average:</th>
                                                                <td colspan="2">${averagePressure().toFixed(3)}</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>Max:</th>
                                                                <td>${maxPressure().toFixed(2)}</td>
                                                                <th>Tolerance:</th>
                                                                <td>${maxPressureTolerance().toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Min:</th>
                                                                <td>${minPressure().toFixed(2)}</td>
                                                                <th>Tolerance:</th>
                                                                <td>${minPressureTolerance().toFixed(2)}</td>
                                                            </tr>
                                                        <tbody>
                                                   </table>`
}

buttonPressure.addEventListener('click', e => {
    e.preventDefault()
    
    getResultPressure()
})