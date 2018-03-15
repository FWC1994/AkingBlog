import React from 'react'
import { View } from 'react-web-dom'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Visibility from 'material-ui-icons/Visibility'
import Textsms from 'material-ui-icons/Textsms'
import Whatshot from 'material-ui-icons/Whatshot'
import Tabs, { Tab } from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'
// import Close from 'material-ui-icons/Close'


const styles = theme => ({
  root: {
    '&:first-child': {
      marginTop: '15px',
    },
    '&:hover': {
      background: '#E3F2FD'
    },
    marginBottom: '10px',
    padding: theme.spacing.unit * 2,
    cursor: 'pointer',

  },
  appbar: {
    marginTop: theme.spacing.unit * 2,
  },
  avatar: {
    cursor: 'pointer'
  },
  name: {
    fontSize: '15px',
    fontWeight: '600',
  },
  title: {
    fontFamily: 'Georgia,Times',
    fontWeight: 'bold',
    lineHeight: '1.3',
    color: '#262626',
    fontSize: '18px',
    cursor: 'pointer',
    marginBottom: '10px',
    maxWidth: '300px',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  article: {
    margin: '15px 0',
    maxHeight: '60px',
    overflow: 'hidden',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '3',
    display: '-webkit-inline-box',
  },
  icon: {
    width: '18px',
    height: '18px',
    marginRight: '5px',


  },
  iconHover1: {
    color: '#03A9F4',
    '&:hover': {
      color: '#0277BD',
    }
  },
  iconHover2: {
    color: '#63BD70',
    '&:hover': {
      color: '#43A047',
    }
  },
  iconHover3: {
    // color:'#FF5722',
    // cursor: 'pointer',   
    // '&:hover':{
    //   color:'#F4511E',
    // } 
    color: '#F44336',
    '&:hover': {
      color: '#C62828',
    }
  },


});
class ArticleBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }

  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render() {
    const { classes, list } = this.props
    const { value } = this.state
    const articleList =
      list.map((item, index) => {
        return (
          <Card className={classes.root} key={item.name}>
            <Typography variant="title" className={classes.title}>
              {item.title}
            </Typography>


            <View style={{ flexDirection: 'row' }}>
              <Avatar
                className={classes.avatar}
                alt="avatar"
                src={item.avatar}
              />
              <View style={{ marginLeft: '10px' }}>
                <Typography className={classes.name}>
                  {item.name}
                </Typography>
                <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                  {item.time}
                </Typography>
              </View>
            </View>
            <View style={{ padding: '0 10px' }}>
              <Typography align='left' className={classes.article}>
                {item.article}
              </Typography>
              <View style={{ flexDirection: 'row' }}>
                <View className={classes.iconHover1} style={{ flexDirection: 'row' }}>
                  <Visibility className={classes.icon}></Visibility>
                  <Typography style={{ marginRight: '25px', color: '#7d7e7e' }}>1</Typography>
                </View>
                <View className={classes.iconHover2} style={{ flexDirection: 'row' }}>
                  <Textsms className={classes.icon}></Textsms>
                  <Typography style={{ marginRight: '25px', color: '#7d7e7e' }}>12</Typography>
                </View>
                <View className={classes.iconHover3} style={{ flexDirection: 'row' }}>
                  <Whatshot className={classes.icon}></Whatshot>
                  <Typography style={{ marginRight: '25px', color: '#7d7e7e' }}>25</Typography>
                </View>
              </View>

            </View>
          </Card>
        )
      })

    return (
      <div className={classes.appbar}>
        <AppBar position="static" color='inherit'>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor='primary'
          >
            <Tab style={{ fontWeight: 'bold' }} label='全部'></Tab>
            <Tab style={{ fontWeight: 'bold' }} label='分享'></Tab>
            <Tab style={{ fontWeight: 'bold' }} label='精选'></Tab>
          </Tabs>
        </AppBar>
        {
          articleList
        }
      </div>


    )
  }
}
export default withStyles(styles)(ArticleBox);