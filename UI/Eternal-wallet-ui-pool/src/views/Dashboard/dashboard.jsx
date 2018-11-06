import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import Yields from '../Yields/yields';
import LineGraph from '../Charts/LineGraph/line-graph';
import '../../css/dashboard.css';
class Dashboard extends Component{

        render (){
            return (<div>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Yields/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <LineGraph/>
                        </Col>
                    </Row>


            </div>);
        }

}

export default Dashboard;