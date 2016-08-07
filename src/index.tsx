import './app.less';
import './index.html';
require('bootstrap');

import * as React from 'react';
import { render } from 'react-dom';
import { Header } from 'patternfly-react';

const App = React.createClass({
    render: function() {
        return (<div>
                <Header>Example</Header>
                {this.props.children}
            </div>
        );
    }
});


render(<App/>, document.getElementById('app-container'));
