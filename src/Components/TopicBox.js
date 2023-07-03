import React from 'react'
import './topicbox.css'

export default function TopicBox() {
  return (
    <div className="topicBox-container">
      <div className="topicBox-group">
        <img src="/photos/picture2.jpg" alt="picture2" className="topicBox" />
        <img src="/photos/picture1.jpg" alt="picture1" className="topicBox" />
      </div>
    </div>
  );
}
