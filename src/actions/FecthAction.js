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
export function getExtraData(data,next_page,olddata){
    return{
        type:EXTRA_FETCH,
        payload:olddata.concat(data),
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
            let next_page;
            if(data.data.pagination.current_page+1<data.data.pagination.total_pages){
                next_page=data.data.pagination.current_page+1;
            }else{
                next_page=0;
            }
            dispatch(getDataSuccess(data.data.feed,next_page));
            
        }).catch((error)=>{dispatch(getDataFail())});
        
    }
}
export function fetchExtra(page,olddata){
    return (dispatch)=>{
        getFeed(page).then((data)=>{
            let next_page;
            if(data.data.pagination.current_page+1<=data.data.pagination.total_pages){
                next_page=data.data.pagination.current_page+1;
            }else{
                next_page=0;
            }
            dispatch(getExtraData(data.data.feed,next_page,olddata))
        }).catch((error)=>{dispatch(getDataFail())})
    }
}