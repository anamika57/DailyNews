import React, { Component } from "react";

export default class NewsItem extends Component {

  render(props) {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="my-3">

          <div className="card" style={{ width: "18rem"  }} >
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4EghSnJSFPI0IiFRHVz7XitNCKJBuLmclziJSNPbfTzummh9Qn6Pol06M-4c6C7W8CVsKQ&s":imageUrl} className="card-img-top"  alt="" />

            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
              </a>
         
            </div>
          </div>
         
          </div>
         
      </>
    );
  }
}
