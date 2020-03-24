import React from 'react';
import { Card, Button, message} from 'antd';
import {
    LikeOutlined,
    DislikeOutlined,
    CommentOutlined,
  } from '@ant-design/icons';
import HeaderCard from './HeaderCard';
  
class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      love : 0
    }
    this.state = {
      comment : 0
    }
  }
  handleLiked = () => {
    if(this.state.love == 0) {
      this.setState({
        love: this.state.love + 1
      })
    }
  }
  handleComment = () => {
    this.setState({
      love: this.state.comment + 1
    })
  }

  handleUnliked = () => {
    if(this.state.love > 0) {
      this.setState({
        love: this.state.love - 1
      })
    }
  }

  render() {
    const {name, pic, username, id} = this.props;
    return (
      <Card title={name} style={{ width: 350, alignItems:"center"}}>   
        <img alt="" src={pic} style={{maxWidth: '100%', height: 300}}></img>
      <div>
      <HeaderCard username={username} id={id} love={this.state.love + " Likes "} comment={this.state.comment + " Comments "} ></HeaderCard>
      </div>
      <div style={{marginTop: 5}}>
        <Button icon={<DislikeOutlined />} onClick={this.handleUnliked} style={{color:"white", backgroundColor:"red"}}>Dislike</Button>
        <Button icon={<LikeOutlined />} onClick={this.handleLiked} style={{color:"white", backgroundColor:"blue"}}>Like</Button>
        <Button icon={<CommentOutlined />} onClick={this.handleComment} style={{color:"black", backgroundColor:"white"}}>Comment</Button>

      </div>
      </Card>
    );
  }
}

export default User;