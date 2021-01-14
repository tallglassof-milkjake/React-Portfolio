import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <div className="row formRow">
                    <div className="col-6">
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label style={{color: "#f8f9fa"}}>Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name"/>
                                <Form.Text className="text-muted" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label style={{color: "#f8f9fa"}}>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group controlId="formTextArea">
                                <Form.Label style={{color: "#f8f9fa"}}>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Message"/>
                                <Form.Text className="text-muted" />
                            </Form.Group>

                            <Button className="btn btn-lg btn-outline-light" variant="custom" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormLayout;