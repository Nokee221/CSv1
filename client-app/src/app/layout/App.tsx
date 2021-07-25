import React, { Fragment, useEffect} from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import ActivityStore from '../stores/activitiyStore';
import { observer } from 'mobx-react-lite';

function App() {

  const { acitivityStore } = useStore();

  useEffect(() => {
    acitivityStore.loadActivities();
  }, [acitivityStore])

  if (acitivityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>


    </Fragment>
  );
}

export default observer(App);
