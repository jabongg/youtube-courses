import { Card, CardBody } from "reactstrap";

function Header() {
    return(    
        <div>
            <Card className="my-2 bg-warning">
                <CardBody className="text-center my-2"><h1>Welcome To Courses App</h1></CardBody>
            </Card>           
        </div>   
    );
}

export default Header;