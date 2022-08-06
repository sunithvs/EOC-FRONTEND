import Item from './item'
import React,{Component} from 'react';
import './viewnesw.css'


export class News extends Component{
    constructor(props){
        super(props);
        this.state={items:[]}
    }
    

    refreshList(){
       
       fetch(process.env.REACT_APP_API+"event/")
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
        return(
            <div>

                <ul className='list'>
                    {
                        items.map(newk=>
                            <Item key={newk.Key} name = {newk.EventName} desc={newk.EventDisc} elink={newk.EventLink} />

                        )
                    }
                </ul>

            </div>

        )
    }
}

export default News;