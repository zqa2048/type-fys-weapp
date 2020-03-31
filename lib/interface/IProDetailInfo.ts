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
