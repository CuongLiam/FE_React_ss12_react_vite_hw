const Calculation = () => {
    const a = 10;
    const b = 10;
    return (
        <>
        <h3>Danh sách kết quả</h3>
        <ul>
            <li>{a} + {b} = {a + b}</li>
            <li>{a} - {b} = {a - b}</li>
            <li>{a} * {b} = {a * b}</li>
            <li>{a} / {b} = {a / b}</li>
        </ul>
        </>
    )
}

export default Calculation