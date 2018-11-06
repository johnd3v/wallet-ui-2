import React, {Component} from 'react';
import {Row,Col} from 'reactstrap';
import '../../../css/chart.css';
class Linegrap extends Component{

    render () {
        return (
                <Row>
                    <Col>
                    <div id="chartdiv"></div>
                    </Col>
                </Row>

        );
    }


}


export default Linegrap;