import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function List (props) {

    function carregaIcone(likeada){
        return likeada ?
        require('../img/likeada.png') : require('../img/like.png')
    };

    function mostraLikers(likers){
        if(likers === 0){
            return;
        }
        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
        );
    };

  return (
      <View>
          <View style={styles.viewperfil}>
            <Image
                source={{ uri: props.data.imgperfil }}
                style={styles.fotoperfil}
            />
            <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
          </View>

            <Image
                source={{ uri: props.data.imgperfil }}
                style={styles.fotoPublicacao}
                resizeMode='cover'
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={ carregaIcone(props.data.likeada) }
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image
                        source={require('../img/comment.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

            </View>

        {mostraLikers(props.data.likers)}

        <Text style={styles.nomeRodape}>{props.data.nome}</Text>
        <Text style={styles.descRodape}>{props.data.descricao}</Text>

      </View>
  );
}

const styles = StyleSheet.create({
    viewperfil:{
        flexDirection: 'row',
        //flex: 1,
        alignItems: 'center',
        padding: 8,
    },

    fotoperfil:{
        width: 50, 
        height: 50,
        borderRadius: 25,
    },

    nomeUsuario:{
        marginLeft: 5,
        fontSize: 22,
    },

    fotoPublicacao:{
        height: 400,
        alignItems: 'center'
    },

    areaBtn:{
        flexDirection: 'row',
        padding: 5
    },

    iconeLike:{
        width: 25,
        height: 25,
    },

    btnsend:{
        marginLeft: 5
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    descRodape:{
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15
    },
});