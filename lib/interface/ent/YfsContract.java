package com.theling.cloud.bs.server.entity.master;


import cn.afterturn.easypoi.excel.annotation.Excel;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * <p>
 * 签约合同
 * </p>
 *
 * @author cicada04
 * @since 2020-03-18
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@EqualsAndHashCode(callSuper = false)
@TableName("yfs_contract")
public class YfsContract extends Model<YfsContract> implements Serializable {

private static final long serialVersionUID=1L;

    @TableId("ID")
    @Excel(name = "", width = 50)
    private String id;

    /**
     * 合同名称
     */
    @TableField("CONTRACT_NAME")
    @Excel(name = "合同名称", width = 50)
    private String contractName;

    /**
     * 合同编号
     */
    @TableField("CONTRACT_NO")
    @Excel(name = "合同编号", width = 50)
    private String contractNo;

    /**
     * 签约时间
     */
    @TableField("SIGN_TIME")
    @Excel(name = "签约时间", width = 50)
    private LocalDateTime signTime;

    /**
     * 消费者名称
     */
    @TableField("CONSUMER")
    @Excel(name = "消费者名称", width = 50)
    private String consumer;

    /**
     * 用户ID
     */
    @TableField("CONSUMER_ID")
    @Excel(name = "用户ID", width = 50)
    private String consumerId;

    /**
     * 企业ID
     */
    @TableField("ENT_ID")
    @Excel(name = "企业ID", width = 50)
    private String entId;

    /**
     * 企业统一社会信用代码
     */
    @TableField("UNISCID")
    @Excel(name = "企业统一社会信用代码", width = 50)
    private String uniscid;

    /**
     * 预付式产品名称
     */
    @TableField("PREPAID_PROJECT")
    @Excel(name = "预付式产品名称", width = 50)
    private String prepaidProject;

    /**
     * 预付式产品编号
     */
    @TableField("PROJECT_NO")
    @Excel(name = "预付式产品编号", width = 50)
    private String projectNo;

    /**
     * 合同状态 1 正常，2 退订，3 结束，4 被中止
     */
    @TableField("CONTRACT_STATE")
    @Excel(name = "合同状态 1 正常，2 退订，3 结束，4 被中止", width = 50)
    private Integer contractState;

    /**
     * 合同起期限
     */
    @TableField("VALID_PERIOD_UP")
    @Excel(name = "合同起期限", width = 50)
    private LocalDateTime validPeriodUp;

    /**
     * 合同止期限
     */
    @TableField("VALID_PERIOD_DOWN")
    @Excel(name = "合同止期限", width = 50)
    private LocalDateTime validPeriodDown;

    /**
     * 签约金额
     */
    @TableField("CONTRACT_VALUE")
    @Excel(name = "签约金额", width = 50)
    private BigDecimal contractValue;

    /**
     * 折扣金额
     */
    @TableField("DISCOUNT_AMOUNT")
    @Excel(name = "折扣金额", width = 50)
    private BigDecimal discountAmount;

    /**
     * 合同余额
     */
    @TableField("CONTRACT_BALANCE")
    @Excel(name = "合同余额", width = 50)
    private BigDecimal contractBalance;

    /**
     * 记名形式 1 记名 2 不记名
     */
    @TableField("REGISTERED")
    @Excel(name = "记名形式 1 记名 2 不记名", width = 50)
    private Integer registered;

    /**
     * 产品形式 1 实体卡、2 电子合同、3 其他形式
     */
    @TableField("PRODUCT_FORM")
    @Excel(name = "产品形式 1 实体卡、2 电子合同、3 其他形式", width = 50)
    private Integer productForm;

    /**
     * 预付费编号（卡号）
     */
    @TableField("PREPAYMENT_NO")
    @Excel(name = "预付费编号（卡号）", width = 50)
    private String prepaymentNo;

    /**
     * 消费形式 1 计次消费、2 累计金额、3 会员凭证、4 其他形式
     */
    @TableField("CONSUME")
    @Excel(name = "消费形式 1 计次消费、2 累计金额、3 会员凭证、4 其他形式", width = 50)
    private Integer consume;

    /**
     * 使用范围 1 门店 2 互联网平台 3 其他
     */
    @TableField("USE_SCOPE")
    @Excel(name = "使用范围 1 门店 2 互联网平台 3 其他", width = 50)
    private Integer useScope;

    /**
     * 另行约定条款
     */
    @TableField("TERMS_CONDITIONS")
    @Excel(name = "另行约定条款", width = 50)
    private String termsConditions;

    /**
     * 用户签名
     */
    @TableField("SIGNATURE")
    @Excel(name = "用户签名", width = 50)
    private String signature;

    /**
     * 解密KEY
     */
    @TableField("DECRYPT_KEY")
    @Excel(name = "解密KEY", width = 50)
    private String decryptKey;

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
