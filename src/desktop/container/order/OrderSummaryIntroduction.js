/**
 * Created by Detai on 2017/7/12.
 */
import { connect } from 'dva';
import { Col } from 'antd';
import ProtalLayout from '../../components/layout/ProtalLayout';
import OrderSummary from '../../components/order/OrderSummaryIntroduction';
import * as styles from '../../styles/ordersummary.css';
import {fetchorderList} from '../../services/order';
import BreadcrumbLayout from '../../components/layout/BreadcrumbLayout';
import {stringify} from 'qs';


class OrderSummaryIntroduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*面包屑数据*/
      itemList: [{
        name: '工作台',
        url: '/#/portal/home'
      },{
        name: '订单管理',
        url: '/#/order/summary'
      }]
    };
  }

  render() {
    return (
        <OrderSummary order={this.props.order} key3={this.props.key3} dispatch={this.props.dispatch}/>
    );
  }
}

export default connect(({ order }) => ({ order }))(OrderSummaryIntroduction);

