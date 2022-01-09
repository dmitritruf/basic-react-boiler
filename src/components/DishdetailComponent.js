import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    getComments(dish){
        if(dish == null)
            return (
                <div></div>
            )
        const comments = dish.comments.map((comment) => {
                return (
                    <p>{comment.comment}<br />--{comment.author}, {comment.date}</p>
                );
            });

        return comments;
    }
    render() {
        const dish = this.props.dishes;

        
        // const comments = dish.comments.map((comment) => {
        //     return (
        //         <p>{comment.comment}<br />--{comment.author}, {comment.date}</p>
        //     );
        // });
        if (dish != null)
            return (
                <div key={dish.id} className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {this.getComments(dish)}
                        {/* <p>{dish.comments.comment}<br />--{dish.comments.author}, {dish.comments.date}</p> */}
                    </div>


                </div>
            )

        return (
            <div></div>
        );


    }
}
export default DishDetail;