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
