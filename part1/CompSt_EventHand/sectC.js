const App = () => {
    const model = "Lambo"
    const year = 2023
    return (
        <>
            <div>

            </div>
        </>
    )
}

const Car = (props) => {
    return (
        <>
            <div>
                <p>Model: {props.model} '<br />' Year: {props.year}</p>
            </div>
        </>
    )
}