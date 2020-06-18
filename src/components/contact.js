import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jasmin Rowdy</h2>
                        <img className="pic"
                        src="https://pbs.twimg.com/profile_images/1199098398206377984/oNR0wAjj_400x400.jpg"
                        alt="avatar"
                        style={{height: '250px' }}
                       />
                       <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> Hi! I am a North Carolina State University alumni and an eighth year educator. I hope to design, clean, unique and efficient sites and applications! I am a Google for Education Certified Trainer and I train other educators how to use Google tools in their classroom by leading local and state-level workshops. Use the listed information to contact me!</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                    <div className="contact-list">
<List>

        <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                jmrowdy20@gmail.com
            </ListItemContent>
        </ListItem>

        <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-twitter" aria-hidden="true"/>
                @msjrowdy
            </ListItemContent>
        </ListItem>

    
        
</List>
                         </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;