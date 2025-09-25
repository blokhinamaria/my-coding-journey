import './ColorPicker.css'

import { useState } from 'react'

export default function ColorPicker() {

    const baseURL = 'https://www.thecolorapi.com'

    const defaultColors = [ '#000000', '#555555', '#CCCCCC', '#AAAAAA', '#FFFFFF'];

    const [ colorsHex, setColorsHex] = useState(defaultColors);    

    function getColor(formData) {
        const seedColorHex = formData.get('seed-color').slice(1);
        
        const colorScheme = formData.get('color-scheme');

        fetch(baseURL + `/scheme?hex=${seedColorHex}&mode=${colorScheme}&count=5`).then(res => res.json()).then(data => {
            console.log()
            setColorsHex(data.colors.map(color => color.hex.value))
        });
        document.getElementById('seed-color').setAttribute('defaultValue', `#${seedColorHex}`);
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
                <form action={getColor}>
                    <input type="color" id="seed-color" name="seed-color" aria-label="seed-color" defaultValue="#F55A5A"
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
                    <button>Get color scheme</button>
                </form>
            </header>
            <section id='colors'>
                <div className='color-blocks'>
                    {colorBlocks}
                </div>
            </section>
        </main>
    )
}