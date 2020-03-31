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
