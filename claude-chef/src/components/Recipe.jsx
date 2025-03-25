import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>AI Chef Recommends:</h2>
            <br />
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}