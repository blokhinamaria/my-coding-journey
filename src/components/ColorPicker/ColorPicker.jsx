import './ColorPicker.css'

import { useState } from 'react'

export default function ColorPicker() {

    const baseURL = 'https://www.thecolorapi.com'

    const defaultColors = [ '#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3'];

    const [ colorsHex, setColorsHex] = useState(defaultColors);    
    const [ selectedColorValue, setSelectedColorValue ] = useState('');

    function getColor(formData) {
        const seedColorHex = formData.get('seed-color').slice(1);
        const colorScheme = formData.get('color-scheme');

        fetch(baseURL + `/scheme?hex=${seedColorHex}&mode=${colorScheme}&count=5`).then(res => res.json()).then(data => {
            console.log(data.colors)
            setColorsHex(data.colors.map(color => color.hex.value))
        });
        document.querySelector(`[value=${colorScheme}]`).setAttribute('selected', 'selected');
    } 

    const colorBlocks = colorsHex.map(color => {
            return (
                <div key={color}>
                    <div  className='swatch' style={{backgroundColor:color}}></div>
                    <div className='code-block'>
                        <p className='swatch-code'>{color}</p>
                    </div>
                </div>
            )
        }
    )  

    return (
        <main className="color-picker-main">
            <header>
                <form action={getColor} className='color-picker-form'>
                    <input type="color" id="seed-color" name="seed-color" aria-label="seed-color" defaultValue={selectedColorValue} onChange={(e) => setSelectedColorValue(e.target.value)}
                    />
                    <select id='color-scheme' name='color-scheme'>
                        <option value='monochrome'>Monochrome</option>
                        <option value='monochrome-dark'>Monochrome-dark</option>
                        <option value='monochrome-light'>Monochrome-light</option>
                        <option value='analogic'>Analogic</option>
                        <option value='complement'>Complement</option>
                        <option value='analogic-complement'>Analogic-complement</option>
                        <option value='triad'>Triad</option>
                        <option value='quad'>Quad</option>
                    </select>
                    <button type='submit'>Get color scheme</button>
                </form>
            </header>
            <section id='colors' className='color-blocks'>
                
                    {colorBlocks}
                
            </section>
        </main>
    )
}