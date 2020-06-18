import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Hi from "./hi.png";

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={Hi} alt="Avatar"
                        className="avatar-img"
                         />

                    <div className="banner-text">
                       
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jrowdy-2020613/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                             {/* GitHub */}
                             <a href="https://github.com/jrowdy" target="_blank" rel="noopener noreferrer">
                             <i class="fa fa-github-square" aria-hidden="true"  />
                            </a>

                            {/* Resume */}
                            <a href="https://drive.google.com/file/d/11joY8S9JQ4tzCvcymhoD627G-lgwACte/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-file-pdf-o" aria-hidden="true"  />
                            </a>
                            
                        </div>
                    </div>

                   

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;