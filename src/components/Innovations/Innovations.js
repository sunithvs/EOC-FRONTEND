import React,{Component} from 'react';
import Event from './Event'
import Detail from './Detail'
import './innovations.css'

export class Innovations extends Component{

    constructor(props){
        super(props);
        this.state={programs:[],isGallery: true,selected:[]}
        this.opendetail=this.opendetail.bind(this);
    }

    refreshList(){
       
        fetch(process.env.REACT_APP_API+"innovation/")
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
                <div className='INOBase'>
                <div className='INOGalleryTittle'>Student Innovations</div>
                <p>CUSAT is famous for research excellence and home to some of the most talented people from across India. Our work helps the lives of millions, solving real-world problems through a huge network of partnerships and collaborations. The breadth and interdisciplinary nature of our research sparks imaginative and inventive insights and solutions.</p>
                <div className='INOgallerybase INOgalleyspacer'>
                    
                    {
                        programs.slice(0).reverse().map(newk=>
                            <Event key={newk.InnovationID} data ={newk} openeventdetail = {this.opendetail} />

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

export default Innovations;