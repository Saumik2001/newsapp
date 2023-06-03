import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let {title,description,imgUrl,newsUrl,date} = this.props;
        return (
            <div className='my-3 '>
                <div className="card" style={{width: "18rem"}}>
                <img src={imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-muted">Last  updated {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
            </div>
            </div>
        )
    }
}

export default Newsitem