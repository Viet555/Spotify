import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
const Pagebanned = () => {
    const [show, setShow] = useState(true);
    return (
        <>

            <Alert variant="danger my-5" >
                <Alert.Heading style={{ fontSize: '30px' }}>403 ERROR</Alert.Heading>
                <p style={{ fontSize: '20px' }}>
                    You do not have permission to access this resource.
                </p>
            </Alert>

        </>
    )
}
export default Pagebanned