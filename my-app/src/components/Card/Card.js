import React from "react"
import "./card.css"

const Card = (props) => {
    return(
         <div class="row mb-2">
         <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong className="name">{props.name}</strong>
              <h3 class="mb-0">
                <a className="title" href="#">{props.title}</a>
              </h3>
              <div className="date">{props.date}</div>
              <p class="cardtext">{props.cardtext}</p>
              <a href="#">Continue reading</a>
            </div>
          </div>
          </div>
          
        </div>
    )

}
export default Card
