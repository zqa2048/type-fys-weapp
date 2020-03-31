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
