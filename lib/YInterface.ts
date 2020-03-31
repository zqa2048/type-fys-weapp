namespace Yfs{
  //yfs------------------------------------------------------------------------
/**
 * name : IYfsActivitie
 */
export interface IYfsActivitie {
    /**
     * 活动名称
     */
    activityName: string;
    /**
     * 活动类型
     */
    activityType: string;
    /**
     * 活动内容
     */
    content: string;
    /**
     * 发布企业ID
     */
    entId: string;
    /**
     * 主键
     */
    id: string;
    /**
     * 发布时间
     */
    issueTime: 1583232264000;
    /**
     * 相关联的预付式产品ID
     */
    projectId: string;
    /**
     * 开始时间
     */
    startTime: number;
    /**
     * 结束时间
     */
    stopTime: number;
}

/**
 * <p>
 * 合同信息
 * </p>
 *
 * @author zhuhongfei
 * @since 2020-03-26
 */
export interface IYfsContract {
  /**
   * 合同名称
   */
  contractName: string;

  /**
   * 合同编号
   */
  contractNo: string;

  /**
   * 签约时间
   */
  signTime: number;

  /**
   * 消费者名称
   */
  consumer: string;

  /**
   * 用户ID
   */
  consumerId: string;

  /**
   * 企业ID
   */
  entId: string;

  /**
   * 企业统一社会信用代码
   */
  uniscid: string;

  /**
   * 预付式产品名称
   */
  prepaidProject: string;

  /**
   * 预付式产品编号
   */
  projectNo: string;

  /**
   * 合同状态 1 正常，2 退订，3 结束，4 被中止
   */
  contractState: 1 | 2 | 3 | 4;

  /**
   * 合同起期限
   */

  validPeriodUp: number;

  /**
   * 合同止期限
   */
  validPeriodDown: number;

  /**
   * 签约金额
   */
  contractValue: number;

  /**
   * 折扣金额
   */
  discountAmount: number;

  /**
   * 合同余额
   */
  contractBalance: number;

  /**
   * 记名形式 1 记名 2 不记名
   */
  registered: 1 | 2;

  /**
   * 产品形式 1 实体卡、2 电子合同、3 其他形式
   */
  productForm: 1 | 2 | 3;

  /**
   * 预付费编号（卡号）
   */
  prepaymentNo: string;

  /**
   * 消费形式 1 计次消费、2 累计金额、3 会员凭证、4 其他形式
   */
  consume: 1 | 2 | 3 | 4;

  /**
   * 使用范围 1 门店 2 互联网平台 3 其他
   */
  useScope: 1 | 2 | 3;

  /**
   * 另行约定条款
   */
  termsConditions: string;

  /**
   * 用户签名
   */
  signature: string;

  /**
   * 解密KEY
   */
  decryptKey: string;
}


/**
 * <p>
 * 企业信息
 * </p>
 *
 * @author cicada04
 * @since 2020-03-16
 */
export interface IYfsEnterprise {
  /**
   * 企业id
   */
  entId: string;

  /**
   * 企业名称
   */
  entName: string;

  /**
   * 手机
   */
  mobile: string;

  /**
   * 场所面积
   */
  entArea: number | string;

  /**
   * 职工人数
   */
  numbers: number | string;

  /**
   * 行业领域
   */
  industry: string;

  /**
   * 经营范围
   */
  businessScope: string;

  /**
   * 保险额度
   */
  insLimit: number;

  /**
   * 支持额度
   */
  supportAmount: number;

  /**
   * 标题
   */
  title: string;

  /**
   * 联系人姓名
   */
  principal: string;

  /**
   * 财务信息
   */
  financialInfo: string;

  /**
   * 业务信息
   */
  businessInfo: string;

  /**
   * 银行流水
   */
  accountStatement: number | string;

  /**
   * 图标（url）
   */
  icon: string;

  /**
   * ent_basic_data数据库中企业表ID
   */
  msEntId: string;

  /**
   * 统一社会信用代码
   */
  uniscid: string;

  /**
   * 创建人ID
   */
  creUserId: string;

  /**
   * 是否认证  认证状态 1待认证，2已认证，3失效
   */
  authState: number;
  authStateText: string;

  /**
   * 创建时间
   */
  creTime: number;

  /**
   * 是否可以新增保单
   */
  validIns: boolean;
}

export type DFileType = 1 | 2;
/**
 * <p>
 * 保单与文件关联表
 * </p>
 *
 * @author cicada04
 * @since 2020-03-17
 */
export interface IYfsInsFileMap {
  /**
   * 主键
   */
  id: string;

  /**
   * 企业ID
   */
  entId: string;

  /**
   * 文件类型 1 身份证正面 2 身份证反面 ······
   */
  fileType: 1 | 2;

  /**
   * 文件ID
   */
  fileId: string;
}

/**
 * <p>
 * 保单表
 * </p>
 *
 * @author cicada04
 * @since 2020-03-16
 */
export interface IYfsInsurance {
  /**
   * 保单主键
   */
  insId: string;

  /**
   * 企业ID
   */
  msEntId: string;

  /**
   * 保单号
   */
  insNum: string;

  /**
   * 申请时间
   */
  applyTime: number;

  /**
   * 生效时间
   */
  effectiveDate: number;

  /**
   * 有效期
   */
  validity: number;

  /**
   * 保单状态  1:投保，2:核保，3:退保
   */
  status: number;

  /**
   * 申请额度
   */
  applyLimit: number | string;

  /**
   * 支持额度
   */
  supportLimit: number | string;

  /**
   * 近两年收入
   */
  income: number | string;

  /**
   * 近两年利润
   */
  profit: number | string;

  /**
   * 近两年负债
   */
  liabilities: number | string;
}


/**
 * 状态：1：未上线，2：正常，3：恶意撤单，4：结束
 */
export type DProStatue = 1 | 2 | 3 | 4;

/**
 * <p>
 * 发行计划表
 * </p>
 *
 * @author cicada04
 * @since 2020-03-14
 */
export interface IYfsProject {
  /**
   * 产品ID
   */
  proId: string;

  /**
   * 产品名称
   */
  proName: string;

  /**
   * 预付额度
   */
  prepaidLimit: number | string;

  /**
   * 起始期限
   */
  startDate: string;

  /**
   * 结束期限
   */
  endDate: string;

  /**
   * 适用门店
   */
  applyShop: string;

  /**
   * 消费形式
   */
  consume: string;
  consumeTetx: string;

  /**
   * 发行形式
   */
  issue: string;
  issueText: string;

  /**
   * 二维码
   */
  qrCode: string;

  /**
   * 门店ID
   */
  shopId: string;

  /**
   * 商户ID
   */
  entId: string;

  /**
   * 创建人
   */
  creUserId: string;

  /**
   * 创建时间
   */
  creTime: number;

  /**
   * 状态：1：未上线，2：正常，3：恶意撤单，4：结束
   */
  status: DProStatue;
  statusText: DProStatue;

  /**
   * 预付费产品编号
   */
  projectNo: string;

  /**
   * 社会统一信用代码
   */
  uniscid: string;

  /**
   * 产品摘要
   */
  proAbstract: string;

  /**
   * 行业领域
   */
  industrySector: string;

  /**
   * 记名形式 1 记名 2 不记名
   */
  registered: string;
  registeredText: string;

  /**
   * 单卡最大额度 超过五千要登记
   */
  singleCardMax: string;

  /**
   * 单卡最小额度
   */
  singleCardMin: string;

  /**
   * 使用范围 1 门店 2 互联网平台 3 其他
   */
  useScope: string;
  useScopeText: string;

  /**
   * 手机号
   */
  mobile: string;
  /**
   * 合同个数
   */
  contractNum: number;
}


/**
 * <p>
 * 产品表与门店关联表
 * </p>
 *
 * @author cicada04
 * @since 2020-03-18
 */
export interface IYfsProShopMap {
  /**
   * 主键
   */
  id: string;

  /**
   * 产品ID
   */
  proId: string;

  /**
   * 门店ID
   */
  shopId: string;
}


/**
 * <p>
 * 门店表
 * </p>
 *
 * @author cicada04
 * @since 2020-03-12
 */
export interface IYfsShop {
  /**
   * 门店ID
   */
  shopId: string;

  /**
   * 商户ID
   */
  entId: string;

  /**
   * 门店名称
   */
  shopName: string;

  /**
   * 联系方式
   */
  phone: string;

  /**
   * 门店额度
   */
  account: number;

  /**
   * 门店所属区
   */
  region: string;

  /**
   * 门店所属街道
   */
  street: string;

  /**
   * 门店详细地址
   */
  address: string;

  /**
   * 门店公众号
   */
  officialAccount: string;
  /**
   * 距离
   */
  distance: number;
}

//iProDetailInfo---------------------------------------------------------
export interface IProDetailInfo {
  /**
   * 产品名称
   */
  proId: String;

  /**
   * 产品名称
   */
  proName: String;

  /**
   * 预防额度
   */
  preventAccount: number;

  /**
   * 发行期限开始时间
   */
  startDat: number;
  /**
   * 发行期限结束时间
   */
  endDay: number;

  /**
   * 适用门店
   */
  applyStores: String;

  /**
   * 消费形式
   */
  consum: String;

  /**
   * 发行形式
   */
  issue: String;

  /**
   * 门店ID
   */
  storeId: String;

  /**
   * 二维码
   */
  qrCode: String;

  /**
   * 商户ID
   */
  firmId: String;
}

//weixinUserInfo ---------------------------------------------------------
/** 性别的合法值 */
export interface gender {
  /** 未知 */
  0:number;
  /** 男 */
  1:number;
  /** 女 */
  2:number;
}

export interface IWeixinUserInfo {
  userInfo: {
    /** 昵称 */
    nickName: string;
    /** 头像 */
    avatarUrl: string;
    /** 性别 */
    gender: keyof gender;
    /** 省份，如：`Yunnan` */
    province: string;
    /** 城市，如：`Dalian` */
    city: string;
    /** 国家，如：`China` */
    country: string;
  };
  /** 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 */
  rawData: string;
  /** 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 */
  signature: string;
  /** 包括敏感数据在内的完整用户信息的加密数据 */
  encryptedData: string;
  /** 加密算法的初始向量 */
  iv: string;
  /* 用户信息的调用状态 */
  errMsg: string;
}


//ent------------------------------------------------
/**
 * <p>
 * 企业表
 * </p>
 *
 * @author cicada04
 * @since 2020-03-13
 */
export interface IMsEnterprise {
  id: string;

  /**
   * 统一社会信用代码
   */
  uniscid: string;

  /**
   * 企业名称
   */
  entname: string;

  /**
   * 营业状态
   */
  operstatus: string;

  /**
   * 住所
   */
  dom: string;

  /**
   * 注册资本
   */
  regcap: number;

  /**
   * 实缴资本(实收资本)
   */
  realcapital: number;

  /**
   * 主体类型
   */
  enttype: string;

  /**
   * 主体类型（中文名称）
   */
  enttypeCn: string;

  /**
   * 登记时间
   */
  zrrYwBdcdjDjsj: number;

  /**
   * 行业代码
   */
  industryco: string;

  /**
   * 行业代码名称
   */
  industryphy: string;

  /**
   * 经营范围
   */
  opscope: string;

  /**
   * 职工人数
   */
  empnum: number;

  /**
   * 参保人数
   */
  jgShzrFrjfCbrs: number;

  /**
   * 企业注册号
   */
  regno: string;

  /**
   * 成立日期
   */
  estdate: number;

  /**
   * 登记机关
   */
  regorg: string;

  /**
   * 登记机关
   */
  regorgCn: string;

  /**
   * 业务范围类型
   */
  opscotype: string;

  /**
   * 业务范围类型（中文名称）
   */
  opscotypeCn: string;

  /**
   * 经营期限自
   */
  opfrom: number;

  /**
   * 经营期限至
   */
  opto: number;

  /**
   * 登记状态
   */
  regstate: string;

  /**
   * 登记状态（中文名称）
   */
  regstateCn: string;

  /**
   * 住所所在行政区划
   */
  domdistrict: string;

  /**
   * 注册资本(金)币种
   */
  regcapcur: string;

  /**
   * 注册资本(金)币种（中文名称）
   */
  regcapcurCn: string;

  /**
   * 注册资本(金)折万美元
   */
  regcapusd: number;

  /**
   * 实收资本
   */
  reccap: number;

  /**
   * 实收资本折万美元
   */
  reccapusd: number;

  /**
   * 国别(地区)
   */
  country: string;

  /**
   * 是否城镇
   */
  town: string;

  /**
   * 法定代表人
   */
  name: string;

  /**
   * 统计企业类型
   */
  reporttype: string;

  /**
   * 核准日期
   */
  apprdate: number;
}

}

declare module "Yfs" {
  export = Yfs
}