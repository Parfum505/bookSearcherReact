import React, { Component } from 'react';
import { Form, InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchInput extends Component {
    render() {
        return (
            <Form onSubmit={event=>event.preventDefault()}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Type the book title here"
                            onChange={event=> this.props.change(event.target.value)}
                            onKeyPress={event=> this.props.press(event)}
                        />
                        <InputGroup.Append onClick={() => this.props.search()}>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={ faSearch } />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchInput;