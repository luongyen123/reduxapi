import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,FlatList,Platform} from 'react-native';
import {connect} from 'react-redux';
import {fetchData,fetchExtra, getDataSuccess} from '../actions/FecthAction';

const LoadingIndicator =({loading})=>(
    loading ?(
        <View style={styles.loading}>
            <ActivityIndicator 
                animating={true}
                style={styles.loading}
                size='large'
            />
        </View>
    ):null
)
function _renderRow(row){

    return(
        <View style={styles.row}>
            <Text>{row.item.title}</Text>
            <Text>{row.item.description}</Text>
        </View>
    )
    
}
function _onEndReached(props){
    if(props.data.next_page !=0){
       props.fetchExtra(props.data.next_page);
    }
   ds = ds.concat(props.data.data);
    
}
let ds=[];

class Feed extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        this.props.fetchData(this.props.data.next_page);
        
    }
   
    render(){
       
        ds=this.props.data.data;
        if((this.props.data.extra).length !== 0){
            ds=ds.concat(this.props.data.extra)
        }
        return(
            
            <FlatList 
                style={styles.container}
                data={ds}
                renderItem={row=>_renderRow(row)}
                keyExtractor={row=>row.title}
                automaticallyAdjustContentInsets={false}
                scrollsToTop
                onEndReached={()=>_onEndReached(this.props)}
                onEndThreshold={0}
            />
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:'#F5FCFF'
    },
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10
    },
    row:{
        paddingHorizontal:10,
        paddingVertical:15
    },
    title:{
        fontWeight:'bold',
        fontSize:15
    },
    desc:{
        fontSize:13
    }
});
const mapStateToProps=(state)=>{
    return{
        data:state.reducerFeed
    }
}
export default connect(mapStateToProps,{fetchData,fetchExtra})(Feed)