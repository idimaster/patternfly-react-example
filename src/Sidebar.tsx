import * as React from 'react';

import { SidebarStore, VSidebar } from 'patternfly-react'
import { SidebarItem, SidebarItemList } from 'patternfly-react'

@VSidebar
export class Sidebar extends React.Component<any, any> implements SidebarStore {

    getItems(): React.ReactElement<any>[] {
        return [
            <SidebarItem icon='fa-dashboard' label='Dashboard'/>,
            <SidebarItem icon='fa-shield' label='Dolor'/>,
            <SidebarItemList icon='fa-space-shuttle' label='Ipsum' list={['Intellegam','Copiosae', 'Patrioque']}/>,
            <SidebarItemList icon='fa-paper-plane' label='Amet' list={['Detracto','Mediocrem', 'Corrumpit']}/>,
            <SidebarItemList icon='fa-space-shuttle' label='Ipsum3' list={['Intellegam','Copiosae', 'Patrioque']}/>,
            <SidebarItem icon='fa-graduation-cap' label='Adipscing'/>,
            <SidebarItem icon='fa-gamepad' label='Lorem'/>
        ]
    }
}
