import { configureStore } from '@reduxjs/toolkit'
import boardsReducer from './boardsSlice'

export default configureStore({
    reducer: {
        boards: boardsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: [
                'boards/testReduxToolskit',
                'boards/dragOverHandler',
                'boards/dragLeaveHandler',
                'boards/dragStartHandler',
                'boards/dragEndHandler',
                'boards/dropHandler',
                'boards/dropCardHandler',
                'boards/showModal',
                'boards/setRandomActivity'
            ],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            // Ignore these paths in the state
            ignoredPaths: ['items.dates'],
          },
        }),
})
