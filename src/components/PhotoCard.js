import React from 'react';
import { View, Image } from 'react-native';

const webPhotos = [
    `https://i.pinimg.com/564x/d5/52/9e/d5529e1c17da8565b6d37eb450f1414e.jpg`,
    `https://img.ibxk.com.br/2020/12/04/04105359672478.jpg`,
    `https://awoiaf.westeros.org/images/thumb/d/d4/Aegon_on_Balerion.jpg/450px-Aegon_on_Balerion.jpg`,
    `https://i.pinimg.com/originals/c3/d0/94/c3d0944bc74f97032e52deb4998786ce.jpg`,
    `https://i.pinimg.com/236x/14/59/a5/1459a5f24fcb0fb37ad652c6f935f1d6.jpg`,
    `https://i.pinimg.com/236x/b1/76/46/b17646d7b6586cb17d2490e14781139b--fire-art-imagine-dragons.jpg`,
    `https://i.pinimg.com/originals/3e/a0/4b/3ea04b328823e3305263cb8040faea7f.jpg`,
];

const PhotoCard = (props) => {

    let {width = 150, height = 150} = {...props.size};

    let photos = webPhotos;

    let i = Math.floor(Math.random() * 7.0);
    let uri = photos[i];
    console.log(uri);

    return (
        <Image

            source={{uri: uri}}
            style={{
                width: width, 
                height: height, 
                padding: 4,
                background: '#AAA'              
            }}
            resizeMode="cover" 
        />
    );
};

export default PhotoCard;