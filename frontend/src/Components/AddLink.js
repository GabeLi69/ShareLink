import { directive } from "@babel/types";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { connect } from "react-redux";
import { addLink } from "../Redux/actions";

export class AddLink extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            modal: false,
            name: "",
            url: "",
            tag: "",
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };
    
    addLink = (e) => {
        const link = {
            name: this.state.name,
            url: this.state.url,
            tag: this.state.tag
        }
        this.props.addLinkMDP(link);
        this.setState({
            modal:false,
            name: "",
            url: "",
            tag: "",
        });
    }
 
    onNameChange = (e) => {
        this.setState({
            name: e.currentTarget.value,
        })
    }

    onUrlChange = (e) => {
        this.setState({
            url: e.currentTarget.value,
        })
    }

    onTagChange = (e) => {
        this.setState({
            tag:e.currentTarget.value,
        })
    }

    render(){
        return(
            <div>
                <Button className="addButton" color="primary" onClick={this.toggle}> Add Link </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Add a Link!
                    </ModalHeader>

                    <ModalBody>
                        <label>Name of Link: </label>
                        <br/>
                        <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                       
                        <br/>

                        <label>URL: </label>
                        <br/>
                        <input type="text" value={this.state.url} onChange={this.onUrlChange}/>
                        
                        <br/>
                        
                        <label>Tag: </label>
                        <br/>
                        <input type="text" value={this.state.tag} onChange={this.onTagChange}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.addLink}>
                            Add
                        </Button>
                        <Button color="danger" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
    
    const mapDispatchToProps = (dispatch) => {
        return{
            addLinkMDP: (link) => dispatch(addLink(link))
        }
    }



export default connect(null, mapDispatchToProps)(AddLink)