import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic='https://avatars3.githubusercontent.com/u/48663882?s=400&u=166b088335258e442fc0a8d17e9a7557cb53dbd2&v=4'
            message='Wow this works!'
            timestamp='This is a timestamp'
            username='buyongtatt'
            image='https://scontent.fkul14-1.fna.fbcdn.net/v/t1.0-9/140352507_3657999754284936_47636955941383436_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=v33H2m0VNtoAX_6Z4lN&_nc_ht=scontent.fkul14-1.fna&oh=66f55a8df785789183a4e45e72d16f43&oe=60391A04'
            />
            
        </div>
    )
}

export default Feed
