import React from "react";
function CreatePost() {
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
              <textarea placeholder="Post...">
                
              </textarea>
          </div>
        </div>
      </div>
    );
  }
  
  export default CreatePost;
  