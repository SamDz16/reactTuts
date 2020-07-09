import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is : " + JSON.stringify(values));
    alert("Current State is : " + JSON.stringify(values));
  };

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-comment fa-lg"></span> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

          <ModalBody>

            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

              <Row className="form-group">

                <Label md={12} htmlFor="author">Raiting</Label>
                <Col>
                  <Control.select model=".raiting" name="raiting"
                    className="form-control">

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="author" md={12}>Your Name</Label>
                <Col>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }} />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="message" md={12}>Your Feedback</Label>
                <Col>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6"
                    className="form-control" />
                </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>

            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
};

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
      <CommentForm />
    </div>
  );
};

const DishDetail = (props) => {

  console.log(props.comments)
  if (props.dish != null) {
    return (
      <div className="container">

        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className="row">

          <RenderDish dish={props.dish} />

          <RenderComments comments={props.comments} />

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
