import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date, source}=this.props; // as we are using className based component so we can access props in that fashion.
    return (
    <div>
        {/*<div className="card" style={{width: "18rem"}}>*/}
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
        <img src={!imageUrl?"https://images.cnbctv18.com/wp-content/uploads/2021/09/bse-1019x573.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}.....</h5>
          <p className="card-text">{description}.....</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
          {/* first we make the date as a string and then convert it to GMTString*/ }
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          {/* we use _blank so that page open in new tab*/ }
        </div>
      </div>
    </div>);
  }
}

export default NewsItem;
