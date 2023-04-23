// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import { Image, Button, Divider, ConfigProvider, theme } from 'antd';
import title_decorate from './svg/title-decorate.svg';
import share_fav from './svg/share-fav.svg';
import enter_opentarget from './svg/enter-opentarget.svg';
import PriceIndicator from './ui/PriceIndicator';
import { Rate } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { Card, List, Spin, Space } from 'antd';
import NETWORK_HOST from './network';
import defaultCardIcon from './base64pic/defaultCardIcon';

const testdata = [
  {
      "tid": "1101",
      "name":"jaqk命令行工具",          // ai tools 名称
      "creator": "jackyanjiaqi@gmail.com",      // 作者的username
      "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
      "type":  1,         // 工具类型
      "price": "¥600/年",        // 价格
      "update_time": "2023-04-22",  // 更新时间
      "desc": "一款命令行AI产品，可以针对个人进行AI需求定制，客户端APP交付，拖拽式数据处理",    // 描述
      "img": "https://picx.zhimg.com/v2-fddc1da7a0926123f86b4e1165030ce9_1440w.jpg?source=172ae18b"
  },
  {
    "tid": "1102",
    "name":"合伙人自习室",          // ai tools 名称
    "creator": "闫佳奇",      // 作者的username
    "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
    "type":  1,         // 工具类型
    "price": "¥30/时",        // 价格
    "update_time": "2023-04-22",  // 更新时间
    "desc": "可以进行私有化AI部署的场地，用于开发AI应用",    // 描述
    "img": "https://pic3.zhimg.com/80/v2-1570b618531c9b0bcf6d273d5fe88cfa_720w.webp"
  },
  {
    "tid": "1103",
    "name":"Flutter三剑客-编辑器",          // ai tools 名称
    "creator": "jackyanjiaqi@gmail.com",      // 作者的username
    "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
    "type":  1,         // 工具类型
    "price": "free",        // 价格
    "update_time": "2023-04-22",  // 更新时间
    "desc": "类似 vscode 的代码编辑工具",    // 描述
    "img": "https://picx.zhimg.com/v2-aaae5bf958d859cdc79ae398f92dedb2_1440w.jpg?source=172ae18b"
  },
  {
    "tid": "1104",
    "name":"Flutter三剑客-播放器",          // ai tools 名称
    "creator": "佚名",      // 作者的username
    "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
    "type":  1,         // 工具类型
    "price": "free",        // 价格
    "update_time": "2023-04-22",  // 更新时间
    "desc": "播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件",    // 描述
    "img": "https://picx.zhimg.com/v2-fddc1da7a0926123f86b4e1165030ce9_1440w.jpg?source=172ae18b"
  },
  {
    "tid": "1105",
    "name":"Flutter三剑客-资源嗅探器",          // ai tools 名称
    "creator": "",      // 作者的username
    "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
    "type":  1,         // 工具类型
    "price": "free",        // 价格
    "update_time": "2023-04-22",  // 更新时间
    "desc": "递归地嗅探目标页的视频音频图片等资源",    // 描述
    "img": "https://pic3.zhimg.com/80/v2-1570b618531c9b0bcf6d273d5fe88cfa_720w.webp"
  },
  {
    "tid": "1106",
    "name":"jaqk命令行工具",          // ai tools 名称
    "creator": "jackyanjiaqi@gmail.com",      // 作者的username
    "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
    "type":  1,         // 工具类型
    "price": "¥600/年",        // 价格
    "update_time": "2023-04-22",  // 更新时间
    "desc": "一款命令行AI产品，可以针对个人进行AI需求定制，客户端APP交付，拖拽式数据处理",    // 描述
    "img": "https://picx.zhimg.com/v2-fddc1da7a0926123f86b4e1165030ce9_1440w.jpg?source=172ae18b"
},
{
  "tid": "1107",
  "name":"合伙人自习室",          // ai tools 名称
  "creator": "闫佳奇",      // 作者的username
  "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
  "type":  1,         // 工具类型
  "price": "¥30/时",        // 价格
  "update_time": "2023-04-22",  // 更新时间
  "desc": "可以进行私有化AI部署的场地，用于开发AI应用",    // 描述
  "img": "https://pic3.zhimg.com/80/v2-1570b618531c9b0bcf6d273d5fe88cfa_720w.webp"
},
{
  "tid": "1108",
  "name":"Flutter三剑客-编辑器",          // ai tools 名称
  "creator": "jackyanjiaqi@gmail.com",      // 作者的username
  "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
  "type":  1,         // 工具类型
  "price": "free",        // 价格
  "update_time": "2023-04-22",  // 更新时间
  "desc": "类似 vscode 的代码编辑工具",    // 描述
  "img": "https://picx.zhimg.com/v2-aaae5bf958d859cdc79ae398f92dedb2_1440w.jpg?source=172ae18b"
},
{
  "tid": "1109",
  "name":"Flutter三剑客-播放器",          // ai tools 名称
  "creator": "佚名",      // 作者的username
  "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
  "type":  1,         // 工具类型
  "price": "free",        // 价格
  "update_time": "2023-04-22",  // 更新时间
  "desc": "播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件,播放markdown文档和fcpxml格式的视频轨道文件",    // 描述
  "img": "https://picx.zhimg.com/v2-fddc1da7a0926123f86b4e1165030ce9_1440w.jpg?source=172ae18b"
},
{
  "tid": "1110",
  "name":"Flutter三剑客-资源嗅探器",          // ai tools 名称
  "creator": "",      // 作者的username
  "url": "https://zhuanlan.zhihu.com/p/616547717",          // 工具链接，点击跳转
  "type":  1,         // 工具类型
  "price": "free",        // 价格
  "update_time": "2023-04-22",  // 更新时间
  "desc": "递归地嗅探目标页的视频音频图片等资源",    // 描述
  "img": "https://pic3.zhimg.com/80/v2-1570b618531c9b0bcf6d273d5fe88cfa_720w.webp"
},{
  "tid": -1,
  "desc": '加载标记',
  "request":{
    "url": "/tools/getByType",
    "body":{
      "type": 1,          // 如无type或为0则返回全部
      "offset": 1,        //分页查询,第几页
      "limit": 10         //分页查询，每页几个
    }
  }
}
];

