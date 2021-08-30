import React from "react";

export default class SearchLink extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search:"",
        };
    }

    onSearchLinkChange = (e) => {
        this.props.onSearchChange(e.currentTarget.value);
        this.setState({
            search: e.currentTarget.value,
        })    
    }
    
    render(){
        return (
            <div className="search">
                <input placeholder="Search" type="text" value={this.state.search} onChange={this.onSearchLinkChange}/>
            </div>
        )
    }
}