import { Card, Button, ListGroup, Badge } from 'react-bootstrap';

const ProfileSidebar = ({ user,classes,onClose }) => {
    console.log(user, classes);
 
  
    // Filter classes to find the next upcoming class
    classes = classes.filter(c => c.startTime); // Ensure startTime exists
    const upcoming = classes.find(c => new Date(c.startTime) > new Date());

    return (
        <Card className="mb-4">
            <Card.Body className="text-center">
                <div className="mb-3">
                    <div className="rounded-circle bg-primary text-white d-inline-block" style={{ width: 60, height: 60, lineHeight: '60px', fontSize: 24 }}>
                        {user?.name?.charAt(0)}
                    </div>
                    <h5 className="mt-2 mb-0">{user?.name}</h5>
                    <small>{user?.email}</small>
                </div>

                <ListGroup variant="flush" className="mb-3 text-start">
                    <ListGroup.Item>
                        Enrolled Courses: <strong>{classes.length}</strong>
                    </ListGroup.Item>
                    {upcoming && (
                        <ListGroup.Item>
                            Next Class: <Badge bg="info">{upcoming.title}</Badge>
                        </ListGroup.Item>
                    )}
                </ListGroup>

                <div className="d-grid gap-2">
                    <Button to="edit-profile" variant="outline-primary" size="sm">Edit Profile</Button>
                    <Button variant="outline-secondary" size="sm">Settings</Button>
                    <Button variant="outline-danger" size="sm">Logout</Button>
                   
                    <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
                    
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProfileSidebar;