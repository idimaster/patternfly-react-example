import './app.less';
import './index.html';
import * as jQuery from 'jquery';
(global as any).$ = jQuery;
(global as any).jQuery = jQuery;
require('bootstrap');
require('bootstrap/js/popover');
require('patternfly/dist/js/patternfly');

import * as React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, withRouter} from 'react-router'

import {VNavbar, NavItem, NavInfoList, NavDropDown, NavInfoItem, NavDropDownItem} from 'patternfly-react';
import {Sidebar, SidebarItem, SidebarItemList, SidebarListItem} from 'patternfly-react';
import {CommandPayload} from 'patternfly-react';

import {DashboardExample} from './dashboard/DashboardExample';
import {ListViewExample} from './list/ListViewExample';
import {CardExample} from './card/CardExample';
import {WizardExample} from './wizard/WizardExample';
import {TableExample} from './table/TableExample';

@withRouter
class App extends React.Component<any, {active: string}> {
    constructor(props : any){
        super(props);
        this.state = { active: 'dashboard' };
    }

    private handleTopMenu = (event: CommandPayload) => {
        alert(event.command);
    };

    private handleSideMenu = (event: CommandPayload) => {
        this.setState({active: event.command})
        this.props.router.push(event.payload)
    };

    private handleClear = (id: string) => {
        alert('Clear ' + id);
    };

    render(): React.ReactElement<any> {
        return (<div>
                <VNavbar>
                    <VNavbar.Brand>
                        <img className="navbar-brand-icon" src="http://www.patternfly.org/assets/img/logo-alt.svg" alt=""/><img
                        className="navbar-brand-name" src="http://www.patternfly.org/assets/img/brand-alt.svg"
                        alt="PatternFly Enterprise Application"/>
                    </VNavbar.Brand>
                    <VNavbar.LeftPanel>
                        <NavItem><a href="#" target="_blank"
                                    className="nav-item-iconic nav-item-iconic-new-window"><span
                            title="Launch" className="fa fa-external-link"></span></a></NavItem>
                    </VNavbar.LeftPanel>
                    <VNavbar.RightPanel>
                        <NavInfoList id='id1' label='Notification' onClear={this.handleClear}>
                            <NavInfoItem label='Modified Datasources ExampleDS' />
                            <NavInfoItem label='Test Message' />
                            <NavInfoItem label='Error: System Failure' />
                        </NavInfoList>
                        <NavDropDown name='Help' icon='pficon-help'>
                            <NavDropDownItem label='Help' onSelect={this.handleTopMenu} payload={{command: 'help'}}/>
                            <NavDropDownItem label='About' onSelect={this.handleTopMenu} payload={{command: 'about'}}/>
                        </NavDropDown>
                        <NavDropDown name='User' icon='pficon-user'>
                            <NavDropDownItem label='Preferences' onSelect={this.handleTopMenu} payload={{command: 'preferences'}}/>
                            <NavDropDownItem label='Logout' onSelect={this.handleTopMenu} payload={{command: 'logout'}}/>
                        </NavDropDown>
                    </VNavbar.RightPanel>
                </VNavbar>
                <Sidebar>
                    <SidebarItem active={this.state.active == 'dashboard'} icon='fa-dashboard' label='Dashboard' onSelect={this.handleSideMenu} payload={{command: 'dashboard', payload: '/'}}/>
                    <SidebarItemList active={this.state.active == 'view'} icon='fa-space-shuttle' label='Content View'>
                        <SidebarListItem label='Card View' onSelect={this.handleSideMenu} payload={{command: 'view', payload: '/card'}}/>
                        <SidebarListItem label='List View' onSelect={this.handleSideMenu} payload={{command: 'view', payload: '/list'}}/>
                        <SidebarListItem label='Table View' onSelect={this.handleSideMenu} payload={{command: 'view', payload: '/table'}}/>
                    </SidebarItemList>
                    <SidebarItemList active={this.state.active == 'communication'} icon='fa-graduation-cap' label='Communication'>
                        <SidebarListItem label='Wizard' onSelect={this.handleSideMenu} payload={{command: 'wizard', payload: '/wizard'}}/>
                    </SidebarItemList>
                </Sidebar>
                <div className="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-sub-menus">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={DashboardExample}/>
        <Route path="list" component={ListViewExample}/>
        <Route path="card" component={CardExample}/>
        <Route path="table" component={TableExample}/>
        <Route path="wizard" component={WizardExample}/>
    </Route>
</Router>, document.getElementById('app-container'), () => {
    $().setupVerticalNavigation(false);
});