import React, {Component, PropTypes} from 'react';
import FlipCard from 'react-flipcard';
import {Radar as RadarChart} from "react-chartjs";

import './FriendListItem.scss';

export default class FriendListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {isFlipped: false};
    }

    flip = () => {
        this.setState({isFlipped: !this.state.isFlipped});
    };

    static propTypes = {
        id: PropTypes.number.isRequired,
        member: PropTypes.object.isRequired,
    };


    render() {


        var chartData = {
            labels: ["Linux", "Cloud", "Coding", "Certifications"],
            datasets: [{
                fillColor: "rgba(220,220,220,0.2)",
                data: [65, 59, 90, 81]
            }]
        };

        /*
         const divStyle = {
         height: "100%"
         };
         */

        return (

            <div className="col-xs-12 col-md-4 col-lg-3">
                <div className="fixedHeight">
                    <FlipCard>

                        <div>
                            <div className="col-md-12">
                                <div className="card">
                                    <img className="card-img-top" src="http://placehold.it/318x180"
                                         alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">{this.props.member.name}</h4>
                                        <p className="card-text">{this.props.member.title}</p>
                                        <h5 className="card-title">About</h5>
                                        <p className="card-text">{this.props.member.about}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-block">
                                        <div className="hideOverflow">
                                            <h4 className="card-title">{this.props.member.name}</h4>
                                            <h5 className="card-title">Skill Radar</h5>
                                            <RadarChart data={chartData}/>
                                            <br/>
                                            <div className="memberCard">
                                                <h5 className="card-title">Role</h5>
                                                <p className="card-text">{this.props.member.about}</p>
                                                <p className="card-text">{this.props.member.about}</p>
                                                <p className="card-text">{this.props.member.about}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FlipCard>
                </div>
            </div>


        );
    }
}
