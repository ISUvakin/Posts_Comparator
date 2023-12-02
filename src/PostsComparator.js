import './PostsComparator.css'
import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const filteredPosts = posts.filter(
    (post) => post.userId === selectedUser?.id
  );

  return (
    <div>
      <h1>Список пользователей:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUser &&(
        <div>
          <h2>Опубликовано пользователем {selectedUser.name}:</h2>
          {filteredPosts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <br></br>
            </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default App;