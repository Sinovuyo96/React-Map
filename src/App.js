/* src/App.js */
import React from 'react';
// import React, { useEffect, useState } from 'react'
// import { API, graphqlOperation } from 'aws-amplify'
//  import { createTodo } from './src/graphql/mutations'
import { withAuthenticator } from '@aws-amplify/ui-react'
// import { Route } from 'react-router';
// import { listTodos } from './src/graphql/queries.js'
// import { Switch,Route } from 'react-router-dom';
// import  './Navbar.js'
import  './src/graphql/form.js'


// import awsconfig from "./src/amplify/aws-exports";


// const initialState = { name: '', description: '', }

// const App = () => {
//   const [formState, setFormState] = useState(initialState)
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetchTodos()
//   }, [])

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value })
//   }

//   async function fetchTodos() {
//     try {
//       const todoData = await API.graphql(graphqlOperation(listTodos))
//       const todos = todoData.data.listTodos.items
//       setTodos(todos)
//     } catch (err) { console.log('error fetching todos') }
//   }

//   async function addTodo() {
//     try {
//       if (!formState.name || !formState.description) return
//       const todo = { ...formState }
//       setTodos([...todos, todo])
//       setFormState(initialState)
//       await API.graphql(graphqlOperation(createTodo, {input: todo}))
//     } catch (err) {
//       console.log('error creating todo:', err)
//     }
//   }

//   return (
//     <div style={styles.container}>
//       <h2>Amplify Todos</h2>
//       <input
//         onChange={event => setInput('name', event.target.value)}
//         style={styles.input}
//         value={formState.name} 
//         placeholder="Name"
//       />
//       <input
//         onChange={event => setInput('description', event.target.value)}
//         style={styles.input}
//         value={formState.description}
//         placeholder="Description"
//       />
//       <button style={styles.button} onClick={addTodo}>Create Todo</button>
//       {
//         todos.map((todo, index) => (
//           <div key={todo.id ? todo.id : index} style={styles.todo}>
//             <p style={styles.todoName}>{todo.name}</p>
//             <p style={styles.todoDescription}>{todo.description}</p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }


// const styles = {
//   container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
//   todo: {  marginBottom: 15 },
//   input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   todoDescription: { marginBottom: 0 },
//   button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
// }

const nStyles={
     nav: { backgroundColor:'#FFC300', padding: '12px 0px' }
  
   }

class navbar extends React.Component {
  render() {
    return (
<nav style={nStyles.nav} class="@extend .z-depth-2" >
    <div  class="nav-wrapper">
      <a href="http//:google.com" class="brand-logo">Logo</a>
      <ul id="nav-mobile" className="Right" class="right hide-on-med-and-down">
        <li><a href="sass.html">Request Delivery</a></li>
        <li><a href="badges.html">Track Delivery</a></li>
        <li><a href="collapsible.html"> My Orders</a></li>
      </ul>
    </div>
  </nav>
  )
  }
};

// const App = () => {
//   <Switch>
//   <Route exact path = "/" component = {main}/>
//     <Route exact path = "/form" component = {form}/>
//   </Switch>

// }

// const Navbar = ()=>{
//   return(
//       <React.Fragment>
//           <li><Link to ="/form">Request Delivery</Link></li>
//       </React.Fragment>
//   );
// }




// const bStyles={
//   button: {hover:'backgroung:white',margin: '100px' ,display:'flex', backgroundColor:'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }

// }

// class Button extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this);
//   }

  
//   render() {
//     return (
//       <button style={bStyles.button} onClick={this.handleClick}>
//         Track Delivery
//       </button >
      
//     );
//   }
// }


// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button  class="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleClick()}>
//         Click me
//       </button>
//     );
//   }
// }

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // Create a ref to store the textInput DOM element
//     this.textInput = React.createRef();
//   }
//   render() {
//   // Use the `ref` callback to store a reference to the text input DOM
//   // element in an instance field (for example, this.textInput).
//     return (
//       <input
//         type="text"
//         ref={this.textInput}
//       />
//     );
//   }
// }

// focus() {
//   // Explicitly focus the text input using the raw DOM API
//   // Note: we're accessing "current" to get the DOM node
//   this.textInput.current.focus();
// }


export default withAuthenticator(navbar)