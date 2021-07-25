import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label,  Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';



export default observer(function  ActivityList()
{
    const { acitivityStore } = useStore();
    const { deleteActivity , activitesByDate , loading } = acitivityStore


    const[target ,setTarget] = useState('');

    function hangleActivitiyDelete(e : SyntheticEvent<HTMLButtonElement> , id:string)
    {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    

    return(
        <Segment>
            <Item.Group divided>
                {activitesByDate.map((activity) => (
                    <Item key={activity.id}>
                         <Item.Content>
                             <Item.Header as='a'>{activity.title}</Item.Header>
                             <Item.Meta>{activity.date}</Item.Meta>
                             <Item.Description>
                                 <div>{activity.description}</div>
                                 <div>{activity.city} , {activity.vanue}</div>
                             </Item.Description>
                             <Item.Extra>
                                <Button onClick={() => acitivityStore.selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button
                                    name={activity.id} 
                                    loading={loading && target === activity.id} 
                                    onClick={(e) => hangleActivitiyDelete(e, activity.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red'/>
                                 <Label basic content={activity.category}/>
                             </Item.Extra>
                         </Item.Content>

                    </Item>
                ))}
            </Item.Group>
        </Segment>
    ) 
})