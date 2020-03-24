import React from 'react';
import { Card, Button, message} from 'antd';
import {
    LikeOutlined,
    DislikeOutlined,
    CommentOutlined,
    ShareAltOutlined,
  } from '@ant-design/icons';
import HeaderCard from './HeaderCard';
  
class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      love : 0,
      commentTwit : 0,
      share : 0
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
      commentTwit: this.state.commentTwit + 1
    })
  }
  handleShare = () => {
    this.setState({
      share: this.state.share + 1
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
      <Card title={name} style={{ width: 370, alignItems:"center"}}>   
        <img alt="" src={pic} style={{maxWidth: '100%', height: 320}}></img>
      <div>
      <HeaderCard username={username} id={id} love={this.state.love + " Likes "} commentTwit={this.state.commentTwit + " Comments "} share={this.state.share + " Shared "} ></HeaderCard>
      </div>
      <div style={{marginTop: 5}}>
        <Button icon={<DislikeOutlined />} onClick={this.handleUnliked} style={{color:"white", backgroundColor:"red"}}>Dislike</Button>
        <Button icon={<LikeOutlined />} onClick={this.handleLiked} style={{color:"white", backgroundColor:"blue"}}>Like</Button>
        <Button icon={<CommentOutlined />} onClick={this.handleComment} style={{color:"black", backgroundColor:"white"}}>Comment</Button>
        <Button icon={<ShareAltOutlined />} onClick={this.handleShare} style={{color:"black", backgroundColor:"white"}}></Button>

      </div>
      </Card>
    );
  }
}

export default User;