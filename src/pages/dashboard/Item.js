import React , { useContext, useEffect , useState }from 'react';
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";
import {Animated} from "react-animated-css";
// components
import mock from "./mock";
import Widget from "../../components/Widget";
import {ImgToClissify} from "./components/ImgToClissify";
import { GlobalProvider } from '../../context/GlobalState';
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import { GlobalContext } from '../../context/GlobalState';
import { Pane,Text, Button, TextInput,TagInput } from 'evergreen-ui';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Zoom } from 'react-slideshow-image';
import Paper from '@material-ui/core/Paper';
import { ColorExtractor } from 'react-color-extractor'
import { CirclePicker } from 'react-color';

import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Slider from "react-slick";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.5,
  arrows: true
}
const useStyless = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    flexGrow:1,
  },
  gridList: {
    width: 1000,
    height: 750,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  }, 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },button: {
    margin: theme.spacing(1),
  },
}));


export const Item = (item) =>{

  const classess = useStyless();


    console.log("this is the item "+item)
    console.log(item)

    
    const   [colors, setColors] = useState([]);
    const   [colorch, setColorch] = useState([]);


    var classes = useStyles();
    var theme = useTheme();

    function renderSwatches  () {
      const { colors } = colors
   
      return colors.map((color, id) => {
        return (
          <div
            key={id}
            style={{
              backgroundColor: color,
              width: 100,
              height: 100
            }}
          />
        )
      })
    }
  const  getColors = (c) => {
      setColors(c);
      console.log("cooooooool"+colors)
    }
    
    var bech = []
    const  captcolor = (c) => {
      setColorch([...colorch, c.hex])
      console.log(colorch)
    }


const clr = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294']
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
// src="https://www.saveyourwardrobe.com/wp-content/themes/saveyourwardrobe_gaspardbruno/assets/images/logo.svg"
return ( <>
<div>
        

       


      </div>
<Grid item  xs={12}>
    <Widget
      title="still have this item ?"
      upperTitle
      bodyClass={classes.fullHeightBody}
      className={classes.card}
    >
      
      <Avatar
  src={item.item.src}
  name="Alan Turing"
  size={40}
/>
    
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid style={{width: "60%"}} item xs>
          
          
      
        <Slider  {...settings}>
        {
          item.item.moreimgs.map((each, index) => <div> <img key={index} style={{width: "100%"}}  src={each} /> </div>)
        }
        <div> </div>
     </Slider>
      

      



        </Grid>
        <Grid item xs>
        
        </Grid>
      </Grid>

      <br/>
      <ColorExtractor src={ item.item.moreimgs[0]} getColors={getColors}  />
       
     
         

      <Grid container spacing={3} >
        <Grid item xs>
          
        </Grid>
        <Grid item xs style={{width: "60%"}}>
          
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {colors.map(function(color, id) {
            
            console.log('this is the colors'+ color)
            return ( <div
            key={id}
            style={{
              backgroundColor: color,
              width: 50,
              height: 50
            }}

            onClick = {() => {
              setColorch([...colorch, color])
            }}
          />)})  }
        </div>
      
      <br/>
        {"   "}<CirclePicker width = "100%" colors = {clr} onChangeComplete={captcolor} />




        </Grid>
        <Grid item xs>
        
        </Grid>
      </Grid>

       






    <Grid container spacing={3} >
        <Grid item xs>
          
        </Grid>
        <Grid item xs style={{width: "60%"}}>

        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {colorch.map(function(color, id) {
            
            console.log('this is the colors'+ color)
            return ( <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
              <div
            key={id}
            style={{
              backgroundColor: color,
              width: 50,
              height: 50
            }}

            onClick = {() => {
             var array = [...colorch]; 
  var index = array.indexOf(color)
  if (index !== -1) {
    array.splice(index, 1);
    setColorch(array);
  }
            }}
           
          /></Animated>)})  }
        </div>


        </Grid>
        <Grid item xs>
        
        </Grid>
      </Grid>



    <Grid container spacing={3}>
        <Grid item xs={12}>
         
        
     
</Grid>
</Grid>
     










   


      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography color="text" colorBrightness="secondary">
            Item Name :
          </Typography>
          <Typography size="md">
          <TagInput
      inputProps={{ placeholder: 'Add trees...' }}
      values={item.item.produit == undefined ? [""] : [item.item.produit]}
      onChange={values => {
      
      }}
    />
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="text" colorBrightness="secondary">
            Description :
          </Typography>
          <Typography size="md">

          <TagInput
      inputProps={{ placeholder: 'Add trees...' }}
      values={item.item.description == undefined ? [""] : [item.item.description]}
      onChange={values => {
      
      }}
    />

          </Typography>
        </Grid>


        <Grid item>
          <Typography color="text" colorBrightness="secondary">
            Size :
          </Typography>
          <Typography size="md">
          <TagInput
      inputProps={{ placeholder: 'Add trees...' }}
      values={item.item.size == undefined ? [""] : [item.item.size]}
      onChange={values => {
      
      }}
    />
          </Typography>
        </Grid>








      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography color="text" colorBrightness="secondary">
           Quantite :
          </Typography>
          <Typography size="md">
          <TagInput
      inputProps={{ placeholder: 'Add trees...' }}
      values={item.item.quantite == undefined ? [""] : [item.item.quantite]}
      onChange={values => {
      
      }}
    />
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="text" colorBrightness="secondary">
            Price :
          </Typography>
          <Typography size="md">

          <TagInput
      inputProps={{ placeholder: 'Add trees...' }}
      values={item.item.price == undefined ? [""] : [item.item.price]}
      onChange={values => {
      
      }}
    />

          </Typography>
        </Grid>
       
      </Grid>




<br/>
      <Grid container spacing={3}>
        
        <Grid item xs={8} style = {{width:"100%"}}>
         <input  style = {{
  backgroundColor: "#3D0FCF",
  color: "white",
  border: "0px",
  borderColor : "#4CAF50" /* Green */,
  borderRadius : "16px",
  width: "100%",
  height: "100%",
  
}}type = "button" value = "Save it in your wardrobe !" />
        </Grid>
        <Grid item xs={4}>
         
 
        <Button marginRight={16} appearance="minimal" intent="danger"> Delete this item </Button>
         
        </Grid>
      </Grid>

     





    </Widget>
  </Grid>


</>
)


}