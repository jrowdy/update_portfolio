import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
   constructor(props) {
       super(props);
       this.state = { activeTab: 0 };
   }

   toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
            {/* Work Day Scheduler */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://jrowdy.github.io/Portfolio2/proj1.png)center /cover'}}> 
                </CardTitle>

                <CardText> This application uses HTML, CSS, Materialize, JQuery and JavaScript. This is a planner for the working client that needs to visually see their daily responsibilities. The user will be able to type in details of their day in a timeslot and save by pressing the lock button-- which saves their information in local storage so that the details will stay on the page even after refreshing! 
                </CardText>

                <CardActions border>
                <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/jrowdy/Scheduler';
                        }}
                        colored> Github
                    </Button>

                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://jrowdy.github.io/Password-Generator/password.html';
                        }}
                        colored> Live App
                    </Button>
                </CardActions>

                <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>

            {/* Password Generator */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '##000000', height: '176px', background: 'url(https://jrowdy.github.io/Portfolio2/proj2.png)center /cover'}}> 
                </CardTitle>

                <CardText> Password generator that provides user with a password between 8-128 characters based on their preferences (numeric, uppercase, lowercasse, uppercase). If user selects a number outside of the specified range, the generator will remind the user of the requirements and restart. If the user does not select any preferences, the generator will ask the user to restart and select at least one. User can also copy their generated password to their clipboard.
                </CardText>

                <CardActions border>
                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/jrowdy/Password-Generator';
                        }}
                        colored> Github
                    </Button>

                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://jrowdy.github.io/Password-Generator/password.html';
                        }}
                        colored> Live App
                    </Button>
                </CardActions>

                <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>


           
</div>
            
            
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
            {/* Code Quiz*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '##000000', height: '176px', background: 'url(https://jrowdy.github.io/Portfolio2/proj4.png)center /cover'}}> 
                </CardTitle>

                <CardText> A timed, multiple choice quiz based on coding related questions. Users will be given 75 seconds to answer 5 questions. A high score is obtained by answering quickly. Any time left on the timer is the user's score. If the user answers incorrectly, 10 seconds will be deducted from any remaining time left. A final score is presented at the end.
                </CardText>

                <CardActions border>
                <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/jrowdy/CodeQuiz';
                        }}
                        colored> Github
                    </Button>

                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://jrowdy.github.io/CodeQuiz/';
                        }}
                        colored> Live App
                    </Button>
                </CardActions>

                <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>

            {/* Eventhub*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '##000000', height: '176px', background: 'url(https://jrowdy.github.io/Portfolio2/proj3.png)center /cover'}}> 
                </CardTitle>

                <CardText> This application will allow you enter your interests and a city and it will return all the ticketed events from your search. It will save your previous search history and allow you to re-search them at will.
                </CardText>

                <CardActions border>
                <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/jrowdy/Team3';
                        }}
                        colored> Github
                    </Button>

                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://karna1014.github.io/Team3/';
                        }}
                        colored> Live App
                    </Button>
                </CardActions>

                <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>


           
</div>
        )
    } else if(this.state.activeTab === 2) {
        return( <div>
            {/* Dinner and a Movie*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '##000000', height: '176px', background: 'url(https://jrowdy.github.io/Portfolio2/teamproject.png)center /cover'}}> 
                </CardTitle>

                <CardText> Stuck at home a lot more lately? Needs ideas for a perfect night in? This application will allow users to search for recipes and movie options based on their interests and save them together for a perfect movie night with their family. Users will then pair their favorite movie search and dinner recipe option(s) searched from ingredients they have in their home. If users would like to save a particular movie search, it can be saved and populated on their dashboard future reference.
                </CardText>

                <CardActions border>
                <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/Karna1014/Dinner_And_A_Movie';
                        }}
                        colored> Github
                    </Button>

                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/Karna1014/Dinner_And_A_Movie';
                        }}
                        colored> Live App
                    </Button>
                </CardActions>

                <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>
        </div>
            
        )
   } else if(this.state.activeTab === 3) {
    return(
        <div> 
            {/* Motivate Me*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/58674083/84715507-a3d99400-af3e-11ea-958e-0e1aa019c808.png)center /cover'}}> Motivate Me
                </CardTitle>
                    <CardText>
                     <br/>
                    With the increase of stress, anxiety and other mental health issues due to isolation and quarantine, we are all in need of support and motivation to help us complete our goals.  Motivate Me is an application that gives users positive, inspirational quotes and videos related to keyword searches.  Users will be able to create an account to write, create, update, delete personal goals.
                    </CardText>

                <CardActions border>
                <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/jrowdy/Motivate-Me';
                        }}
                        colored> Github
                    </Button>
                    <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://pacific-wave-23407.herokuapp.com/';
                        }}
                        colored> Live App
                    </Button>
            
                </CardActions>

                <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>
        </div>
    )
   }
}
   
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple > 
                    <Tab>HTML</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>React</Tab>
                    
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
    
            </div>
        )
    }
}

export default Projects;