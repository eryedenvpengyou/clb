import { connect } from 'dva';
import ProtalLayout from '../../components/layout/ProtalLayout';
import * as styles from '../../styles/ordersummary.css';
import BreadcrumbLayout from '../../components/layout/BreadcrumbLayout';
import { Tabs ,Col } from 'antd';
import OrderYJPerson from '../../components/order/OrderYJPerson';
import OrderYJTeam from '../../components/order/OrderYJTeam';


class OrderYJ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*面包屑数据*/
      itemList: [
        {
          name: '工作台',
          url: '/#/portal/home'
        },{
          name: '订单管理',
          url: '/#/order/orderYJ'
        }
      ],
      key1: 1,
      key2: 1,
    };
  };

  onTabClick(key){
    if(key == 1){
      this.setState({key1: new Date().getTime()});
    }
    else if(key == 2){
      this.setState({key2: new Date().getTime()});
    }
  }

  render() {
    return (
      <ProtalLayout location={this.props.location}>
        <div style={{width: '100%'}}>
          <BreadcrumbLayout itemList={this.state.itemList} />
          <Col className={styles.content}>
            <br/>
            <Tabs defaultActiveKey={this.props.params.key||'1'} style={{overflow: 'visible'}}  onTabClick={this.onTabClick.bind(this)} type="card">
              <Tabs.TabPane tab="个人" key="1" >
                {<OrderYJPerson key1={this.state.key1}/>}
              </Tabs.TabPane>
              {
                JSON.parse(localStorage.user).userType != "ADMINISTRATION" &&
                <Tabs.TabPane tab="团队" key="2">
                  <OrderYJTeam key2={this.state.key2}/>
                </Tabs.TabPane>
              }
            </Tabs>
          </Col>
        </div>
      </ProtalLayout>
    );
  }
}
export default connect()(OrderYJ);

