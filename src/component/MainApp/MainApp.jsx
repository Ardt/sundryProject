import React, { Component } from 'react';
import TodoApp from '../prodList/todo';
import Nmap from '../Nmap/Nmap';

class MainApp extends Component {
    state = {  }

    render() {
        return (
            <div class="MainApp">
                <Nmap class="AppLayer1"/>
                <TodoApp class="AppLayer1"/>
            </div>
        );
    }
}
 
export default MainApp;