import React from 'react';
import {
    Card, CardTitle, CardHeader, CardBody, CardText, CardFooter, Button, Container, CardSubtitle
} from 'reactstrap';

const Course = ({course}) => {
    return(
        <Card>
            <CardBody>
                <CardTitle className="fw-bold">
                    {course.title}
                </CardTitle>
                <CardText>{course.description}</CardText>
                <Container /*className='text-center'*/>
                    <Button color='danger mr-4'>Delete</Button>
                    <Button color='warning ml-4'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
};

export default Course;