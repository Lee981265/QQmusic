import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js"
import {Provider} from "react-redux"
import "./CSS/base.css"
import {HashRouter as Router, Route, Link, Redirect,IndexRoute} from 'react-router-dom'
import RankList from './component/RankList.jsx'
import Toplist from './component/Toplist.jsx'
import player from './component/player/player.jsx'
import Mini from './component/mini-player/mini-player.jsx'

ReactDOM.render(
	<Router>
  		<Provider store={store}>
	  		<div>
			    <div className="mod_header">
			    	<div className="header" style={{width:"100%",backgroundColor: "#31c27c",height:"132px"}}>
			    		<div className='music_logo'>QQ音乐</div>
			    		<a href="javascript:;" className="btn_download">下载APP</a>
			    	</div>
			    </div>
			    <div>
                	<Route path="/ranklist" component={RankList}></Route>
			    </div>
			    <div>
                	<Route exact path="/toplist/:id" component={Toplist}></Route>
			    </div>
                <div>
                    <Route path='/player/:id/:imgid/:songmid' component={player}></Route>
                </div>
                <Mini />
			</div>
  		</Provider>
	 </Router>
	, document.getElementById("demo"))
