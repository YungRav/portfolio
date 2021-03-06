import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Carter Keith</h2>
            <img
              src="https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/16107315_10208267183373623_6149141745702718893_o.jpg?_nc_cat=107&_nc_sid=cdbe9c&_nc_ohc=iI42UAJoXcIAX9EmqjL&_nc_oc=AQl2B-VuknUiDlvxzDCYLzR5gAJlIsIEYV1ljXboVy7dzBJTmhzY4U7kPKjU7FJM3iz0MrrzXz87_Oz0Mjnft_Ti&_nc_ht=scontent-mia3-2.xx&oh=48516615681356923a0d465578337aa3&oe=5F7D066F"
              alt="photo"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (912) 429-2632
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (912) 429-2632
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    carterkeith3@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github-square" aria-hidden="true"/>
                    YungRav
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
