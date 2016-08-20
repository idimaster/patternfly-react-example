import * as React from 'react';

import { NavbarStore, VNavbar, Brand } from 'patternfly-react'
import { NavItem, NavDropDown, NavInfoList } from 'patternfly-react'


@VNavbar
export class Navbar extends React.Component<any, any> implements NavbarStore {
    getBrand() {
        return <Brand>
            <img className="navbar-brand-icon" src="/assets/img/logo-alt.svg" alt=""/><img className="navbar-brand-name" src="/assets/img/brand-alt.svg" alt="PatternFly Enterprise Application" />
        </Brand>
    }

    getLeftPanelElements() {
        return [
            <NavItem><a href="#" target="_blank" className="nav-item-iconic nav-item-iconic-new-window"><span title="Launch" className="fa fa-external-link"></span></a></NavItem>
        ]
    }

    getRightPanelElements() {
        return [
            <NavInfoList name='Notification' store={() => {
                return [
                {name: 'Modified Datasources ExampleDS'},
                {name: 'Test Message'},
                {name: 'Error: System Failure'}
                ];
            }}/>,
            <NavInfoList name='Notification' store={() => {
                return [
                {name: 'Modified Datasouxccc vxvc dgfgg fg  fff ff f  dfggfhdh rces ExampleDS'},
                {name: 'Test Message'},
                {name: 'Error: System Failure'}
                ];
            }}/>,
            <NavDropDown name='Help' icon='pficon-help' store={() => {
                return [
                {name: 'Help'},
                {name: 'About'}
                ];
            }}/>,
            <NavDropDown name='User' icon='pficon-user' store={() => {
                return [
                {name: 'Preferences'},
                {name: 'Logout'}
                ];
            }}/>
        ];
    }
}
