import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody characterData={this.props.characterData}/>
            </table>
        )

    }
}

export default Table;