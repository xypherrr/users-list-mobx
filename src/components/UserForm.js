
import { observer } from 'mobx-react'

const UserForm = ({store}) => {

   
    const addUser = () =>{
        store.addUser(store.inputValue);
        store.resetInputValue();
    }
  return (
    
    <div>
      <input value={store.inputValue} type="text" placeholder="enter user" onChange={(e) => store.setInputValue(e.target.value)}/>
      <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default observer(UserForm)
