import React from 'react';
import { Prompt } from 'react-router-dom';

// Styles
import { Header, Button, Input, Form } from 'semantic-ui-react';

type State = {
    isBlocking: bool
}

class Demo1 extends React.Component<{}, State> {

    state = {
        isBlocking: false
    }

    render() {
        const { isBlocking } = this.state;

        return (
            <div>
                <Header as='h2' content='Demo: Prevent users from changing routes while form is being filled out'/>

                <Form
                    onSubmit={event => {
                        event.preventDefault()
                        event.target.reset()
                        this.setState({
                            isBlocking: false
                        })
                    }}
                >
                    <Prompt
                        when={isBlocking}
                        message={location => (
                            `Are you sure you want to go to ${location.pathname}`
                        )}
                    />

                    <p>
                        Blocking? {isBlocking ? ' Yes, click a link or the back button' : ' Nope'}
                    </p>


                    <Input
                        size="medium"
                        placeholder="type something to block transitions"
                        onChange={event => {
                            this.setState({
                                isBlocking: event.target.value.length > 0
                            })
                        }}
                    />

                    <Button>Submit to stop blocking</Button>
                </Form>
            </div>
        )
    }
}


export default Demo1;