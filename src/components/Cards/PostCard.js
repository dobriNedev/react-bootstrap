import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "../Buttons/AddButton";

const PostCard = ({ _id, imgUrl, title, fewWords }) => {
  const text = "button";
  return (
    <Card style={{ height: "450px" }}>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey={`/catalog/${_id}`}>
          <Nav.Item>
            <Nav.Link href={`/catalog/${_id}`}>Overview</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={`/catalog/${_id}/details`}>Details</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Card.Header>
      <Card.Body style={{ maxHeight: "100%", overflowY: "auto" }}>
        <Card.Img
          src={imgUrl}
          alt={`Image for ${title}`}
          style={{ objectFit: "cover", height: "250px" }}
        />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{fewWords}</Card.Text>
        {/* if Owner text=[edit, delete] and map button
            if User(!owner) text = [like, comment] and map button*/}
        <MyButton text={text} />
      </Card.Body>
    </Card>
  );
};

export default PostCard;
