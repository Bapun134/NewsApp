import React, { Component } from 'react'
  
export class NewItems extends Component {
  render() {
      let {titleName,descriptionName,imgUrl,newsUrl} = this.props;
    return (
        <>
              {/* Cards bootstrap */}
          <div className="card mb-3">
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{titleName}</h5>
              <p className="card-text">{descriptionName}</p>
              <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
            </div>
          </div>
        
        </>
    )
  }
}

export default NewItems
