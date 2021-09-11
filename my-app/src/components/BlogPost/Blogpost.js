import React from "react"
import "./blogpost.css"

const Blogpost = (props) => {
    return(
      <div className="BlogPost">
         <div class="row">
            <div class="col-md-8 blog-main">
                <h3 className="f">{props.f}</h3>
                <div class="blog-post">
                    <h2 className="postitle">{props.postitle}</h2>
                    <p className="postdate">{props.postdate} </p>
                    <p className="t">{props.t} </p>
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
                    
                    <ol >
                      <li className="li4">{props.li4}</li>
                      <li className="li5">{props.li5}</li>
                      <li className="li6">{props.li6}</li>
                    </ol>

                    <p className="cras">{props.cras}</p>
                    
                <a class="btn" href="#">{props.btn}</a>
                <a class="btn1" href="#">{props.btn1}</a>
                 
                </div>
            </div>
            <aside class="col-md-4 blog-sidebar">
                <div class="p-3 mb-3 rounded">
                <h4 class="fontitalic">{props.fontitalic}</h4>
            <p class="mb0">{props.mb0}</p>
          </div>

          <div class="p3">
            <h4 class="fonitalic">{props.fonitalic}</h4>
            <ol class="list-unstyled mb-0">
              <li className="date1"><a href="#">{props.date1}</a></li>
              <li className="date2"><a href="#">{props.date2}</a></li>
              <li className="date3"><a href="#">{props.date3}</a></li>
              <li className="date4"><a href="#">{props.date4}</a></li>
              <li className="date5"><a href="#">{props.date5}</a></li>
              <li className="date6"><a href="#">{props.date6}</a></li>
              <li className="date7"><a href="#">{props.date7}</a></li>
              <li className="date8"><a href="#">{props.date8}</a></li>
              <li className="date9"><a href="#">{props.date9}</a></li>
              <li className="date10"><a href="#">{props.date10}</a></li>
              <li className="date11"><a href="#">{props.date11}</a></li>
              <li className="date12"><a href="#">{props.date12}</a></li>
            </ol>
          </div>

          <div class="p3">
            <h4 class="else">{props.else}</h4>
            <ol class="list-unstyled">
              <li className="gt"><a href="#">{props.gt}</a></li>
              <li className="tw"><a href="#">{props.tw}</a></li>
              <li className="fb"><a href="#">{props.fb}</a></li>
            </ol>
          </div>
        </aside>

     

      
        </div>
      </div>
        
    )

}
export default Blogpost