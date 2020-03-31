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
