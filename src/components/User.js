import { observer } from "mobx-react";
import UserForm from "./UserForm";
import {usersStore} from "./UsersStore"
import UserEdit from "./UserEdit";



const User = observer(({store}) => {

   
    
   
  return (
    <div>
    <UserForm store={usersStore}/>
    <div>
    <h2>Users List</h2>
    {store.users.map(user => (
      user.isEditing=== true ? <UserEdit store={usersStore} editValue={user.editValue} setEditValue={user.setEditValue} id={user.id}/> : 
        
          
            <div className="flex" key={user.id}>
              <input type="checkbox" checked={user.completed} onChange={(e) => store.toggleComplete(user.id, e.target.checked)}/>
              <p>{user.name}</p>
              <button onClick={() => store.handleDelete(user.id)}>Delete</button>
              <button onClick={() => store.handleEdit(user.id)}>Edit</button>
              </div>
        
))}
    </div>
    </div>
  )
})

export default User
