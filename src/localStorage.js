export const loadState=()=>{
    try{
        const serializedState= localStorage.getItem('state.reminders');
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined;
    }
}

export const saveState = (state)=>{
    try{
        const serializedState= JSON.stringify(state);
        localStorage.setItem('state.reminders',serializedState);
    }catch(err){
        console.log(err)
    }
}