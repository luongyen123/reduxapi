import React,{Component} from 'react';
import {Image,TouchableOpacity} from 'react-native';
import {Card,CardItem,Left,Body,Button,Right,Content,Text,Thumbnail,Icon} from 'native-base';
import ViewMoreText from 'react-native-view-more-text';
import PhotoGrid  from 'react-native-thumbnail-grid';


const url= "http://apidev.canvasee.com/";

export default class FeedView extends Component{
    renderViewMore(onPress){
        return(
          <Text onPress={onPress} style={{color:'blue'}}>View more</Text>
        )
    }
      renderViewLess(onPress){
        return(
          <Text onPress={onPress} style={{color:'blue'}}>View less</Text>
        )
     }
     showImage(uri){
       console.log(uri);
        <Image style={{}} source={uri} />
     }
    render(){
      let images=[];
        if((this.props.media).length !==0){
        (this.props.media.map)((image)=>{
          if((image.type ==='2')){
            images.push(url+image.path_link)
          }
        })
        }
        return(
            <Card style={{flex:0}}>
            <CardItem>
              <Left>
                  
                <Thumbnail source={{uri: url+this.props.avartar}} />
                <Body>
                  <Text>{this.props.username}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
              
            </CardItem>
            
            <PhotoGrid source={images} imageStyle='fit' onPressImage={uri => this.showImage(uri)}/>
            <CardItem style={{marginTop:0,paddingTop:0}}>              
              <Body>                                              
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}
                    >
                    <Text style={{fontSize:15,fontFamily:'Arial'}}>
                        {this.props.content}
                    </Text>
                    </ViewMoreText>
              </Body>
            </CardItem>
            <CardItem style={{paddingTop:0,marginTop:0}}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>{this.props.number_like}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        );
    }
}