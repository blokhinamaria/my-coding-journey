import { Link } from "react-router-dom"

export default function Header( {title, buttonLink, buttonText}) {
    return (
        <header>
                <div className='container'>
                    <h1>{title}</h1>
                    <Link to={buttonLink}>{buttonText}</Link>
                </div>
        </header>
    )
}