import Photo from './Photo'
import Model from './Model'
import React, {Component} from 'react';
import Youtube from './Youtube'
import {BackspaceFill, InfoCircleFill} from 'react-bootstrap-icons';

export class Details extends Component {

    contentRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {ShowModel: false, url: ''}
        this.openmodel = this.openmodel.bind(this);
        this.gotourl = this.gotourl.bind(this);

    }

    openmodel(inurl) {
        this.setState({url: inurl})
        this.setState({ShowModel: true});
    }

    just = () => {
        return (
            <div>
                hello
            </div>
        )
    }

    gotourl() {
        if (this.props.data.link !== '#') {
            window.open(this.props.data.link)
        }
    }

    componentDidMount() {
        this.contentRef.current.innerHTML = this.props.data.description;
    }


    render() {
        let CloseModel = () => this.setState({ShowModel: false})

        return (
            <div>
                <Model url={this.state.url} show={this.state.ShowModel} onHide={CloseModel}/>
                <div>
                    <div className='INOdetailhead'
                         style={{backgroundImage: `linear-gradient(120deg,rgba(27,27,27,0.7), rgba(27,27,27,0.5)  ), url(${this.props.data.image})`}}>
                        <div className='INOdetailtittlebox'>
                            <div className='INOdetailtittle'>
                                {this.props.data.name}
                            </div>
                            <div className='INODetailDate'>
                                held on {this.props.data.date}
                            </div>
                        </div>
                    </div>

                    <div className='INODetailbox'>
                        <div className='INObtncls'>

                            <div className='INObtn1'>
                                <div className='INOgoback' onClick={this.props.backtogallery}>
                                    <BackspaceFill/> Back To Innovations
                                </div>
                            </div>
                            <div className='INObtn2'>
                                <div className='INOgoback'>
                                    < div onClick={this.gotourl}> Visit link <InfoCircleFill/></div>
                                </div>
                            </div>
                        </div>

                        <div className='INODetailDesc'>
                            <div ref={this.contentRef}>

                            </div>

                            <Youtube url={this.props.data.InnovationYBLink}/>

                            <div className='INOgallerybase photoadjust'>

                                <Photo openmod={this.openmodel} url={this.props.data.image}/>
                                {
                                    this.props.data.inoimages.map(newk =>
                                        <Photo openmod={this.openmodel} key={newk.id} url={newk.images}/>
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

