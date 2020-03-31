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
