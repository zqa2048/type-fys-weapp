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
