import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles.js';

function Posts() {
    const classes = useStyles();
    const posts = useSelector((state)=>state.posts)
    console.log(posts)
    return (
        <>
            <h1>Posta</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts