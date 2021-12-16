import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from './components/Product'
import Categorie from './components/Categorie'
import {connect} from "react-redux";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/material';


function Home({loginUser}) {
    const [categoryinfo, setCategoryinfo] = useState({
        c: []
    })

    const fetchCategories = () =>{
        return fetch("http://localhost:5000/catogeries").then((response)=> response.json()).then((data) =>{
            console.log(data)
            setCategoryinfo({
                c: data
            })
        })

    }

    useEffect(() => {
        fetchCategories()
    }, [])
    // var cardStyle = {
    //     display: 'block',
    //     width: '30vw',
    //     transitionDuration: '0.3s',
    //     height: '45vw'
    // }

    const { c } = categoryinfo
    
    return (
            
            <div>
               <Nav user={loginUser}/> 
            <Container style={{marginTop:70}}>
            
            <Grid container spacing={6} >
            
            
            {
                c.map((cat)=>
                
                
                <Grid item xs={3} md={8} lg={4}>
                
                
                <Card  raised="true">
                
                <CardActionArea component={RouterLink} to={`/category/${ cat.category }`}>
                <CardMedia
                component="img"
                height="150"
                image= {`/images/cards/${ cat.category }.jfif`}
                alt="green iguana"
                />
                
                <CardContent>
                    <Typography variant="h3" color="text.primary">{ cat.category}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    
                    </Typography>
                </CardContent>
                
                </CardActionArea>
                
                </Card>
                </Grid>
               
            )
            }
             </Grid>
        
        </Container>
            </div>
        )
        }

const mapStateToProps =(state)=>{
  
    return {
        
        loginUser: state.userReducer.username
        
    }
  }
  
export default connect(mapStateToProps)(Home);
  