import React, { useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
function Feed() {
    const [posts, setPosts] = useState([]);
    const sendPost = (e) => {
        e.preventDefault();
    }
  return (
      <div className='feed'>
          <div className="feed-inputContainer">
              <div className="feed-input">
                  <form>
                      <input type="text" placeholder='Start a post'/>
                      <button onClick={sendPost} type='submit'>Send</button>
                  </form>
              </div>
              <div className="feed-inputOptions">
                  <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />

                  <InputOption Icon={SubscriptionsIcon} title="Subscribe" color="#E7A33E" />
                  
                  <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                  
                  <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
              </div>
          </div>

          {/* Posts */}
          {posts.map((Post) => <Post/>)}
          <Post name="Hemant Malav" description="This is test" message="Wow this worked"/>
    </div>
  )
}

export default Feed