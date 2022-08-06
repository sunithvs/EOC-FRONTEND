import "./Feedback.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { GeoAltFill,TelephoneFill,EnvelopeFill,DisplayFill} from 'react-bootstrap-icons';

function Feedback() {
  const [copy, setCopy] = useState(false);

  const sentmail=(e)=>{
    e.preventDefault();

    //window.location.href = "mailto:mail@example.org";
    var mes=e.target.Feedbackmessage.value;
    
    console.log(mes)
    var y=mes.replace(/\r\n|\r|\n/g, "</br>");

    var link = "mailto:eoc@cusat.ac.in?subject=Feedback from "+ e.target.formBasicName.value+" via Website &body=\n\n"+y
    window.open(link);
    
  }


  return (

   

   <div className="FBbackground">

     <div className="FB_CON_base">

     <div className="FBBOARD">
       <h1>Feedback</h1>

       <Form onSubmit={sentmail} >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Text" placeholder="Enter Name" />

          
        </Form.Group>

        <Form.Group className="mb-3" controlId="Feedbackmessage">
          <Form.Label>Feedback Message</Form.Label>
          <Form.Control className="textremain" as="textarea" rows={4} />
        </Form.Group>
        <Form.Text className="text-muted">
            This form is only a layout for mail.You will be redirected to your default email service on submission.
          </Form.Text>
        
        <Button className="FBBUttonSpacer" variant="primary" type="submit">
          Submit
        </Button>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
          <Form.Label>Or sent a mail directly to: </Form.Label>

          <div className="FBEMAIL" onClick={()=>{
            
            navigator.clipboard.writeText("eoc@cusat.ac.in")
            setCopy(true)
          }} >
            <h5>eoc@cusat.ac.in</h5>
            {
              copy&&<p className="FBCOPYIED"> Copied! </p>
            }
            {
              !copy&&<p className="FBCOPY"> Copy email</p>
            }
            
          </div>
          
        </Form.Group>


      </Form>
       
     </div>

     <div className='CON_box'>
         <h4>Contact Us</h4>
          <div>

            <div className="CON_Itembox">


              <div className="CON_icon"><GeoAltFill/></div>
              <div className="CON_cont" >
              <p className="CON_cont_HEAD">Address: </p>
              <p className="CON_cont">Equal Opportunity Cell</p>
              <p className="CON_cont">Ist FLOOR STUDENTS AMENITY CENTRE</p>
              <p className="CON_cont">CUSAT P.O, KOCHI-22</p>
              
              </div>
              
            </div>


            <div className="CON_Itembox">

              <div className="CON_icon"><TelephoneFill/></div>
              <div className="CON_cont" >
              <p className="CON_cont_HEAD">Phone: </p>
              <a className="CON_cont" href="tel:9495363385">9495363385</a>
              
                          
              </div>             

            </div>
            


            <div className="CON_Itembox">

              <div className="CON_icon"><EnvelopeFill/></div>
              <div className="CON_cont" >
              <p className="CON_cont_HEAD">Mail: </p>
              <a className="CON_cont" href="mailto:eoc@cusat.ac.in">eoc@cusat.ac.in</a>
                          
              </div>             

            </div>
            

            <div className="CON_Itembox">

              <div className="CON_icon"><DisplayFill/></div>
              <div className="CON_cont" >
              <p className="CON_cont_HEAD">Web: </p>
              <a className="CON_cont" href="http://ugcsct.cusat.ac.in/">ugcsct.cusat.ac.in</a>
                          
              </div>             

            </div>
            

          </div>
       </div>
   
       </div>
   
   </div>
  );
}





export default Feedback;