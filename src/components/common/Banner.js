import React,{Component} from 'react';
import '../../sass/banner.scss'
import Swiper from '../../../node_modules/swiper/dist/js/swiper.js'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
export class Banner extends Component{
	componentDidMount() {
	    new Swiper(this.swiperID, {
	        pagination: {
	            el: this.paginateID,
	        },
	    });
	}
	render(){
		return <div className='bannerBox'>
				我是banner
				<div className="wxchat-banner">
		            <section className="new_custom swiper-container index_tab_con" >
		                <ul className="swiper-wrapper">
		                 
		                </ul>
		                <div className="swiper-pagination banner-pagination" ></div>
		            </section>
	        	</div>
		</div>
	}
	
}
export default Banner;