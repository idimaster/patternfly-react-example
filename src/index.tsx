import './app.less';
import './index.html';
import * as $ from 'jquery';
require('bootstrap');
require('bootstrap/js/popover');
let pt = require('patternfly/dist/js/patternfly');
//$().setupVerticalNavigation(true);

import * as React from 'react';
import { render } from 'react-dom';
import { Header, VNavbar, Sidebar } from 'patternfly-react';

const App = React.createClass({
    render: function() {
        return (<div>
                <VNavbar></VNavbar>
                <Sidebar></Sidebar>
                <div className="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-sub-menus   ">
                    <Header>Example</Header>
                    {this.props.children}
                </div>
            </div>
        );
    }
});


render(<App/>, document.getElementById('app-container'));
