import React, { useState } from 'react';
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
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

    const editTodo = (id, updatedTitle, updatedDescription) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription } : todo
        );
        setTodos(updatedTodos);
        setShowEditModal(false);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        setShowDeleteModal(false);
    };

    const handleEditClick = (todo) => {
        setCurrentTodoId(todo.id);
        setEditedTitle(todo.title);
        setEditedDescription(todo.description);
        setShowEditModal(true);
    };

    const handleDeleteClick = (id) => {
        setCurrentTodoId(id);
        setShowDeleteModal(true);
    };

    const handleSaveEdit = () => {
        if (currentTodoId !== null) {
            editTodo(currentTodoId, editedTitle, editedDescription);
        }
    };

    const handleConfirmDelete = () => {
        if (currentTodoId !== null) {
            deleteTodo(currentTodoId);
        }
    };

    // Emoji 
    const [showPicker, setShowPicker] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [text, setText] = useState('');

    const onEmojiClick = (emojiData) => {
        const newText = text.replace(/[\p{Emoji}]/gu, '')
        setText(newText + emojiData.emoji);
        setShowPicker(false);
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
                        <h5 onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}>
                            {todo.title}
                            {' '+ text}
                            <span
                                onClick={() => setShowPicker(!showPicker)}
                                style={{ cursor: 'pointer' }}
                            >
                                {hovered && (
                                    <>
                                        <span style={{ marginLeft: '5px', opacity: '0.5' }} >
                                            &#128522;
                                        </span>
                                    </>
                                )}
                            </span>
                            {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
                        </h5>
                        <p>{todo.description}</p>
                    </Col>
                    <Col xs={6} className="text-end">
                        <Button variant="warning" className="me-2" onClick={() => handleEditClick(todo)}>
                            <FaEdit />
                        </Button>
                        <Button variant="danger" onClick={() => handleDeleteClick(todo.id)}>
                            <FaTrashAlt />
                        </Button>
                    </Col>
                </Row>
            ))}

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

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
