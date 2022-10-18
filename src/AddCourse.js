import React, { Fragment } from 'react';
import { FormGroup, Form, Container, Button } from 'reactstrap';

const AddCourse = () => {
    return (
        <Fragment>
            <h1 className='my-3'>Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <label htmlFor="userid">Course Id</label>
                    <input type="text" placeholder='enter here' name='userid' id='userid'></input>
                </FormGroup>

                <FormGroup>
                    <label  htmlFor="title">Course Title</label>
                    <input type="text" id="title" placeholder='input title here' />
                </FormGroup>

                <FormGroup>
                    <label  htmlFor="description">Description</label>
                    <input type="textarea" placeholder='enter description' id='description'style={{width : 500, height : 300}}/>
                </FormGroup>

                <Container>
                    <Button color='primary'>Add Course</Button>
                    <Button color='dark'>Add Course</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;