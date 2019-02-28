import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,FlatList,Platform} from 'react-native';
import {connect} from 'react-redux';
import {fetchData,fetchExtra} from '../actions/FecthAction';
import FeedView from './Feed/feed';
import { Container, Content } from 'native-base';


function _renderRow(row){
    return(
            
                <FeedView 
                    avartar= {row.item.user_create.profile_path} 
                    username={row.item.user_create.name}
                    number_like={row.item.number_like}
                    number_comment={row.item.number_comment}
                    content={row.item.content}
                    media={row.item.media}
                    />
       
    )
    
}
function _onEndReached(props,olddata){
    if(props.data.next_page !=0){
       props.fetchExtra(props.data.next_page,olddata);
    }
}


class Feed extends Component{
    constructor(props){
        super(props);
        
        
    }
    componentDidMount(){
        this.props.fetchData(1);
    }
    render(){
        return(
            (this.props.data.isFetching)?
            (<View style={styles.loading}>
                <ActivityIndicator 
                    animating={true}
                    style={styles.loading}
                    size='large'
                />
            </View>):
            <Container>
               
                <Content>
                    <FlatList 
                    data={this.props.data.data}
                    renderItem={row=>_renderRow(row)}
                    automaticallyAdjustContentInsets={false}
                    accessibilityElementsHidden
                    keyExtractor={row=>"'"+row.id+"'"}
                    onEndReached={()=>_onEndReached(this.props,this.props.data.data)}
                    onEndReachedThreshold={0.5}
                />
                </Content>
            </Container>
            
            
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
});
const mapStateToProps=(state)=>{
    return{
        data:state.reducerFeed
    }
}
export default connect(mapStateToProps,{fetchData,fetchExtra})(Feed)