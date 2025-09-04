const Calculation = () => {
    const a = 10;
    const b = 10;
    return (
        <>
        <h3>Danh sách kết quả</h3>
        <ul>
            <li>{a} + {b} = {addition(a, b)}</li>
            <li>{a} - {b} = {division(a, b)}</li>
            <li>{a} * {b} = {multiplication(a, b)}</li>
            <li>{a} / {b} = {fraction(a, b)}</li>
        </ul>
        </>
    )
}

const addition = (a : number, b : number) : number =>{
    return a+b;
}
const division = (a : number, b : number) : number =>{
    return a-b;
}
const multiplication = (a : number, b : number) : number =>{
    return a*b;
}
const fraction = (a : number, b : number) : number =>{
    return a/b;
}

export default Calculation