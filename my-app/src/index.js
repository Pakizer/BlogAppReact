import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Card from './components/Card/Card';
import Blogpost from './components/BlogPost/Blogpost';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <>
    <div>
      <div className="container">

        <Header/>

        <div className="navbar" >
        <Navbar text="World"/> 
        <Navbar text="U.S."/>
        <Navbar text="Technology"/>
        <Navbar text="Design"/>
        <Navbar text="Culture"/>
        <Navbar text="Business"/>
        <Navbar text="Politics"/>
        <Navbar text="Opinion"/>
        <Navbar text="Science"/>
        <Navbar text="Health"/>
        <Navbar text="Style"/>
        <Navbar text="Travel"/>
        </div>

        <Jumbotron/>

        <div class="row mb-2">
         <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <Card 
              cname="World" 
              ctitle ="Featured post" 
              date="Nov 12" 
              cardtext="This is a wider card with supporting text below as a natural lead-in to additional content." />
             <img className="card-img-right flex-auto d-none d-md-block" data-src="" alt="Card image cap" ></img>

          </div>
         </div>  

          <div class="col-md-6">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
               <Card 
                 cname="Design"
                 ctitle ="Post title" 
                 date="Nov 11" 
                 cardtext="This is a wider card with supporting text below as a natural lead-in to additional content." />
              <img className="card-img-right flex-auto d-none d-md-block" data-src="" alt="Card image cap" ></img>
            </div>
          </div> 

        </div>
      
        <div class="row">
          <div class="col-md-8">
             <h3 class="pb-3 mb-4 font-italic border-bottom">
               From the Firehose
             </h3>
               <Blogpost 
               postitle="Sample blog post" 
               postdate="January 1, 2014 by Mark" 
               title="This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."
               a="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
               b="Curabitur blandit tempus porttitor.Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
               c="Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
               head1="Heading" 
               d="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
               head2="Sub-heading"
               pt="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
               donec="Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
               li1="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
               li2="Donec id elit non mi porta gravida at eget metus."
               li3="Nulla vitae elit libero, a pharetra augue."
               
               />
               
               <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
               </ol>
               <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>

              <Blogpost
              postitle="Another blog post" 
              postdate="December 23, 2013 by Jacob" 
              a="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
              b="Curabitur blandit tempus porttitor.Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
              c="Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
              d="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
              />

              <Blogpost
              postitle="New feature" 
              postdate="December 14, 2013 by Chris" 
              a="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
              li1="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
              li2="Donec id elit non mi porta gravida at eget metus."
              li3="Nulla vitae elit libero, a pharetra augue."
              c="Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
              donec="Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
              
              />
             <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
          </nav> 
 
           </div>
           <aside class="col-md-4 blog-sidebar">
            <div class="p-3 mb-3 bg-light rounded"> 
              <h4 class="font-italic">About</h4>
              <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div class="p-3">
              <h4 class="font-italic">Archives</h4>
                <ol class="list-unstyled mb-0">
                  <li><a href="#">March 2014</a></li>
                  <li><a href="#">February 2014</a></li>
                  <li><a href="#">January 2014</a></li>
                  <li><a href="#">December 2013</a></li>
                  <li><a href="#">November 2013</a></li>
                  <li><a href="#">October 2013</a></li>
                  <li><a href="#">September 2013</a></li>
                  <li><a href="#">August 2013</a></li>
                  <li><a href="#">July 2013</a></li>
                  <li><a href="#">June 2013</a></li>
                  <li><a href="#">May 2013</a></li>
                  <li><a href="#">April 2013</a></li>
                  </ol>
              </div>
              
            <div class="p-3">
                <h4 class="font-italic">Elsewhere</h4>
                  <ol class="list-unstyled">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                  </ol>
              </div>
           </aside> 
      </div>   
     

    </div>  
    <Footer/>  

    </div>
         
    </>
  )
}

export default App;



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

