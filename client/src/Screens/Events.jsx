import React from "react";
import { Container, Row, Col } from "reactstrap";
import events from "../assets/DSCEvents";
import EventCard from "../Components/EventsCard.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/events.scss";

const Events = () => {
  const data = events.results;

  const toTimestamp = (strDate) => {
    strDate = strDate.split("-");
    const formattedDate = `${strDate[1]}-${strDate[0]}-${strDate[2]}`;
    return Date.parse(formattedDate);
  };

  const upcomingEvents = data.filter(
    (el) => toTimestamp(el.date) >= Date.now()
  );
  upcomingEvents.reverse();

  const pastEvents = data.filter((el) => toTimestamp(el.date) < Date.now());
  pastEvents.reverse();

  return (
    <Container fluid={true}>
      <Row>
        <h1 id="heading" className="ml-4 my-5">
          Our events
        </h1>
      </Row>

      <Row>
        <h1 className="ml-4">Upcoming events</h1>
      </Row>

      <Row className="mt-2 mb-4">
        {upcomingEvents.length === 0 ? (
          <Row>
            <Col>
              <h3 className="mx-4 mt-2 mb-5">
                Check out our <a href="https://gdsc.community.dev/maharaja-agrasen-institute-of-technology-delhi/" target="_blank" style={{ color: "red", textDecoration: "none" }}><u>events page</u></a> for information related to events.
              </h3>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {upcomingEvents.map((el) => {
          return (
            <Col md={3} className="my-3">
              <EventCard
                title={el.title}
                date={el.date}
                desc={el.description}
                link={el.link}
              />
            </Col>
          );
        })}
      </Row>

      <Row>
        <h1 className="ml-4">Past events</h1>
      </Row>

      <Row className="mt-2">
        {pastEvents.length === 0 ? (
          <Row>
            <Col>
              <h3 className="mx-4 mt-2 mb-5">There are no past events.</h3>
            </Col>
          </Row>
        ) : (
          ""
        )}
        {pastEvents.map((el) => {
          return (
            <Col md={3} className="my-3">
              <EventCard
                title={el.title}
                date={el.date}
                desc={el.description}
                link={el.link}
                image={el.image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Events;
