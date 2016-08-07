import './app.less';
import './index.html';
require('bootstrap');

import * as React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
    render: function() {
        return (<div>
                <p>Example</p>
                {this.props.children}
            </div>
        );
    }
});


render(<App/>, document.getElementById('app-container'));
