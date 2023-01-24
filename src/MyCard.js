import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap"
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150px" width="150px"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                  <h1>
                    <span style={{paddingRight:"5px"}}>{details.name?.title}</span>
                    <span>{details.name?.first}</span>
                    <span>{details.name?.last}</span>
                  </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>
                    {details.location?.city} 
                    <p> {details.phone} <FaPhone/></p>
                    <h5><FaEnvelope/> {details.email}</h5>
                </CardText>
                <button>{details.dob?.age}</button>
            </CardBody>
        </Card>
    ); 
}

export default MyCard;