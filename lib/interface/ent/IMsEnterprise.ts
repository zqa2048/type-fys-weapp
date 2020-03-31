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
