import React from "react";
import './App.css';
import Table from "./Table";

class App extends React.Component {

    render() {

        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]

        return (
            <div>
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App;
