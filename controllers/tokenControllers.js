const jwt = require('jsonwebtoken');

const JWT_SECRET = 'newtonSchool';

/*
Implement a controller to encode a payload into a JSON Web Token (JWT) and return the token.

Instructions:

The controller expects an HTTP POST request with a payload in the request body.
The payload should be passed in the request body.
The controller should encode the payload using the provided secret key.
If the payload is successfully encoded, the controller should respond with a 200 OK status and a JSON object containing a 'token' field with the encoded JWT and a 'status' field with value 'Success'.
If the payload cannot be encoded, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong'.

Input:
{
"name": "John Doe",
"email": "johndoe@example.com",
"role": "admin"
}

Output:
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
status: 'Success'
}
*/
const encodePayload = async (req, res) => {
    try {
        //Write your code here
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Something went wrong',
            status: 'Error',
            error: err,
        });
    }
};

/*
Implement a controller to decode a JSON Web Token (JWT) and return the decoded payload

Instructions:

The controller expects an HTTP POST request with a JWT in the request body.
The JWT should be passed in the 'token' field of the request body.
The controller should attempt to decode the JWT using the provided secret key.
If the JWT is successfully decoded, the controller should respond with a 200 OK status and a JSON object containing a 'payload' field with the decoded token payload and a 'status' field with value 'Success'.
If the JWT is invalid or cannot be decoded, the controller should respond with a 401 Unauthorized status and a JSON object containing a 'message' field with value 'Invalid token'.

Input: 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

Output:
{
    "payload": {
        "userId": "64100c9a2b615267996ce75c",
        "iat": 1678773410,
        "exp": 1678777010
    },
    status: 'Success'
}

*/

const decodeToken = (req, res) => {
    try {
       //Write your code here
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { encodePayload, decodeToken };