import React from "react";
function CreatePost() {
  [title,setTitle] = useState("");
  [postText,setPostText] = useState("");
    return (
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input placeholder="Title..."/>
            </div>
            <div className="inputGp">
              <label>Post:</label>
              <textarea placeholder="Post..."/>

              
          </div>
          <button> Submit Post</button>
        </div>
      </div>
    );
  }
  
  export default CreatePost;
  