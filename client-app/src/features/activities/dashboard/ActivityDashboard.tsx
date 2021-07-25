import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivitiyForm from '../form/ActivityFrom';
import ActivityList from './ActivityList';


export default observer(function ActivityDashboard() {


    const { acitivityStore } = useStore();
    const { selectedActivity, editMode } = acitivityStore;


    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails />}
                {editMode &&
                    <ActivitiyForm />}
            </Grid.Column>
        </Grid>
    )
})