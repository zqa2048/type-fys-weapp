/** 性别的合法值 */
export interface gender {
  /** 未知 */
  0;
  /** 男 */
  1;
  /** 女 */
  2;
}

export interface IWeixinUserInfo {
  userInfo: {
    /** 昵称 */
    nickName: string;
    /** 头像 */
    avatarUrl: string;
    /** 性别 */
    gender: keyof gender;
    /** 省份，如：`Yunnan` */
    province: string;
    /** 城市，如：`Dalian` */
    city: string;
    /** 国家，如：`China` */
    country: string;
  };
  /** 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 */
  rawData: string;
  /** 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 */
  signature: string;
  /** 包括敏感数据在内的完整用户信息的加密数据 */
  encryptedData: string;
  /** 加密算法的初始向量 */
  iv: string;
  /* 用户信息的调用状态 */
  errMsg: string;
}
