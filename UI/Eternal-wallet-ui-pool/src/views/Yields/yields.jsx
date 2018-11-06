import React, {Component} from 'react';
import {Card,CardBody,Row,Col} from 'reactstrap';
import '../../css/yields.css';
class Yields extends Component{
    render (){
        return (
        <Row>
            <Col>
                <Card>
                    <CardBody>
                    <span className="currency-symbol">&#165;</span>
                    <span className="currency-amount-yield">13.029</span>
                    <hr className="hr-sd"/>
                    <span className="currency-desc">Japanese Yen</span>  
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardBody>
                    <span className="currency-symbol">&#8369;</span>
                    <span className="currency-amount-yield">100.32  </span> 
                    <hr className="hr-sd"/>
                    <span className="currency-desc">Philippine Peso</span> 
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardBody>
                    <span className="currency-symbol">&#36;</span>
                    <span className="currency-amount-yield">00.23</span>
                    <hr className="hr-sd"/>
                    <span className="currency-desc">Hongkong Dollar</span>   
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardBody>
                    <span className="currency-symbol">&#8361;</span>
                    <span className="currency-amount-yield">00.01</span> 
                    <hr className="hr-sd"/>
                    <span className="currency-desc">Korean Won</span> 
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardBody>
                    <span className="currency-symbol">&#36;</span>
                    <span className="currency-amount-yield">00.00</span>
                    <hr className="hr-sd"/>
                    <span className="currency-desc">US Dollar</span>   
                    </CardBody>
                </Card>
            </Col>
        </Row>


        );
    }
}

export default Yields;