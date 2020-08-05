import React, { Component } from 'react'
import firebase from '../../firebase'
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react'

class UserPanel extends Component {

    state = {
        user: this.props.currentUser
    }

    // componentDidMount() {
    //     this.setState({ user: this.props.currentUser})
    // }
    componentWillReceiveProps(nextProps) {
        this.setState({ user: nextProps.currentUser })
    }

    dropdownOptions = () => [
        {
            key: 'user',
            text: <span>Signed in as  
                <strong> {this.state.user.displayName}</strong>
                {/* <strong>{ this.state.user &&  this.state.user.displayName}</strong> */}
                </span>,
            disabled: true
        },
        {
            key: 'avatar',
            text: <span>Change Avatar</span>,
        },
        {
            key: 'signout',
            text: <span onClick={this.handleSignout}>Sign Out</span>,
        },
    ]

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('Signed Out'))
    }

    render() {

        // console.log(this.props.currentUser)

        const { user} = this.state;

        return (
            <Grid style={{ background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2rem', maegin: 0}}>
                        {/* app header  */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>DevChat</Header.Content>
                        </Header>
                    {/* user dropdown  */}
                    <Header style={{ padding: '0.25rem' }} as="h4" inverted>
                        <Dropdown trigger={
                            <span>
                                <Image src={user.photoURL} spaced="right" avatar />
                                {user.displayName}
                                </span>
                        } options={
                            this.dropdownOptions()
                        } />
                    </Header>
                    </Grid.Row>

                </Grid.Column>
            </Grid>
        )
    }
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })
// export default connect(mapStateToProps)(UserPanel);
export default UserPanel;