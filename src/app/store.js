import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/PostsSlice'
import usersReducer from '../features/users/UsersSlice'
import notificationsReducer from '../features/notifications/NotificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  }
})
