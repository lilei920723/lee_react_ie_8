import React, {Component} from 'react';
import {UserModel} from "../../model/userModel/user"
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";

require("./nav.css")
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo:null
        }
    }


    componentWillMount(){
      this.props.getUserInfo()
      // UserModel.loginOut().then(res=>{
      //   console.log(111)
      // })

    }
    componentDidMount(){

    }



    render() {
      const {userInfo, isLoading, errorMsg} = this.props.userInfo;
      console.log(userInfo)
        return (
            <div className="header-nav">
              <div className="center">
                <img className="nav-logo" src={require("./image/logo.png")} alt="" width="155" height="35" />
                <div className="nav-bar">
                    <span><a href="../index.html">首页</a></span>
                    <span><a href="../enterpriseEntry/index.html">企业入驻</a></span>
                    <span><a href="../enterpriseEntry/driver.html">司机加盟</a></span>
                    <span><a href="../enterpriseEntry/abouUs.html">关于我们</a></span>
                    <span><a href="../enterpriseEntry/transportRoute.html">运力线路</a></span>
                    <span><a href="../enterpriseEntry/help.html">帮助中心</a></span>
                    <span><a href="../wallet/p-wallet.html" className="nav-bar-wallet">我的钱包</a></span>
                </div>
                <div className="nav-user" style={{"display":"none"}}>
                    <a href="../h_personalCenter/admin-news-system.html" className="nav-letter">
                        <img src={require("./image/letter.png")} alt="" width="24" height="16" />
                    </a>
                    <div className="nav-user-select">
                        <div className="user-avatar"></div>
                        <span className="userName"></span>
                        <div className="nav-user-menu">
                            <span id="userCenter">个人中心</span>
                            <a href="../accountSettings/index.html"><span>账户设置</span></a>
                            <span className="loginOut">退出登录</span>
                        </div>
                    </div>
                    <div className="nav-wallet"><a href="javascript:void(0)" id="addOrder">立即下单</a></div>
                </div>
                <div className="user-status">
                    <div className="login">
                        <p><a href="../login/login.html" className="loginbtn">你好，请登录</a></p>
                    </div>
                </div>
              </div>
            </div>


        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(Nav);
