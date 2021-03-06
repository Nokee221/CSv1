import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';


export default observer(function ActivitiyForm() {

    const { acitivityStore } = useStore();
    const { selectedActivity, closeFrom, createActivity, updateActivity, loading } = acitivityStore;

    const initialStete = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        vanue: '',
    }

    const [activity, setActivity] = useState(initialStete);

    function handleSumbit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSumbit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Vanue' value={activity.vanue} name='vanue' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeFrom} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})