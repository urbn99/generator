import React, { useState } from 'react'
import textData from './text-data';

function TextGenerator() {

    //generator tekstu
    const [countText, setCountText] = useState(0);
    const [text, setText] = useState([]);

    const textSubmit = (e) => {
        e.preventDefault();
        let amountText = parseInt(countText);

        setText(textData.slice(0, amountText));
    };

    


    return (
        <section className='container'>
            <h2>Generator Tekstu  </h2>
            <h3 className='title'>"W pustyni i w puszczy", <span>H. Sienkiewicz</span></h3>

            <form className='text-form' onSubmit={textSubmit}>
                <label>Ilość wersów</label>
                <input
                    type="number"
                    name="amountText"
                    id="amountText"
                    min='0'
                    max='5'
                    placeholder='np. 2'
                    onChange={(e) => setCountText(e.target.value)}

                />
                <button type='submit'>Generuj</button>
            </form>

            <article className="text">
                {text.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    );
                })}

            </article>
        </section>
    )
}

export default TextGenerator
