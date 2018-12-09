import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row, Col, Table, Button } from 'reactstrap';

import { fetchTeamListReq } from "../redux/actions";

class TeamList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchTeamListReq());
    }

    onClickTeam = (id) => {
        const {history} = this.props;        
        history.push(`team/${id}`);
    }

    renderTeamList = (team) => {
        return team.map(item =>
            <tr key={item.id}>
                <td>
                    {item.id}
                </td>
                <td>
                    <Button
                        onClick={() => this.onClickTeam(item.id)}
                        color="link"
                    >
                        {item.name}
                    </Button>
                </td>
            </tr>
        )
    }
    render() {
        const { team } = this.props;
        console.log(team)
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        {team.length > 0 && (
                            <Table responsive bordered striped>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Team Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTeamList(team)}
                                </tbody>
                            </Table>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    team: state.store.teamList,
});

TeamList.defaultProps = {
    team: []
}

export default connect(mapStateToProps)(TeamList);