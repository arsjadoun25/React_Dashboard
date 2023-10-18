import logo from './logo.svg';
import { Space, Row, Col, Card} from 'antd';
import './App.css';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={6}>
          <SideMenu />
        </Col>
        <Col>
          <div>
            <AppHeader />
            <Space className='content'>
              <PageContent />
            </Space>
              <AppFooter />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
