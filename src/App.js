import React from 'react';
import './App.css';
import { Row , Col } from 'antd';
import User from './card/User';
import NavBar from './menu/Menu';
import Slideshow from './menu/Slideshow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Murid Chef Arnold',
          username: 'TretanMuslim',
          id: '1195143715318161408',
          pic: 'https://pbs.twimg.com/profile_images/1114066274798059520/no7FCbC0_400x400.jpg',
        },
        {
          name: 'Raisa Andriana',
          username: 'raisa6690',
          id: '393109460',
          pic: 'https://pbs.twimg.com/profile_images/1228152592556941312/7d6O8d9k_400x400.jpg'
        },    
        {
          name: 'ini saya',
          username: 'adypamunqkas',
          id: '2268790320',
          pic: 'https://pbs.twimg.com/profile_images/1228534261197598726/xcNI0ZPl_400x400.jpg'
        },   
        {
          name: '#ASNKiniBeda',
          username: 'BKNgoid',
          id: '99896863',
          pic: 'https://pbs.twimg.com/profile_images/1075639465823981569/gMy2GW5f_400x400.jpg'
        },
        
      
       
      ],
      searchText: '',
      current: 'twitter',
    }
  }

  searchText = res => {
    this.setState({searchText: res});
  }

  render() {
    return (
      <div>
        <NavBar selectedKeys={this.state.current} onSearch={this.searchText}></NavBar>
        <Slideshow></Slideshow>
        <div className="card">
          <Row gutter={[16,16]} style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          {
            this.state.users
            .filter(user => (
              user.name.toLowerCase().includes(this.state.searchText.toLowerCase())                     
            ))
            .map((user, index) => (
              <Col key={index} className="gutter-row" span={5}>
                <User name={user.name} username={user.username} pic={user.pic} id={user.id} />
              </Col>
            ))
          }          
          </Row>
        </div>
      </div>
    );
  }
}

export default App;