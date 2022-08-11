import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


import logo from "./assets/logo.png";


import "./Carousel_L.css";

export class Carousel_L extends Component{

  constructor(props){
      super(props);
      this.state={items:[]}
  }


  refreshList(){
       
    fetch(process.env.REACT_APP_API+"carousel/")
    .then(response=>response.json())
    .then(data=>{                    
        this.setState({items:data})
    });
  }

  componentDidMount(){
      this.refreshList();
  }
  /*componentDidUpdate(){
      this.refreshList();
  }*/


  render(){
    const {items} = this.state;

  if(window.innerWidth > 768)
    {
      return (

        
        
          <Carousel showArrows={true} autoPlay={false} infiniteLoop={true} stopOnHover={true} showThumbs={false} dynamicHeight={true}
            showStatus={false} >

            {
                items.map(newk=>               

                    <div key={newk.Key} className="cente">
                      <img className="imgsize" src={process.env.REACT_APP_GALLERY_API+newk.Carouselimage}  alt=""/>
                      <div className="writing">
                        {/*<h1>{newk.CarouselTittle}</h1>*/}
                        {/*<p>{newk.CarouselDesc}</p>*/}
                      </div>
                    </div>

                )
            }




           
            
          </Carousel>
        
      );
    }else{
      return(
      <div className="logocardiv">
        <img className="logocor" alt="logo" src={logo} />
        <div className='CAR_BASEBTNS'>


          <div className='CAR_ORNG_BTN unselectable' onClick={()=>{window.open("./Innovations",'_self')}}>Innovations</div>
          <div className='CAR_WHT_BTN unselectable' onClick={()=>{window.open("./SOCE",'_self')}}>SOCE</div>



        </div>
      </div>
      )
    }
  }
}

export default Carousel_L;
