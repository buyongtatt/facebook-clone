import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div classNmae='post_top'>
                <Avatar src={profilePic}
                className='post_avatar' />
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className='post_bottom'>
                <p>{message}</p>
            </div>
            <div className='post_image'>
                <img src={image} alt='' />
            </div>
            <div className='post_options'>
                <div className='post_option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post_option'>
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className='post_option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post_option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                    
                </div>
            </div>
        </div>
    )
}

export default Post
