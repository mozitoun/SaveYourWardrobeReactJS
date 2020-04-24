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
import { Pane,Text, Button, TextInput } from 'evergreen-ui';
import {Item} from './Item'

export  function ListItems(items){

  console.log(items)
    var itemList = [];

    for(var  i  = 0 ; i< items.items.length ; i++){
      for(var j = 0 ; j < items.items[i].items_infos.length ; j++){
      

        itemList.push(items.items[i].items_infos[j])


        }}
    console.log(items.items)
 
 

    var classes = useStyles();
    var theme = useTheme();
return ( 
  <>
   {itemList.map(function(itm,i)  { return  <Item item = {itm}/>} )}
  </>
)


}