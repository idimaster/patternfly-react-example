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
import { Header, VNavbar, NavItem, NavInfoList, NavDropDown, NavInfoItem, NavDropDownItem } from 'patternfly-react';

import { Sidebar } from './Sidebar'

class App extends React.Component<any, any> {

    render(): React.ReactElement<any> {
        return (<div>
                <VNavbar>
                    <VNavbar.Brand>
                        <img className="navbar-brand-icon" src="/assets/img/logo-alt.svg" alt=""/><img
                        className="navbar-brand-name" src="/assets/img/brand-alt.svg"
                        alt="PatternFly Enterprise Application"/>
                    </VNavbar.Brand>
                    <VNavbar.LeftPanel>
                        <NavItem><a href="#" target="_blank"
                                    className="nav-item-iconic nav-item-iconic-new-window"><span
                            title="Launch" className="fa fa-external-link"></span></a></NavItem>
                    </VNavbar.LeftPanel>
                    <VNavbar.RightPanel>
                        <NavInfoList label='Notification'>
                            <NavInfoItem label='Modified Datasources ExampleDS' />
                            <NavInfoItem label='Test Message' />
                            <NavInfoItem label='Error: System Failure' />
                        </NavInfoList>
                        <NavInfoList label='Notification'>
                            <NavInfoItem label='Modified Datasouxccc vxvc dgfgg fg  fff ff f  dfggfhdh rces ExampleDS' />
                            <NavInfoItem label='Test Message' />
                            <NavInfoItem label='Error: System Failure' />
                        </NavInfoList>
                        <NavDropDown name='Help' icon='pficon-help'>
                            <NavDropDownItem label='Help'/>
                            <NavDropDownItem label='About'/>
                        </NavDropDown>
                        <NavDropDown name='User' icon='pficon-user'>
                            <NavDropDownItem label='Preferences'/>
                            <NavDropDownItem label='Logout'/>
                        </NavDropDown>
                    </VNavbar.RightPanel>
                </VNavbar>
                <Sidebar></Sidebar>
                <div
                    className="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-sub-menus   ">
                    <Header>Example</Header>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


render(<App/>, document.getElementById('app-container'));

$().setupVerticalNavigation(true);
