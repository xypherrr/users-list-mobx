import {  makeAutoObservable } from "mobx";

class UsersStore {
    inputValue = '';
    users = [];
    

    constructor(){
        makeAutoObservable(this);
    }

    setInputValue(value){
        this.inputValue = value;
    }

    toggleComplete(id) {
        this.users.forEach(user =>{
            if (user.id === id){
                user.completed = !user.completed;
            }
        })
      }

      handleDelete(id){
        this.users = this.users.filter((user) => user.id !== id)
      }

    resetInputValue(){
        this.inputValue = "";
    }

    

    setEditValue(e, id){
        this.users.forEach((user)=>{
            if (user.id === id){
                user.editValue = e;
            }
        })
    }
    addUser = (name) =>{
        const newUser = {
            id: crypto.randomUUID(),
            name,
            completed: false,
            isEditing: false,
            editValue: name,
        };
        this.users.push(newUser);
    }

    handleEdit(id){
        this.users.forEach((user) =>{
            if (user.id === id){
                user.isEditing = !user.isEditing;
            }
        })
    }

    setUserName(id) {
        this.users.forEach(user => {
          if (user.id === id) {
            user.name = user.editValue;
            user.isEditing = !user.isEditing;
          }
        });
      }
}

export const usersStore = new UsersStore();