const ButtonStyle = { minWidth: 64, width: '100%' };
const Color = {
  white: 'white',
  primary: '#0ea5e9',
}
/// 以下保存页面状态
let dataFactory = {
  search: '',
  page: 0,
  total: 0,
  loadingState: null,
  source: []
};
function dataResetClear(){
  dataFactory.page =  0;
  dataFactory.total =  0;
  dataFactory.source = [
    {
      "tid": -1,
      "desc": '加载标记',
      "network":{
        "method": "netToolsGetAllByPage",
        "params": {
          "offset": 0,
          "page": 1,
          "pagecount": 20
        }
      }
    }
  ]
}
dataResetClear();

function App(){
  const [watching, setState] = useState(dataFactory);
  /// 加载数据后引起界面变化
  async function dataLoadThen(promiseFn, search = ''){
    /// 不同的 search 视为不同的从头请求(包含上一次数据清零)
    if(search != dataFactory.search){
      dataResetClear();
      dataFactory.search = search;
    }
    const response = await (dataFactory.loadingState = promiseFn());
    dataFactory.loadingState = null;
    console.log('response:', response);
    if(response){
      const loadFlagItem = dataFactory.source[dataFactory.source.length - 1];
      const { page } = response.invokeParams;
      /// 同步数据
      dataFactory.page = page;
      dataFactory.total = response.data.total;
      /// 移除 loading 条并添加新数据
      const newDatas = response.list;
      dataFactory.source.splice(dataFactory.source.length - 1, 1, ...newDatas);
      console.log(dataFactory);
      /// 计算数量是否需要 loadMore
      if(dataFactory.source.length < dataFactory.total){
        dataFactory.source.push(
          {
            ...loadFlagItem,
            network: {
              ...loadFlagItem.network,
              params: {
                ...loadFlagItem.network.params,
                page: dataFactory.page + 1,
                offset: dataFactory.source.length
              }
            }
          });
      }
      setState({
        ...dataFactory
      })
    }
  }

  /// 展示loading界面
  const uiLoadMore = (requestItem)=>{
    const { network } = requestItem;
    const { method, params } = network;
    if(!dataFactory.loadingState){
      /// 
      console.log('network:', method, 'params:', params);
      dataLoadThen(()=>NETWORK_HOST[method].call(null, params));
    }
    return <Space size="middle">
      <Spin size="large" />
    </Space>;
  }
  
  const onClick = (item)=>{
    window.location.href=item.url;
  };

  return <ConfigProvider theme={{
    token: { 
      colorBorderSecondary: Color.primary,
      colorPrimary: Color.primary 
    },
  }}>
    <div style={{ 
      maxWidth: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%' }}>
  <List
    grid={{
      gutter: 26,
      column: 3,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    style={{ padding: '14px'}}
    dataSource={watching.source}
    renderItem={(item) => (
      item.tid === -1 ? uiLoadMore(item) :
      <List.Item>
        <Card 
          hoverable
          style={{ 
            minHeight: 462.5,
            maxWidth: 400,
            fontSize: 16,
            fontWeight: 400,
            color: Color.white,
            background: '#555555'
          }}
          className='item-cardroot' 
          onClick={()=>onClick(item)}
          cover={<img style={{ height: 160 }} src={item.img ?? defaultCardIcon}/>}>
          {item.price !== 0 && item.price != '' ? <PriceIndicator>{item.price}</PriceIndicator>: ''}
          <div className="item-cardroot" style={{ height: 230 }}>
            <div className='item-title-row' style={{
              display: 'flex', 
              'justifyContent': 'space-between', 
              cursor: 'pointer'
            }}>
              <h2 style={{ display: 'flex' }}>
                {item.name}
                <img src={title_decorate} style={{ display: 'inline-block'}}/>
              </h2>
            </div>
            <div className='item-star-row'>
              <Rate disabled style={{ fontSize: 13, marginInlineEnd: 4}} defaultValue={5} />
            </div>
            <Divider style={{ margin: '14px 0' }}/>
            <div className='item-desc-row' style={{ height: 65, overflow: 'hidden' }}>
              <p>{item.desc}</p>
            </div>
          </div>
          <div className='item-btn-row' style={{ display: 'flex' }}>
            <a href={item.url} style={{ width: '100%'}}>
              <Button type="primary" style={ButtonStyle} icon={ <img src={enter_opentarget} style={{ color: Color.white }}/> }></Button>
            </a>
            <a style={{ width: '100%', marginLeft: 15 }}>
              <Button style={ButtonStyle} icon={ <img src={share_fav} style={{ color: Color.primary }}/> }></Button>  
            </a>
          </div>
        </Card>
      </List.Item>
    )}
  />
  </div>
  </ConfigProvider>
};


export default App;
