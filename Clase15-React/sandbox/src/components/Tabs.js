import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";


const Tabs = () => {
    const URL = "https://jsonplaceholder.typicode.com/";
    const [endpoint, setEndpoint] = useState("posts");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL + endpoint)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.log(err))
    }, [endpoint]);

    return (

        <Container>
            <h5 className="text-center my-5">Datos de JsonPlaceHolder</h5>
            <Row className="justify-content-center">
                <Button onClick={() => setEndpoint("posts")} className="btn btn-success my-1 w-25">POSTS</Button>
                <Button onClick={() => setEndpoint("users")} className="btn btn-warning my-1 w-25">USERS</Button>
                <Button onClick={() => setEndpoint("comments")} className="btn btn-primary my-1 w-25">COMMENTS</Button>

                <section>
                    {/* elaborar un render condicional, de acuerdo al tipo de recurso
                    que llega desde la API (recuerden, posts, users y comments no comparten las mismas propiedades, a excepción del id. Entonces, de acuerdo al endpoint será el render) */}
                    {endpoint === "users" && data.map((el, index) => {
                        return (
                            <div key={index} className="fw-bold">
                                <p>Name: <span className="fw-normal">{el.name}</span></p>
                                <p>Email: <span className="fw-normal">{el.email}</span></p>
                                <p>Username: <span className="fw-normal">{el.username}</span></p>
                                <hr />
                            </div>
                        )
                    })
                    }
                    {endpoint === "posts" && data.map((el) => {
                        return (
                            <div key={el.id} className="fw-bold">
                                <h4>{el.title}</h4>
                                <p>{el.body}</p>
                                <hr />
                            </div>
                        )
                    })
                    }
                    {endpoint === "comments" && data.map((el) => {
                        return (
                            <div key={el.id} className="fw-bold">
                                <h4 className="mb-3">{el.name}</h4>
                                <span>Comment by: {el.email}</span>
                                <p>{el.body}</p>
                                <hr />
                            </div>
                        )
                    })
                    }










                </section>
            </Row>
        </Container>
    )
}

export default Tabs

