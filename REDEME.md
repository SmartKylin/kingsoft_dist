#### 2018.04.02
  1. 不显示已删除主机
  2. 数据导入后刷新列表

  3、修复树组件点击时展开问题

#### 2018.03.30日更新内容
  1. 主机列表状态定时获取最新实例状态
  2. 自定义模型导出筛选项未生效问题

#### 2018.03.29日更新内容
  1. 修复自定义模型添加数据时，表单报错问题

#### 2018.03.28日更新内容
   一、
   1. CMDB资产管理模块上线
   2. 提示信息显示时间加长至秒
   二、
   自定义模型数据列表添加数据，修复表单验证未通过的问题
 
### 2018.03.12更新
   1. 与部署服务器文件同步

### 2018.03.09更新
   1. fix: 1. 通过加入注册页面加载时生成的唯一key值，修复上一次的图形验证码依然可用的问题

   2. refactor: 找回密码页面获取验证码接口加入md5值

   3. refactor: 1. 加入md5加密验证算法 2.注册页面发送验证码接口加入md5

### 2018.03.08更新

   1. perf: 1. 创建角色的placeholder文案修改 2.修改账户信息页面改为不能修改手机号

   2. fix: 开通堡垒机页面在从网站的其他页面进入时，堡垒机域名前缀无法显示公司名

   3. fix(注册): 修复表单其他信息改变引起发送校验验证码接口的问题(仅当验证码改变时才发起接口请求)

   4. fix(注册): 修复注册页面先天如图形验证码,再填手机号,发送验证码按钮不可用的问题

#### 2018.02.08日更新内容

   1. 发送验证码按钮只有当图形验证码正确输入时才可用

