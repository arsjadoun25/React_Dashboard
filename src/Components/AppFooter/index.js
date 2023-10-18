import React from 'react';
import { Card, Typography, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import davidmarcu from 'D:/Fitpeo/dashboardreact/src/Components/AppFooter/david-marcu-78A265wPiO4-unsplash.jpg'
import texture from 'D:/Fitpeo/dashboardreact/src/Components/AppFooter/texture-4999572_1280.jpg'


  const optionsMenu = (
    <Menu>
      <Menu.Item key="1">Last 10 days</Menu.Item>
      <Menu.Item key="2">Last 20 days</Menu.Item>
      <Menu.Item key="3">Last 60 days</Menu.Item>
    </Menu>
  );

function AppFooter(){
    return (
    <div className="AppFooter">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Card style={{ marginTop:'50px', width:'1030px' }}>
            <div style={{ display:'flex' }}>
                <div>
                    <h3 style={{marginTop:'-10px', whiteSpace:'nowrap' }}>Product Sell</h3>    
                </div>
                <div style={{ marginTop:'-10px' }}>
                    <input
                        id="searchh1"
                        type="text"
                        placeholder="Search..."
                    />   
                </div>
                <div style={{ marginLeft:'80px', backgroundColor:'rgba(169, 169, 169, 0.3)', height:'17px', fontSize:'10px', width:'80px', borderRadius:'5px', marginTop:'-6px' }}>
                    <Dropdown overlay={optionsMenu} placement="bottomRight">
                        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                            Last 30 days <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>    
            <div>
                <table style={{ lineHeight:0.1 }}>
                <thead>
                    <tr style={{ color:"grey", fontSize:'11px' }}>
                    <th>Product Name</th>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Stock</th>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Price</th>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div className="product-info">
                            <img style={{ borderRadius:'10px', height:'40px' }} src={davidmarcu} />
                            <div style={{ lineHeight:0.2 }}>
                                <span><h4>Abstract 3D</h4></span>
                                <span style={{ whiteSpace:'nowrap' }}>Lorem ipsum dolor sit amet </span>
                            </div>
                        </div>
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>10</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <td>20</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>
                        <div className="product-info">
                            <img style={{ borderRadius:'10px', height:'40px' }} src={texture} />
                            <div style={{ lineHeight:0.8 }}>
                                <span><h4>Sarphens Illustration</h4></span>
                                <span style={{ whiteSpace:'nowrap' }}>Lorem ipsum dolor sit amet </span>
                            </div>
                        </div>
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>15</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <td>25</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <td>120</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </Card>
    </div>
    );
}
export default AppFooter;