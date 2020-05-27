/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import tableau from "tableau-api";  

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Container,
  Col
} from "reactstrap";

class Trends extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
    this.initViz();
    /*this.initViz2();*/
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }

  initViz() {
    const vizUrl = 'https://public.tableau.com/views/FMAcqPerfFMACALL/FicoRateDiff?:display_count=y&publish=yes&:origin=viz_share_link';  
    const vizContainer = this.vizContainer;
    const options = {
      width: "100%",
      height: "1000px",
    };
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options);  
  }

  /*initViz2() {
    const vizUrl = 'https://public.tableau.com/views/FMAcqPerfFMACALL/FicoRateDiff?:display_count=y&publish=yes&:origin=viz_share_link';  
    const vizContainer2 = this.vizContainer2;
    const options = {
      width: "100%",
      height: "1000px",
    };
    let viz2 = new window.tableau.Viz(vizContainer2, vizUrl, options);  
  }*/

  render() {
    return (
        <>
        <IndexNavbar />

        <div className="wrapper">
          <section className="section section-lg">
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Visualizations</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <Container>
                <div className="page-header header-filter">
                <CardBody>

                <div ref={(div) => { this.vizContainer = div }}>
                </div>

                {/*<div ref={(div) => { this.vizContainer2 = div }}>
                </div>*/}

                </CardBody>
                </div>
                </Container>
              </Card>
            </Col>
          </section>
          
        </div>
        <Footer />
      </>
    );
  }
}

export default Trends;