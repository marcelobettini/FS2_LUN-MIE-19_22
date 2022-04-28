//este componente funciona si no usamos el hook personalizado useCounter y desde el padre (Counter) invocamos este componente con las props num y setNum. Obviamente, en el padre también tenemos que declarar el estado con num y setNum a través de useState()

const CounterWithProps = ({ num, setNum }) => {
    const handleClick = (e) => {
        switch (e.target.dataset.id) {
            case "+":
                setNum(num + 1)
                break;
            case "-":
                setNum(num - 1)
                break;
            default:
                break
        }
    }
    return (
        <>
            < button onClick={handleClick} data-id="+" style={{ height: "3em", width: "3em" }}> +</button >
            <button data-id="-" onClick={handleClick} style={{ height: "3em", width: "3em" }}>-</button>
        </>
    )
}

export default CounterWithProps