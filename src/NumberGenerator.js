import React, { useState} from 'react'

function NumberGenerator() {


    //generator liczb
    const [lowValue, setLowValue] = useState(null);
    const [upValue, setUpValue] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);

    const randomNumber = (e) => {

        e.preventDefault();
        let amountLowValue = parseInt(lowValue);
        let amountUpValue = parseInt(upValue);

        amountLowValue = Math.ceil(amountLowValue);
        amountUpValue = Math.ceil(amountUpValue);

        setError(false);

        if (amountUpValue <= amountLowValue) {
            setError(true);
            return (console.log('error'));
        }

        let randomResult = Math.floor(Math.random() * (amountUpValue - amountLowValue + 1)) + amountLowValue;

        //jeżeli wylosowano tę samą cyfrę 
        if (randomResult === result) {

            randomResult = result + 1;
            if (randomResult >= amountUpValue) {
                randomResult = result - 1;
            }
            if (randomResult < amountLowValue) {
                randomResult = result + 1;
            }

        }

        setResult(randomResult)
    }

    return (
        
        <section section className = "container" id='test' >
            <h2>Generator Liczb </h2>
            <form className='text-form'>
                <label>Podaj przedział</label>
                <input type="text"
                    type='number'
                    name='lowValue'
                    id='lowValue'
                    placeholder='od'
                    onChange={(e)=>setLowValue(e.target.value)}
                />
                <input type="text"
                    type='number'
                    name='upValue'
                    id='upValue'
                    placeholder='do'
                    onChange={(e)=>setUpValue(e.target.value)}
                />
                <button type='submit' onClick={randomNumber}>Generuj</button>
            </form>
            <div>
                <h3>{error?'Podano błędny przedział': result}</h3> 
            </div>
        </section >
    )
}

export default NumberGenerator
