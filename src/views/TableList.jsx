/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  isActionAllowed = (actionName = "") => {
    // return (this.props.actions.indexOf(actionName) >= 0) ? true : false;
    return true;
  }

  render() {
    console.log(this.props);
    return (
      <div className="content">
        <Grid fluid>
        <Row>
          <Col md={12} right>  
          {this.isActionAllowed('create-user') &&
             <button className="btn btn-fill btn-warning float-right" type="button">Create Role</button>
           }
          </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Roles"
                category="List of the Roles"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

       
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
