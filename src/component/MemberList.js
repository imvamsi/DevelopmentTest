import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row, Col, Table, Button } from 'reactstrap';

import { fetchTeamMembersReq } from "../redux/actions";

class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { dispatch, match: { params } } = this.props
        dispatch(fetchTeamMembersReq(params.id));
    }

    renderUsersList = (users) => {
        return users.map(item =>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
            </tr>
        )
    }

    onClickBack = () =>{
        const {history} = this.props;
        history.push('/team');
    }
    render() {
        const { users } = this.props;
        console.log(users);
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        {users.length > 0 && (
                            <Table responsive bordered striped>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Member Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderUsersList(users)}
                                </tbody>
                            </Table>
                        )}
                    </Col>
                    <Col>
                        <Button
                            onClick={this.onClickBack}
                            color="link"
                            block
                        >
                            Back
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    users: state.store.users,
});

MemberList.defaultProps = {
    users: []
}

export default connect(mapStateToProps)(MemberList);