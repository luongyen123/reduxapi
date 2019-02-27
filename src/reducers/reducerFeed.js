import {FETCHING,FETCH_FAIL,FETCH_OK,EXTRA_FETCH} from '../actions/actionTypes';

const DEFAULT_STATE ={
    data:[],
    extra:[],
    next_page:1,
    isFetching:false,
    dataFetched:false,
    error:false
};

export default (state=DEFAULT_STATE,action)=>{
    switch (action.type) {
        case FETCHING:
            return{
                ...state,
                isFetching:true,
                data: [],
            }
            break;
        case FETCH_OK:{
            return{
                ...state,
                data: action.payload,
                isFetching:false,
                next_page:action.next_page

            }
            break;
        }
        case FETCH_FAIL:{
            return{
                ...state,
                isFetching:false,
                error:true
            }
            break;
        }
        case EXTRA_FETCH:{
            
            return{
                ...state,
                extra:action.payload,
                isFetching:false,
                next_page:action.next_page
            }
            console.log(data)
        }
        default:
            return state;
    }
}