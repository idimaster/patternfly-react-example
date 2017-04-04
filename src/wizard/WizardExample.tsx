import * as React from 'react';

import {Wizard, WizardBody, WizardSteps, WizardButtons, Title, WizardRow, WizardSidebar, WizardMain, StepTitle} from 'patternfly-react-ts'

export class WizardExample extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <Wizard>
            <WizardBody>
                <WizardSteps>
                    <Title number='1' title='First Step' />
                    <Title number='2' title='Second Step' />
                    <Title number='3' title='Review' />
                </WizardSteps>
                <WizardRow>
                    <WizardSidebar>
                        <StepTitle number='1A.' title='Details'/>
                        <StepTitle number='1B.' title='Settings'/>
                    </WizardSidebar>
                    <WizardMain>

                    </WizardMain>
                </WizardRow>
            </WizardBody>
            <WizardButtons></WizardButtons>
        </Wizard>
    }
}