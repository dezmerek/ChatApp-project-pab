import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        storedUsers: {}
    },
    reducers: {
        setStoredUsers: (state, action) => {
            const newUsers = action.payload.newUsers;
            const existingUsers = state.storedUsers;

            const userArray = Object.values(newUsers);
            for (let i = 0; i < userArray.length; i++) {
                const userData = userArray[i];
                existingUsers[userData.userId] = userData;
            }

            state.storedUsers = existingUsers;
        }
    }
});
export const setStoredUsers = userSlice.actions.setStoredUsers;
export default userSlice.reducer;