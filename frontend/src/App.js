import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";

import AddLink from './Components/AddLink';
import LinkList from './Components/LinkList';
import SearchLink from './Components/SearchLink';
import { listLink } from './Redux/actions';

import { connect } from "react-redux";
 
export class App extends React.Component {
  constructor(props){
    super(props);

    const storedLinks = localStorage.getItem("links");
    const parsedLinks = storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);
    this.state = {
      links: parsedLinks,
      search: "",
    }
  }

  componentDidMount(){
    this.props.listLinkMDP();
  }

    // onAddButtonAddLink = (name, url, tag) => {
    //   const newLinks = this.state.links.concat([{name, url, tag}]);
    //   this.setState({
    //     links:newLinks,
    //   })
    //   localStorage.setItem("links", JSON.stringify(newLinks));
    // }

    onSearchChange = (search) => {
      this.setState({
        search,
       })
     }

  render(){
    
    var searchLowerCase = this.state.search.toLowerCase();
    var filteredLinks = this.props.linksMSP.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(searchLowerCase) > -1 ||
        link.url.toLowerCase().indexOf(searchLowerCase) > -1 ||
        link.tag.toLowerCase().indexOf(searchLowerCase) > -1
      )
    })
    return(

      <div className="container main">
        <div className="row">
          <div className="col heading">
            SHARELINK FOR PROGRAMMERS 
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SearchLink onSearchChange={this.onSearchChange}  />
            <div className="list">
              <p className="listHeading">List of Links:</p>
              <hr/>
              <LinkList links={filteredLinks}/>
            </div>
          </div>
          <div className="col">
          {/* <AddLink onAddLink={this.onAddButtonAddLink} /> */}
          <AddLink/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    linksMSP: state.linkStore.linkList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      listLinkMDP: () => dispatch(listLink())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);