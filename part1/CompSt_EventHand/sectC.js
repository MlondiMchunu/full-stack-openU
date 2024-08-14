const App = () => {
    const model = "Lambo"
    const year = 2023
    return (
        <>
            <div>
                <h1> Car Stock</h1>
                <Car model="Porsche" year={2022} />
                <Car model={model} year={year} />
            </div>
        </>
    )
}

const Car = (props) => {
    const manufactureYear =()=>{
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }
    return (
        <>
            <div>
                <p>Model: {props.model} '<br />' Year: {props.year}</p>
            </div>
        </>
    )
}