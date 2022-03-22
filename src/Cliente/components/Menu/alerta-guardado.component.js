import React from 'react';

import {Alert,Button} from "react-bootstrap";

const alertGuardado = () => {
    return (
        <Alert variant="success">
            <Alert.Heading>Hey, Registro Creado Con Exito !</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>

                <Button variant="outline form-control " type="submit"><b> C A N C E L A R  </b></Button>
        </Alert>
    )
};

export default alertGuardado;