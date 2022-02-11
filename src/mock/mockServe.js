import Mock from 'mockjs';
//webpack里json、图片默认对外暴露
import banner from './banner.json';
import floor from './floor.json';

//两个参数：请求地址，请求数据
Mock.mock("/mock/banner",{code:200,data:banner});//轮播图
Mock.mock("/mock/floor",{code:200,data:floor});

