import React , { useContext, useEffect , useState }from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import {ListItems} from '../ListItems'
import * as ml5 from "ml5";
import imageExists from "image-exists";
import { Li } from 'evergreen-ui';
import Loader from 'react-loader-spinner'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Slider from "react-slick";


function  compairearrays (array1, array2){
    var res = false;

    var cmp = 0;
    for(var i  = 0 ; i < 7 ; i++){
      
      for(var j = 0 ; j < 7 ; j++ ){
        
        if(array1[i].className == array2[j].className){
          cmp ++ ;
        }
      }


    }
    console.log(cmp)
    if(cmp == 7 ){
      return true;
    }
    return false


}



export const ImgToClissify = () =>{


  const   [predictions, setPredictions] = useState([]);
  const   [its, setIts] = useState([]);
  //setIts([])


const { getImgsToClissify,imgs_to_clissify,sendimgs,items } = useContext(GlobalContext);





const classifyImg =  (img) => {


  var isitem_of_the_wardrobe = false;

    
  // Initialize the Image Classifiermethod with MobileNet    https://www.saveyourwardrobe.com/wp-content/themes/saveyourwardrobe_gaspardbruno/assets/images/logo.svg
  var classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  // Put the image to classify inside a variable
  var x = document.createElement("IMG");
  x.crossOrigin = "anonymous"
  x.setAttribute("src", img);
 if(x.width == 0 || x.height == 0 ){
  x.width = 700
   x.height = 700
 }
  x.setAttribute("width", x.width);
  x.setAttribute("height", x.height);
  const image = x;

  // Make a prediction with a selected image
  return classifier.predict(image, 7, (err, results) =>{
  // Return the results
  if(!err)
    return results;
  })
    .then( (results)=>  {
      // Set the predictions in the state
      setPredictions(results)
      console.log(results)


      for(let obj of results){
        if(obj["className"].includes("shirt")||
        obj["className"].includes("jersy")||
        obj["className"].includes("sandal")||
        obj["className"].includes("suit")||
        obj["className"].includes("hat")||
        obj["className"].includes("clothes")||
        obj["className"].includes("bra")||
        obj["className"].includes("sandal")||
        obj["className"].includes("velvet")||
        obj["className"].includes("jean")||
        obj["className"].includes("shoe")||
        obj["className"].includes("skirt")){
          
         
          return {"isit":true , "results" : results};
        }
      }
      return {"isit":false , "results" : results};

    })

   
}


useEffect(async() => {
  
await getImgsToClissify().then( async function(v) {
    
    //v.push("https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg") 
      var true_imgs_to_send = []
      console.log(v)





     
      
      

      
      var lastresult = [{className: "kk"},{className: "kk"},{className: "kk"},{className: "kk"},{className: "kk"},{className: "kk"},{className: "kk"}] ;
    for(var j = 0 ; j< v.length ; j++){
      var arr = [];
      for(var i = 0; i < v[j].length;i++){
      console.log(v[j][i])
     
    var results = await classifyImg(v[j][i]) 
   
    var thelastclassificationsarefalse = compairearrays(results.results,lastresult);
    console.log(thelastclassificationsarefalse)
   

        lastresult = results.results
    if(results.isit == true && !thelastclassificationsarefalse){
        //  console.log("trueeeeeeeeeee")
        arr.push(v[j][i])
       


      
  }
}
true_imgs_to_send.push({"src":arr ,"mailnum": j })
    }

    return  await sendimgs(true_imgs_to_send);

  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
 


 // setIts(it)
 

  
  

}, []);




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

return (
    <>    


      {items.length===0 ? <> <CssBaseline />
      <Container fixed > <div style={{
          
          display: 'flex',
          justifyContent: 'center'
        }}><Loader
         type="Hearts"
         color="#3D0FCF"
         height={500}
         width={500}
         timeout={3000*60} //3 secs
 
      /></div>  </Container>  </> : <ListItems items = {items} />}
     




</>
)

}