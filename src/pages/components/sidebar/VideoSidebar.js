import React,{useState} from 'react'
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar() {
    const[liked, setLike] = useState(false)

    function handdleLike(){
        setLike(!liked)

    }

  return (
    <div className='videoSidebar'>
<div className='videoSidebar__options'
onClick={handdleLike}>
    {liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
   
    <p>304</p>
    
</div>
<div className='videoSidebar__options'>
    <ChatIcon fontSize='large'/>
    <p>100</p>
    
</div>
<div className='videoSidebar__options'>
    <ShareIcon fontSize='large'/>
    <p>324</p>
    
</div>
    </div>
  )
}

export default VideoSidebar