import React from 'react';
import {
    HeartOutlined,
    CommentOutlined
  } from '@ant-design/icons';

class HeaderCard extends React.Component {
    render(){
        const {love, comment} = this.props;
        return (<div style={{display:"flex"}}>
            <div >
                <HeartOutlined style={{color: '#eb2f96'}} />
                <div style={{textAlign:"center"}}>{love}</div>
            </div>
            <div style={{marginLeft:5}}>
                <CommentOutlined style={{color: 'blue'}} />
                <div style={{textAlign:"center"}}>{comment}</div>
            </div>
        </div>
    )}
}

export default HeaderCard;