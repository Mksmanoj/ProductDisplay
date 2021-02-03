import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from "./styles";
const ProductItem = (props) =>{
    return (
        <View style={styles.ProductContainer}>

            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>PRODUCT 1</Text>
                <Text style={styles.subtitle}>I AMA A GOOD PRODUCT</Text>
            </View>
        </View>
    );
};

export default ProductItem;

