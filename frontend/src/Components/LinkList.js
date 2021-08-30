import { directive } from "@babel/types";
import React from "react";

export default class LinkList extends React.Component {
    render(){
        return (
                this.props.links.map((link) => (
                    <div>
                        <a href={link.url} target="_blank"> {link.name} </a>
                        <span>
                            {link.tag}
                        </span>
                    </div>


                ))
        )


    }


}