import React, {useState} from 'react';

function PasswordGenerator() {

    const [lenght, setLenght] = useState(null);
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbol, setSymbol] = useState(false);

    //const randomFunction = {
    //    lower: getRandomLower,
    //    upper: getRandomUpper,
    //    number: getRandomNumber,
    //    symbol: getRandomSymbol
    //}

    const getRandomLower = () => {
        const randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        return randomLower;
    }
    const getRandomUpper = () => {
        const randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        return randomUpper;
    }
    const getRandomNumber = () => {
        const randomNumber = +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        return  randomNumber;
    }
    const getRandomSymbol = () => {
        const symbols = '!@#$%^&*(){}[]=<>/,.';
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        return randomSymbol;
    }

    const generatePassword = (e) =>{
        e.preventDefault();

        let lenghtVal = lenght; //na const
        let lowerCaseVal = lowerCase;
        let upperCaseVal = upperCase;
        let numbersVal = numbers;
        let symbolVal = symbol;

        
    }
    
       
    


    return (
        <section className='container'>
            <h2>Generator Haseł</h2>

            <form onSubmit={generatePassword}>

                <div className="setting">
                <label htmlFor="">Ilość znaków</label>
                <input 
                    type="number"
                    id='lenght'
                    min='1'
                    max='15'
                    placeholder='np. 10'
                    onChange={(e)=>setLenght(e.target.value)}
                    required
                />
                </div>
                <div className="setting">
                    <label>Zawiera małe litery</label>
                    <input type="checkbox" id='lowerCase' onChange={(e)=> setLowerCase(e.target.checked)}/>
                </div>
                <div className="setting">
                    <label>Zawiera duże litery</label>
                    <input type="checkbox" id='uperCase' onChange={(e) => setUpperCase(e.target.checked)}/>
                </div>
                <div className="setting">
                    <label>Zawiera liczby</label>
                    <input type="checkbox" id='numbers' onChange={(e) => setNumbers(e.target.checked)}/>
                </div>
                <div className="setting">
                    <label>Zawiera znaki</label>
                    <input type="checkbox" id='symbol' onChange={(e) => setSymbol(e.target.checked)}/>
                </div>

                <div className="container-result">
                    <button type='submit' id='generate'>Generuj</button>

                    <span id="result"></span>
                    <button id="clipboard">
                        <i class="fa-clipboard"></i>
                    </button>
                </div>
            </form>
            
        </section>
    )
}

export default PasswordGenerator
