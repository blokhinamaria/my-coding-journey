import ReactMarkdown from 'react-markdown'

export default function Recipe({ recipe }) {
    return (
        <section>
            <h2>Chef Claude's Recommended Recipe</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    )
}