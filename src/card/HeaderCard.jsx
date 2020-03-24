import React from 'react';
import {
    HeartOutlined,
    CommentOutlined,
    ShareAltOutlined
  } from '@ant-design/icons';

class HeaderCard extends React.Component {
    render(){
        const {love, commentTwit, share} = this.props;
        return (<div style={{display:"flex"}}>
            <div >
                <HeartOutlined style={{color: '#eb2f96'}} />
                <div style={{textAlign:"center"}}>{love}</div>
            </div>
            <div style={{marginLeft:15}}>
                <CommentOutlined style={{color: 'blue'}} />
                <div style={{textAlign:"center"}}>{commentTwit}</div>
            </div>
            <div style={{marginLeft:15}}>
                <ShareAltOutlined style={{color: 'black'}} />
                <div style={{textAlign:"center"}}>{share}</div>
            </div>
        </div>
    )}
}

export default HeaderCard;