import {FETCH_OK,FETCH_FAIL,FETCHING,EXTRA_FETCH} from './actionTypes';
import getFeed from '../api/getFeed';

export function getDataFeed(){
    return{
        type:FETCHING,
    }
}
export function getDataSuccess(data,next_page){
    return{
        type:FETCH_OK,
        payload:data,
        next_page:next_page
    }
}
export function getExtraData(data,next_page){
    return{
        type:EXTRA_FETCH,
        payload:data,
        next_page:next_page

    }
}
export function getDataFail(){
    return{
        type:FETCH_FAIL
    }
}
export function fetchData(page){

    return (dispatch)=>{
        dispatch(getDataFeed());
        getFeed(page).then((data)=>{
            dispatch(getDataSuccess(data.data.datas,data.data.next_page));
            
        }).catch((error)=>{dispatch(getDataFail())});
        
    }
}
export function fetchExtra(page){
    return (dispatch)=>{
        dispatch(getDataFeed());
        getFeed(page).then((data)=>{
            dispatch(getExtraData(data.data.datas,data.data.next_page))
        }).catch((error)=>{dispatch(getDataFail())})
    }
}