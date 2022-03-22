import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box, Container } from "@mui/material";
import './Homepage.css';
import cover from '../pictures/cover.jpg';

export default function Homepage() {
    return (
        <>
        
            <div className="coverdiv">
                <img src={cover} className="cover"></img>
                <div className="blackcover"></div>
            </div>
            
        </>
    )
}