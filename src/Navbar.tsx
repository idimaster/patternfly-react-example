/**
 * Created by Dmitry<dizumskiy@eisgroup.com> on 8/14/16.
 */
import * as React from 'react';

import { Navbar as INavbar, VNavbarDecorator, Brand } from 'patternfly-react'

export class NavbarImpl extends React.Component<any, any> implements INavbar {
    getBrand(): React.ReactElement<any> {
        return <Brand/>
    }

    getLeft(): React.ReactElement<any>[] {
        return [
            <li><a href="#" target="_blank" className="nav-item-iconic nav-item-iconic-new-window"><span title="Launch" className="fa fa-external-link"></span></a></li>
        ]
    }

    getRight(): React.ReactElement<any>[] {
        return [
            <li className="dropdown">
                <a className="dropdown-toggle nav-item-iconic" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span title="Notifications" className="fa pficon-flag"></span>
                    <span className="badge">2</span>
                </a>
                <div className="dropdown-menu infotip bottom-right">
                    <div className="arrow"></div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="i pficon pficon-info"></span> Modified Datasources ExampleDS
                        </li>
                        <li className="list-group-item">
                            <span className="i pficon pficon-info"></span> Error: System Failure
                        </li>
                    </ul>
                    <div className="footer">
                        <a>Clear Messages</a>
                    </div>
                </div>
            </li>,
            <li className="dropdown">
                <a className="dropdown-toggle nav-item-iconic" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span title="Help" className="fa pficon-help"></span>
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Help</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </li>,
            <li className="dropdown">
                <a className="dropdown-toggle nav-item-iconic" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span title="Username" className="fa pficon-user"></span>
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a href="#">Preferences</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </li>
        ]
    }
}

@VNavbarDecorator
export class Navbar extends NavbarImpl {}