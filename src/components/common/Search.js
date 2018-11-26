import React,{Component} from 'react';
import '../../sass/seach.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
export class Search extends Component{
	render(){
		return <div className='searchBox'>
			<a className='content'>
				<i>{<FontAwesomeIcon icon={faSearch}/>}</i>
				<i>搜索</i>
			</a>
		</div>
	}
	
}

export default Search;