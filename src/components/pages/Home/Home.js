import React,{Component} from 'react';
import axios from 'axios'
import Search from '../../common/Search'
import Banner from '../../common/Banner'
import Regin from '../Mine/regin'
export class Home extends Component{
	componentWillMount(){
		axios.post("api/design/homecases?page=1&size=20")
		.then((res)=>{
			console.log(res)
		})
	}
	render(){
		return <div>
		<Search/>
		<Banner/>
		</div>
	}
	
}

export default Home;