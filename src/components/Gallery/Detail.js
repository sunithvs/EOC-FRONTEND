import Photo from './Photo'
import Model from './Model'
import React,{Component} from 'react';
import { BackspaceFill} from 'react-bootstrap-icons';

export class Details extends Component{
    constructor(props){
        super(props);
        this.state={ShowModel:false,url:''}
        this.openmodel=this.openmodel.bind(this);
        this.gotourl=this.gotourl.bind(this);

    }

    openmodel(inurl){
        this.setState({url:inurl}) 
        this.setState({ShowModel:true});
    }
    just=()=>
    {
        return(
            <div>
                hello
            </div>
        )
    }
    gotourl()
    {   
        if(this.props.data.ProgramLink !== '#'){
            window.open(this.props.data.ProgramLink)
        }
        
        
        
    }

    


    render(){
        let CloseModel =()=>this.setState({ShowModel:false})

    
    return (  
        <div>
            <Model url={this.state.url} show={this.state.ShowModel} onHide={CloseModel} />
            <div>
                <div className='detailhead' style={{ backgroundImage: `linear-gradient(120deg,rgba(27,27,27,0.7), rgba(27,27,27,0.5)  ), url(${process.env.REACT_APP_GALLERY_API+this.props.data.image})` }}>
                    
                </div>

                <div className='Detailbox'>
                    <div className='btncls'>

                    <div className='btn1'>
                        <div className='goback' onClick={this.props.backtogallery}>
                        <BackspaceFill/>  Back To gallery
                        </div>
                        
                        </div>
                    <div className='btn2'>
                        
                                    
                        
                        
                        </div>
                    

                    </div>

                    <div className='detailtittlebox'>
                        <div className='detailtittle'>
                            {this.props.data.ProgramName}
                        </div>
                        <div className='DetailDate'>
                            held on {this.props.data.ProgramDate}
                        </div>
                        </div>
                    
                    <div className='DetailDesc'>
                        <p>
                        {this.props.data.ProgramDesc}
                        </p>

                        <div className='phototittl'>
                            Photos
                        </div>

                        <div className='gallerybase photoadjust'>
                        
                        <Photo openmod={this.openmodel} url={process.env.REACT_APP_GALLERY_API+this.props.data.image}/>

                        {
                            this.props.data.imagges.map(newk=>
                                <Photo openmod={this.openmodel} key={newk.id} url={process.env.REACT_APP_GALLERY_API+newk.images}/>                           

                            )
                        }
                        

                        
                        
                    

                    </div>
                    </div>
                    
                    

                </div>
            </div>
        

        
        </div>

    );
 }
}

export default Details;

//`url(${props.url})`