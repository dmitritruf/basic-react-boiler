import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function GetComments({ dish }) {
    if (dish == null) return <div></div>;
    const comments = dish.comments.map((comment) => {
        return (
            <p>
                {comment.comment}
                <br />
                --{comment.author}, {comment.date}
            </p>
        );
    });

    return comments;
}

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
const DishDetail = (props) => {
    //const dish = this.props.dish;
    console.log("DishDetail k andar hai");

    if (props.dish != null)
        return (
            <div class="container">
                <div key={props.dish.id} className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}></RenderDish>
                    </div>
                    <div key={props.dish.id} className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        <GetComments dish={props.dish}></GetComments>
                        {/* <p>{dish.comments.comment}<br />--{dish.comments.author}, {dish.comments.date}</p> */}
                    </div>
                </div>
            </div>
        );

    return <div></div>;
};

export default DishDetail;
