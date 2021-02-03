import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ProductContainer:{
        width:'100%',
        height:'100%',
    },
    titles:{
        marginTop:'80%',
        width: '100%',
        alignItems: 'center',
    },
    title:{
        fontSize: 45,
        fontWeight:'500',
        color: '#0048fd'
    },
    subtitle:{
        fontSize: 20,
        color: '#dd0909'
    },

    image: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }

});

export default styles;
