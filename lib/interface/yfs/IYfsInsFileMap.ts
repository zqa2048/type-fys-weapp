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
