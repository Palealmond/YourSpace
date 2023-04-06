import { useState } from "react"
import { CreatePost } from "../api/posts.js"

// export default function NewPost() {
//   const [username, setUsername] = useState("")
//   const [post, setPost] = useState("")
 
//   async function handleSubmit(e) {
//     e.preventDefault()
//     const data = await CreatePost(username, post)
//     console.log(response)
//   }
//   return (
//     <>
//       <h1>New Post</h1>
//       <form onSubmit={handleSubmit}>

//         <label htmlFor="username">Username</label>
//         <input type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
 
//     </>
//   )
// }
