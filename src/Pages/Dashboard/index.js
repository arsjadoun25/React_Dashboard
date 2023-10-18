import React, { useEffect, useRef } from 'react';
import { BookOutlined, CaretDownFilled, CarryOutOutlined, DollarCircleFilled, DollarCircleOutlined, OrderedListOutlined, ShoppingCartOutlined, WalletOutlined } from "@ant-design/icons";
import { Card, Space, Typography, Statistic, Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';
import 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend, ...registerables);



function Dashboard(){
    return <div>
        <Space direction="horizontal" className="DashCard">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DashboardCard
                icon={<DollarCircleOutlined style={{
                    color:"darkgreen",
                    backgroundColor:"#b4e9b4",
                    borderRadius:60,
                    fontSize:40,
                    padding:26
                }} />} 
                title={"Earnings"} 
                value='$198k'
                sentence={<><span style={{ color: "green" }}>↑37.8%</span><span> this month</span></>} 
            />&nbsp;&nbsp;
            <DashboardCard 
                icon={<BookOutlined style={{
                    color:"purple",
                    backgroundColor:"#eebaf5",
                    borderRadius:60,
                    fontSize:40,
                    padding:26
                }}/>} 
                title={"Orders"} 
                value='$2.4k'
                sentence={<><span style={{ color: "red" }}>↓2%</span><span> this month</span></>}
            />
            &nbsp;&nbsp;
            <DashboardCard 
                icon={<WalletOutlined style={{
                    color:"blue",
                    backgroundColor:"#9aeff5",
                    borderRadius:60,
                    fontSize:40,
                    padding:26
                }}/>} 
                title={"Balance"} 
                value='$2.4k'
                sentence={<><span style={{ color: "red" }}>↓2%</span><span> this month</span></>} 
            />
            &nbsp;&nbsp;
            <DashboardCard 
                icon={<CarryOutOutlined style={{
                    color:"red",
                    backgroundColor:"#fab5e9",
                    borderRadius:60,
                    fontSize:40,
                    padding:26
                }}/>} 
                title={"Total Sales"} 
                value='$89k'
                sentence={<><span style={{ color: "green" }}>↑11%</span><span> this month</span></>}
            />
        </Space>
        <Space direction="horizontal" className="DashChart">
            <Card>
                <DashboardChart />
            </Card>
            &nbsp;&nbsp;
            <Card style={{
              height: '260px',
              width: '316px'
            }}>
            <div style={{ lineHeight: '3px', marginTop: '-25px' }}>
              <h3>Customers</h3>
              <p style={{ fontSize: '11px', color: "grey" }}>Customers that buy products</p>
            </div>
              <div>
                <DashboardChart1 />
              </div>
            </Card>
        </Space>
    </div>
}

function DashboardCard({ icon, title, value, sentence }) {
    return (
      <Card className="dashboard-card">
        <div className="card-content">
          <div className="icon">{icon}</div>
          <div className="statistics">
            <Statistic title={title} value={value} />
            <Typography.Text className="sentence">{sentence}</Typography.Text>
          </div>
        </div>
      </Card>
    );
}

const optionsMenu = (
  <Menu>
    <Menu.Item key="1">Weekly</Menu.Item>
    <Menu.Item key="2">Monthly</Menu.Item>
    <Menu.Item key="3">Annualy</Menu.Item>
  </Menu>
);

function DashboardChart(){

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
      label: 'Sample Data',
      data: [12, 8, 19, 15, 17, 4, 17, 19, 18, 16, 14, 15],
      backgroundColor: [
          'rgba(169, 169, 169, 0.3)', // Grey for non-Aug months
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(0, 0, 139, 0.9)', // Blue for Aug
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)',
          'rgba(169, 169, 169, 0.3)'
        ],
        // borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 0,
        borderRadius: 10,              
      },
    ],
  };
  
  const options = {
    maintainAspectRatio: false, // Disable aspect ratio to fill the container
    scales: {
      x: {
        display: true, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };
  
  return (
    <div style={{ width: '100%', justifyContent: 'space-between', height:'230px' }}>
      <div style={{ marginTop: '-20px', display: 'flex' }}>  
        <div style={{ lineHeight: '3px' }}>
          <h3>Overview</h3>
          <p style={{ fontSize: '11px', color: "grey" }}>Monthly Earning</p>
        </div>
        <div style={{ marginLeft:'480px', backgroundColor:'rgba(169, 169, 169, 0.3)', height:'23px', fontSize:'13px', width:'80px', borderRadius:'5px', marginTop:'7px' }}>
          <Dropdown overlay={optionsMenu} placement="bottomRight">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Quaterly <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    <div style={{ width: '630px', height: '200px' }}>
      <Bar data={data} options={options} />
    </div>
    </div>
  );
}

function DashboardChart1(){
  const data = {
    labels: ['',''],
    datasets: [
      {
        data: [20, 40, 40], // Adjust the values to represent old, new, and empty space percentages
        // backgroundColor: ['pink', 'blue', 'grey'],
        // borderColor: ['pink', 'blue', 'grey']
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if(!chartArea) {
            return null
          }
          if(context.dataIndex === 0) {
            return getGradient(chart);
          } else {
            return 'black';
          }
        }
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  }

  const textCenter = {
    id:'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y; 
      ctx.font = 'bolder 23px sens-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('65%', xCoor, yCoor - 10);

      ctx.font = 'bolder 10px sens-serif';
      ctx.fillStyle = 'black';
      ctx.fillText('Total New', xCoor, yCoor + 5);

      ctx.font = 'bolder 10px sens-serif';
      ctx.fillStyle = 'black';
      ctx.fillText('Customers', xCoor, yCoor + 15);
    }
  }


  function getGradient(chart){
    const {ctx, chartArea: {top, bottom, left, right}} = chart;
    const gradientSegment = ctx.createLinearGradient(0, top, 0, bottom)
    gradientSegment.addColorStop(0, 'red');
    gradientSegment.addColorStop(0.5, 'orange');
    // gradientSegment.addColorStop(1, 'green');
    return gradientSegment;
  }

  return (
    <div style={{ width: '230px', height: '200px' }}>
      <Doughnut 
        data={data} 
        options={options}
        plugins={
          [textCenter]
          // [sliceThickness]  
        }
      ></Doughnut> 
    </div>
  );
}
      
export default Dashboard;