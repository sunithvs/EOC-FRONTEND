import React,{Component} from 'react';
import Event from './Event'
import Detail from './Detail'
import './gallery.css'

export class PhotoGallery extends Component{

    constructor(props){
        super(props);
        this.state={programs:[],isGallery: true,selected:[]}
        this.opendetail=this.opendetail.bind(this);
    }

    refreshList(){
       
        fetch(process.env.REACT_APP_API+"gallery/")
        .then(response=>response.json())
        .then(data=>{                    
            this.setState({programs:data})
        });
     }



    componentDidMount(){
        this.refreshList();
    }
    /*componentDidUpdate(){
        this.refreshList();
    }*/

    opendetail(data){
        this.setState({selected:data})
        this.setState({isGallery:false})

    }

    render(){
        let backtogallery=()=>this.setState({isGallery:true})

        const {programs} = this.state;

        if(this.state.isGallery){
            return(
                <div className='topborder'>
                    <div className='GalleryTittle'>Gallery</div>
                <div className='gallerybase galleyspacer'>
                    
                    {
                        programs.slice(0).reverse().map(newk=>
                            <Event key={newk.ProgramID} data ={newk} openeventdetail = {this.opendetail} />

                        )
                    }
                    
    
                </div>
                </div>
    
            )
            
        }else{
            return(
            <Detail backtogallery={backtogallery} data={this.state.selected} />
            )
        }
        
    }

}

export default PhotoGallery;