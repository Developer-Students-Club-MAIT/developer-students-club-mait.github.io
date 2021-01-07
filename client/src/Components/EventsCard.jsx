import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const EventCard = ({ title, desc, date, image, link }) => {
  const navigate = () => {
    window.location = `${link}`;
  };

  return (
    <div>
      <Card className="event-card">
        <CardImg top width="100%" src={image} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {date}
          </CardSubtitle>
          <CardText>{desc}</CardText>
          <Button className="check-now-btn" onClick={navigate}>
            Check now
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
