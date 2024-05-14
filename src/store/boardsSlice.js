import { createSlice, current } from '@reduxjs/toolkit'

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: [
            {
                id: 1,
                title: 'To Do',
                color: '#6a6dcd',
                cards: []
            },
            {
                id: 2,
                title: 'In Progress',
                color: '#d93535',
                cards: []
            },
            {
                id: 3,
                title: 'Done',
                color: '#00a88b',
                cards: []
            }
        ],
        currentBoard: null,
        currentCard: null,
    },

    reducers: {
        setRandomActivity(state, action) {
            const { activity } = action.payload

            state.boards[0].cards.push(activity)
        },
        deleteCard(state, action) {

            const {keyCard, boardId} = action.payload

            const copyBoards = structuredClone(current(state.boards))
            copyBoards[boardId].cards = copyBoards[boardId].cards.filter(card => card.key !== keyCard)
            state.boards = copyBoards
        },
        dragOverHandler(state, action) {
            const { e } = action.payload
            e.preventDefault()
        },
        dragLeaveHandler(state, action) {

        },
        dragStartHandler(state, action) {
            const { e, board, card } = action.payload
            state.currentBoard = board
            state.currentCard = card
            e.target.classList.add('dragging')
        },
        dragEndHandler(state, action) {
            const { e } = action.payload
            e.target.classList.remove('dragging')
        },
        dropHandler(state, action) {
            const { e } = action.payload
            e.preventDefault()
        },
        dropCardHandler(state, action) {
            const { e, board } = action.payload

            const copyboard = structuredClone(board)
            const copyBoardCards = structuredClone(board.cards)

            if (copyboard.id !== state.currentBoard.id) {
                const currentIndex = current(state.currentBoard.cards).indexOf(current(state.currentCard))
                state.currentBoard.cards.splice(currentIndex, 1)
                copyBoardCards.push(current(state.currentCard))

                const copyStateBoards = structuredClone(current(state.boards))

                const newBoards = copyStateBoards.map(board => {
                    if (board.id == copyboard.id) {
                        return {...board, cards: copyBoardCards}
                    }

                    if (board.id == state.currentBoard.id) {
                        return current(state.currentBoard)
                    }
                    return board
                })

                state.boards = newBoards
            }
        }
    }
})

export const {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCardHandler,
    deleteCard,
    setRandomActivity
} = boardsSlice.actions
export default boardsSlice.reducer
