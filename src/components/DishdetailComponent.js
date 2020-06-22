import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardHeader } from 'reactstrap'

class DishDetailed extends Component {

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardHeader>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
          </CardHeader>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );

  };

  renderComments(comments) {
    const cmnts = comments.map((comment) => {
      return (
        <ul className="list-unstyled">
          <li>{comment.comment}</li>
          <li>-- {comment.author}, {comment.date}</li>
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

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.selectedDish)}

          {this.renderComments(this.props.selectedDish.comments)}

        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default DishDetailed;
