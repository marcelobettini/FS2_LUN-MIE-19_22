import { useGet } from "./hooks/useGet"
import { Container, Row, Col } from "react-bootstrap"
const ApiCall = () => {
    const [data, loading, error] = useGet("character")

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Ta todo rompido...</h3>;
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h1 className="text-center"> Cast of characters</h1>
                    <ul>
                        {data.results && data.results.map((char) => <li key={char.id}>{char.name}</li>)}
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

export default ApiCall