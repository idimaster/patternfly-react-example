import './app.less';
import './index.html';
import * as jQuery from 'jquery';
(global as any).$ = jQuery;
(global as any).jQuery = jQuery;
require('bootstrap');
require('bootstrap/js/popover');
require('patternfly/dist/js/patternfly');

import * as React from 'react';
import { render } from 'react-dom';
import { Header } from 'patternfly-react';

import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

class App extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return (<div>
                <Navbar/>
                <Sidebar></Sidebar>
                <div className="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-sub-menus   ">
                    <Header>Example</Header>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app-container'));

$().setupVerticalNavigation(true);
