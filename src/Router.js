import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'
import {
    Nav,
    NavItem,
    Icon,
    Topbar,
    CollapsibleNav,

} from 'amazeui-react';

import './sass/scss.scss';
import Skill from './skill/skill';
import User from './user/user';
import Slider from 'react-slick';

const active={
    backgroundColor:'#000',
    color:'#fff'
}

const menu=[
    {name:'首页',icon:'home',to:'/',exact:true},
    {name:'个人',icon:'user',to:'/user',exact:false},
    {name:'技能',icon:'tag',to:'/skill',exact:false},
]

const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical:true,
    adaptiveHeigh:true
}

const App=()=>(
    <Router>
        <div>
            <Topbar brand="吴家杰个人博客" toggleNavKey="nav" fixedTop>
                <CollapsibleNav eventKey="nav">
                    <Nav topbar>
                        {
                            menu.map(function(item,i){
                                return(
                                    <NavItem key={i}>
                                        <NavLink to={item.to} activeStyle={active} exact={item.exact} className='am-text-lg am-text-center'><Icon amSize="sm" icon={item.icon} className='am-fl'/>{item.name}</NavLink>
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                </CollapsibleNav>
            </Topbar>

                <Route path="/" exact component={Home}/>
                <Route path="/skill" component={Skill}/>
                <Route path="/user" component={User}/>
            <Slider {...settings}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
        </div>
    </Router>
)
const Home=()=>(
    <div>home</div>
)

export default App;
