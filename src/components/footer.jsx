import React from 'react';
import ReactDOM from 'react-dom';



class CopyRights extends React.Component {
    constructor(){
        super();
        this.state = {
            text: "code and design by Maria Gawor",
        }
    }
render(){
    return <div className = "CopyRights">{this.state.text}</div>

}
}

class SocialMedia extends React.Component {
render(){
    return (<div className = "socialMedia">
       <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        <i className="fa fa fa-etsy fa-2x" aria-hidden="true"></i>
    </div>);
}
}




 export default class Footer extends React.Component {
    render(){
        return <div style = {{
                height: "45px",
                width:"1200px",
                marginTop: "-30px"
            }}>
            <CopyRights/>
            <SocialMedia/>
        </div>

        }
}
