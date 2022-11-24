import React from "react";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      reviews: [],
    };
  }

  allReviews = this.state.reviews.map((review) => {
    return <div>{review}</div>;
  });

  render() {
    return (
      <>
        {this.allReviews}
        <form></form>
      </>
    );
  }
}
