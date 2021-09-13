import React from "react"
import "./card.css"

const Card = (props) => {
    return(
      
            <div class="card-body d-flex flex-column align-items-start">
              <strong className="cname">{props.cname}</strong>
              <h3 class="mb-0">
                <a className="ctitle" href="#">{props.ctitle}</a>
              </h3>
              <div className="date">{props.date}</div>
              <p class="cardtext">{props.cardtext}</p>
              <a href="#">Continue reading</a>
          </div>
          
    )

}
export default Card
