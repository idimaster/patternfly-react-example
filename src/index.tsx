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
import {Header, VNavbar, NavItem, NavInfoList, NavDropDown, NavInfoItem, NavDropDownItem} from 'patternfly-react';
import {Sidebar, SidebarItem, SidebarItemList, SidebarListItem} from 'patternfly-react';
import {CommandPayload} from 'patternfly-react';


class App extends React.Component<any, any> {

    private handleTopMenu = (event: CommandPayload) => {
        alert(event.command);
    };

    private handleClear = (id: string) => {
        alert('Clear ' + id);
    };

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
                        <NavInfoList id='id1' label='Notification' onClear={this.handleClear}>
                            <NavInfoItem label='Modified Datasources ExampleDS' />
                            <NavInfoItem label='Test Message' />
                            <NavInfoItem label='Error: System Failure' />
                        </NavInfoList>
                        <NavInfoList id='id2' label='Notification' onClear={this.handleClear}>
                            <NavInfoItem label='Modified Datasouxccc vxvc dgfgg fg  fff ff f  dfggfhdh rces ExampleDS' />
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
                    <SidebarItem icon='fa-dashboard' label='Dashboard' onSelect={this.handleTopMenu} payload={{command: 'dashboard'}}/>
                    <SidebarItem icon='fa-shield' label='Dolor' onSelect={this.handleTopMenu} payload={{command: 'dolor'}}/>
                    <SidebarItemList icon='fa-space-shuttle' label='Ipsum'>
                        <SidebarListItem label='Intellegam' onSelect={this.handleTopMenu} payload={{command: 'Intellegam'}}/>
                        <SidebarListItem label='Copiosae' onSelect={this.handleTopMenu} payload={{command: 'Copiosae'}}/>
                        <SidebarListItem label='Patrioque' onSelect={this.handleTopMenu} payload={{command: 'Patrioque'}}/>
                    </SidebarItemList>
                    <SidebarItemList icon='fa-paper-plane' label='Amet'>
                        <SidebarListItem label='A Intellegam' onSelect={this.handleTopMenu} payload={{command: 'A ahelp'}}/>
                        <SidebarListItem label='A Copiosae' onSelect={this.handleTopMenu} payload={{command: 'A help'}}/>
                        <SidebarListItem label='A Patrioque' onSelect={this.handleTopMenu} payload={{command: 'A help'}}/>

                    </SidebarItemList>
                    <SidebarItemList icon='fa-space-shuttle' label='Ipsum3'>
                        <SidebarListItem label='I Intellegam' onSelect={this.handleTopMenu} payload={{command: 'I help'}}/>
                        <SidebarListItem label='I Copiosae' onSelect={this.handleTopMenu} payload={{command: 'I help'}}/>
                        <SidebarListItem label='I Patrioque' onSelect={this.handleTopMenu} payload={{command: 'I help'}}/>
                    </SidebarItemList>
                    <SidebarItem icon='fa-graduation-cap' label='Adipscing' onSelect={this.handleTopMenu} payload={{command: 'adipscing'}}/>
                    <SidebarItem icon='fa-gamepad' label='Lorem' onSelect={this.handleTopMenu} payload={{command: 'lorem'}}/>
                </Sidebar>
                <div
                    className="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-sub-menus   ">
                    <Header>Example</Header>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


render(<App/>, document.getElementById('app-container'), () => {
    $().setupVerticalNavigation(false);
});

