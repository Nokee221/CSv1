import React from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';


interface Props {
    activites: Activity;
    cancelSelectActivity: () => void;
    openForm: (id:string) => void;
}

export default function ActivityDetails({ activites , cancelSelectActivity , openForm}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activites.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activites.title}</Card.Header>
                <Card.Meta>
                    <span>{activites.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activites.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activites.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}