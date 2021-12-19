import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    render(){
        const dish = this.props.dishes;
        const comments = this.props.dishes.comments.map((comment) => {
            return (
              <p>{comment.comment}<br/>--{comment.author}, {comment.date}</p>
            );
        });
        if (dish != null)
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div> 
                    <div  className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {comments}
                    </div>

               
                </div>           
            )
        else{
            return(
                <div></div>
            )
        }
       
    }
}
export default DishDetail;