// React-redux components
import { useDispatch } from 'react-redux'

//Actions
import {
    setRandomActivity
} from '../../store/boardsSlice'

// React components
import { useEffect, useState } from 'react'

// Axios
import axios from 'axios'

//CSS
import './button_2.css'

export default function Button_2({children}) {

    const [activity, setActivity] = useState({})

    const dispatch = useDispatch()

    const getActivity = (activity) => {
        dispatch(setRandomActivity({ activity }))

    }

    useEffect(() => {
        const baseUrl = 'https://www.boredapi.com/api/'
        axios
            .get(baseUrl + 'activity/')
            .then((response) => {
                setActivity(response.data)
            })
    }, [activity])

    return (
        <button onClick={() => getActivity(activity)} className='getActive'>{ children }</button>
    )
}