import React from "react";

class TableBody extends React.Component {
    render() {
        const rows = this.props.characterData.map((row,index)=>{
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                </tr>
            )
        })
        return (
            <tbody>{rows}</tbody>
        )

    }
}

export default TableBody;