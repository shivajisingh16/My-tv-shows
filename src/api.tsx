import axios from "axios"

export const searchShows = (keyword:string)=>{
  axios.get("https://api.tvmaze.com/search/shows?q="+keyword).then((response)=>response.data.map((item:any)=>item.show));
}