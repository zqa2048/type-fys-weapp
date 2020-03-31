// 关于model的一些方法
import { ITablePage } from "./IZlData";

export interface IZlModelBase<T> {
  // 表格数据
  tableData: ITablePage<T>;
  // 表格配置
  tableConfig: {
    pagenum: 0;
  };
}
