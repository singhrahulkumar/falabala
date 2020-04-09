import React from 'react';

export default class ShowList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           searchValue:"",
        }
    }

    searchShow = (e) =>{
        this.setState({
            searchValue:e.target.value
        })
    }

    render(){
        let filteredShowList =this.state.searchValue.length >=2 ? this.props.showList.filter((show)=>show.name.indexOf(this.state.searchValue) > -1):this.props.showList;
        if(filteredShowList.length>1){
        filteredShowList = filteredShowList.sort((showa,showb)=>{
            let showaDuration = showa.duration.substring(0,showa.duration.length-1);
            let showbDuration=showb.duration.substring(0,showb.duration.length-1);
            if(showa.duration.substring(showa.duration.length -1,showa.duration.length) === 'h') {
             showaDuration = parseInt(showaDuration) * 60;
            }

            if(showb.duration.substring(showb.duration.length -1,showb.duration.length) === 'h') {
                showbDuration = parseInt(showbDuration) * 60;
            }
            return showbDuration - showaDuration;
        })
        }
        return(
            <div id = 'show-list-search'>
             <div>
                 <label>Search:</label>
                 <input type = 'text' onChange={this.searchShow} id={"search-input"} value={this.state.searchValue}/>
             </div>
             {
                 filteredShowList.length > 0 ? 
                 <table id={'directory-table'}>
                     <thead>
                     <tr>
                    <th>Name</th>
                    <th>Ratings</th>
                    <th>Duration</th>
                     </tr>
                     </thead>
                     <tbody>
                         {
                             filteredShowList.map(show =><tr>
                                 <td>{show.name}</td>
                                 <td>{show.ratings}</td>
                                 <td>{show.duration}</td>
                                 </tr>
                        )
                         }
                    </tbody>
                </table>
                 
                 
                 : <div id ={"no-result"}>No Search Found</div>
             }
            </div>
        )
    }
}