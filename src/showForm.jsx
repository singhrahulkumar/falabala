import React from 'react';
import ShowList from './showList.jsx';

export default class ShowForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           show:{
               name:"",
               ratings:"",
               duration:""
           },
           showList:[]
        }
    }
 
   submitShow =()=>{
     let valid = true;
     let allShowvalues=Object.values(this.state.show)
     for(let i=0; i<allShowvalues;i++){
       if(allShowvalues[i]===''){
           valid=false;
           break;
       }
     }
    if(valid){
    const showList = [...this.state.showList];
    let index=-1;;
    for(let i =0;i<showList.length;i++){
        if(showList[i].name===this.state.show.name){
            index= i;
            break;
        }
    };

    if(index!==-1){
    showList[index] = {...this.state.show}
    } else{
      showList.push({...this.state.show});
    }
    this.setState({
        showList
    })
}

this.setState({
    show:{
               name:"",
               ratings:"",
               duration:""
           }
})
   }

   changeShowForm =(e)=>{
     this.setState({
         show:{...this.state.show,[e.target.name]:e.target.value}
     })
   }



    render(){
        return(
        <div>
        <div id='show-form'>
            <div id ='name-field'>
            <label>Movie Name :</label>
            <input type='text' value={this.state.show.name} onChange={this.changeShowForm} id={"name-input"} name={'name'}/>
            </div>

            <div id ='ratings-field'>
            <label>Ratings :</label>
            <input type='text' value={this.state.show.ratings} onChange={this.changeShowForm} id={"ratings-input"} name={"ratings"}/>
            </div>

             <div id ='duration-field'>
            <label>Duration :</label>
            <input type='text' value={this.state.show.duration} onChange={this.changeShowForm} id={"duration-input"} name={"duration"}/>
            </div>
            <button id={"submit-button"} onClick={this.submitShow}>Submit</button>
         </div>
         <ShowList showList = {this.state.showList}/>
        </div>
        )
    }
}