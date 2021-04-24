import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {

    const [postData, setPostData] = useState({
        accountName: '',
        title: '',
        points: '',
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    return(
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Nowe dane
                </Typography>
                <TextField 
                    name="accountName" 
                    variant="outlined" 
                    label="AccountName" 
                    fullWidth 
                    value={postData.accountName}
                    onChange={(e) => setPostData({ ...postData, accountName: e.target.value })}
                />
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <Button varinat="container" color="primary" type="submit" fullWidth> Przycisk </Button>
            </form>
        </Paper>
    );
}

export default Form;