import React, { useState } from 'react';
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);

    const addTodo = () => {
        if (title && description) {
            const newTodo = {
                id: Date.now(),
                title,
                description,
            };
            setTodos([...todos, newTodo]);
            setTitle('');
            setDescription('');
        }
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        setShowDeleteModal(false);
    };

    const handleDeleteClick = (id) => {
        setCurrentTodoId(id);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (currentTodoId !== null) {
            deleteTodo(currentTodoId);
        }
    };

    return (
        <Container>
            <h2 className="text-center my-4">Task Manager</h2>
            <hr />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter todo title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter todo description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={addTodo}>
                    Add Todo
                </Button>
            </Form>

            <hr />

            {todos.map((todo) => (
                <Row className="align-items-center mb-3" key={todo.id}>
                    <Col xs={6}>
                        <h5>{todo.title}</h5>
                        <p>{todo.description}</p>
                    </Col>
                    <Col xs={6} className="text-end">
                        <Button variant="warning" className="me-2">
                            <FaEdit />
                        </Button>
                        <Button variant="danger" onClick={() => handleDeleteClick(todo.id)}>
                            <FaTrashAlt />
                        </Button>
                    </Col>
                </Row>
            ))}

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Todo;
