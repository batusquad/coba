import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Layout from './Layout';

class Dashboard extends Component {
  render() {
    return (
          <Layout>
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic"> Pilih Status </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="Realisasi">Realisasi</Dropdown.Item>
                        <Dropdown.Item href="Fail">Fail</Dropdown.Item>
                        <Dropdown.Item href="Ongoing">On Going</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            </Layout>
    );
  }
}

export default Dashboard;
