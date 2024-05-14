// React-redux components
import { useDispatch } from 'react-redux'

//Actions
import {
    setRandomActivity
} from '../../store/boardsSlice'

// Axios
import axios from 'axios'

//CSS
import './button_2.css'

export default function Button_2({children}) {

    const dispatch = useDispatch()

    const getActivity = () => {

        const baseUrl = 'https://www.boredapi.com/api/'
        axios
            .get(baseUrl + 'activity/')
            .then((response) => {
                if (Object.keys(response.data).length) {
                    dispatch(setRandomActivity({ activity: response.data }))
                }
            })
    }

    return (
        <button onClick={getActivity} className='getActive'>{ children }</button>
    )
}