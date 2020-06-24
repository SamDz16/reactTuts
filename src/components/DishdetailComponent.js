import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

function RenderComments({ comments }) {
  const cmnts = comments.map((comment) => {
    return (
      <ul className="list-unstyled">
        <li>{comment.comment}</li>
        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
      </ul>
    );
  });

  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      {cmnts}
    </div>
  );
};

const DishDetail = (props) => {

  if (props.selectedDish != null) {
    return (
      <div className="container">
        <div className="row">

          <RenderDish dish={props.selectedDish} />

          <RenderComments comments={props.selectedDish.comments} />

        </div>
      </div>

    );
  } else {
    return (
      <div></div>
    );
  }

}

export default DishDetail;
