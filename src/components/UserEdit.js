
import { observer } from 'mobx-react'

const UserEdit = ({store, editValue, setInputValue, id}) => {

 

  return (
    
    <div>
      <input value={editValue} type="text" placeholder="edit user" onChange={(e) => store.setEditValue(e.target.value, id) }/>
      <button onClick={() => store.setUserName(id)}>Update User</button>
    </div>
  )
}

export default observer(UserEdit)
