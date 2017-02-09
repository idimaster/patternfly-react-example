import * as React from 'react';

import {ListView, ListItem, CheckBox as ListCheckBox, ListActions, ListActionItem, ListMainInfo} from 'patternfly-react';

export class ListViewExample extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <ListView>
            <ListItem>
                <ListCheckBox/>
                <ListMainInfo>

                </ListMainInfo>
                <ListActions>
                    <button className="btn btn-default">Action</button>
                    <button className="btn btn-default">Action2</button>
                    <ListActionItem label='action1'/>
                    <ListActionItem label='action2'/>
                    <ListActionItem label='action3'/>
                    <ListActionItem label='action4'/>
                </ListActions>
            </ListItem>
            <ListItem>
                <ListCheckBox/>
                <ListActions>
                    <button className="btn btn-default">Action</button>
                    <ListActionItem label='action1'/>
                    <ListActionItem label='action2'/>
                    <ListActionItem label='action3'/>
                    <ListActionItem label='action4'/>
                </ListActions>
            </ListItem>
            <ListItem>
                <ListCheckBox/>
                <ListActions>
                    <button className="btn btn-default">Action</button>
                    <ListActionItem label='action1'/>
                    <ListActionItem label='action2'/>
                    <ListActionItem label='action3'/>
                    <ListActionItem label='action4'/>
                </ListActions>
            </ListItem>
            <ListItem>
                <ListCheckBox/>
                <ListMainInfo>
                    <ListMainInfo.Left><span className="fa fa-plane list-view-pf-icon-sm"></span></ListMainInfo.Left>
                    <ListMainInfo.Description>
                        <ListMainInfo.Description.Header>Event One</ListMainInfo.Description.Header>
                        <ListMainInfo.Description.Text>
                            The following snippet of text is <a href="#">rendered as link text</a>.
                        </ListMainInfo.Description.Text>
                    </ListMainInfo.Description>
                    <ListMainInfo.Additional>
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                    </ListMainInfo.Additional>
                    <ListMainInfo.Additional>
                        <span className="pficon pficon-cluster"></span>
                        <strong>4</strong> Hosts
                    </ListMainInfo.Additional>
                    <ListMainInfo.Additional>
                        <span className="pficon pficon-cluster"></span>
                        <strong>834</strong> Nodes
                    </ListMainInfo.Additional>
                </ListMainInfo>
                <ListActions>
                    <button className="btn btn-link">Action</button>
                    <ListActionItem label='action1'/>
                    <ListActionItem label='action2'/>
                    <ListActionItem label='action3'/>
                    <ListActionItem label='action4'/>
                </ListActions>
            </ListItem>
        </ListView>
    }
}