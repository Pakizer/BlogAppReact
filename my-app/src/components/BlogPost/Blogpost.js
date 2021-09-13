import React from "react"
import "./blogpost.css"

const Blogpost = (props) => {
    return(
      <div>
         <div className="Post">
           <h2 className="postitle">{props.postitle}</h2>
            <p className="postdate">{props.postdate} </p>
            <p className="title">{props.title} </p>
            <p className="a">{props.a}</p>
            <blockquote >
              <p className="b">{props.b}</p>
            </blockquote>
            <p className="c">{props.c}</p>
            <h2 className="head1">{props.head1}</h2>
            <p className="d">{props.d}</p>
            <h2 className="head2">{props.head2}</h2>
            <p className="pt">{props.pt}</p>
            <h2 className="head2">{props.head2}</h2>                    
            <p className="pt">{props.pt}</p>

            <ul>
              <li className="li1">{props.li1}</li>
              <li className="li2">{props.li2}</li>
              <li className="li3">{props.li3}</li>
             </ul>
            <p className="donec">{props.donec}</p>
        </div>
        
      </div>

        
    )

}
export default Blogpost