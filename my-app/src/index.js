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

        <Card 
         name="World" 
         title ="Featured post" 
         date="Nov 12" 
         cardtext="This is a wider card with supporting text below as a natural lead-in to additional content." />

         <Card 
         name="Design"
         title ="Post title" 
         date="Nov 11" 
         cardtext="This is a wider card with supporting text below as a natural lead-in to additional content." />
         
       </div>
         
      <div className="container">

           <Blogpost 
           f="From the Firehose"
           t="This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."
           postitle="Sample blog post" 
           postdate="January 1, 2014 by Mark" 
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
           cras="Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis."
           li4="Vestibulum id ligula porta felis euismod semper."
           li5="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
           li6=" Maecenas sed diam eget risus varius blandit sit amet non magna.."
           fontitalic="About"
           mb0="Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
           fonitalic="Archives"
           date1="March 2014"
           date2="February 2012"
           date3="January 2014"
           date4="December 2013"
           date5="November 2013"
           date6="October 2013"
           date7="October 2013"
           date8="September 2013"
           date9="July 2013"
           date10="June 2013"
           date11="May 2013"
           date12="April 2013"
           else="Elsewhere"
           gt="Github"
           tw="Twitter"
           fb="Facebook"
           />

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
           btn="Older"
           btn1="Newer"
           />
           
         
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

