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
