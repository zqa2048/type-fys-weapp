/**
 * <p>
 * 行政处罚
 * </p>
 *
 * @author cicada04
 * @since 2020-03-16
 */
public class MsPunish extends Model<MsPunish> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("ID")
    @Excel(name = "", width = 50)
    private String id;

    /**
     * 企业id
     */
    @TableField("ENTID")
    @Excel(name = "企业id", width = 50)
    private String entid;

    /**
     * 行政相对人名称
     */
    @TableField("CF_XDR_MC")
    @Excel(name = "行政相对人名称", width = 50)
    private String cfXdrMc;

    /**
     * 行政相对人代码_3(统一社会信用代码)
     */
    @TableField("CF_XDR_SHXYM")
    @Excel(name = "行政相对人代码_3(统一社会信用代码)", width = 50)
    private String cfXdrShxym;

    /**
     * 行政相对人代码_3(工商登记码)
     */
    @TableField("CF_XDR_GSZC")
    @Excel(name = "行政相对人代码_3(工商登记码)", width = 50)
    private String cfXdrGszc;

    /**
     * 行政相对人代码_2(组织机构代码)
     */
    @TableField("CF_XDR_ZZJG")
    @Excel(name = "行政相对人代码_2(组织机构代码)", width = 50)
    private String cfXdrZzjg;

    /**
     * 行政相对人代码_4(税务登记号)
     */
    @TableField("CF_XDR_SWDJ")
    @Excel(name = "行政相对人代码_4(税务登记号)", width = 50)
    private String cfXdrSwdj;

    /**
     * 事业单位证书号
     */
    @TableField("CF_XDR_SYDW")
    @Excel(name = "事业单位证书号", width = 50)
    private String cfXdrSydw;

    /**
     * 社会组织登记证号
     */
    @TableField("CF_XDR_SHZZ")
    @Excel(name = "社会组织登记证号", width = 50)
    private String cfXdrShzz;

    /**
     * 法定代表人
     */
    @TableField("CF_FRDB")
    @Excel(name = "法定代表人", width = 50)
    private String cfFrdb;

    /**
     * 法定代表人证件号码
     */
    @TableField("CF_FR_ZJHM")
    @Excel(name = "法定代表人证件号码", width = 50)
    private String cfFrZjhm;

    /**
     * 证件类型
     */
    @TableField("CF_XDR_ZJLX")
    @Excel(name = "证件类型", width = 50)
    private String cfXdrZjlx;

    /**
     * 证件号码
     */
    @TableField("CF_XDR_ZJHM")
    @Excel(name = "证件号码", width = 50)
    private String cfXdrZjhm;

    /**
     * 行政处罚决定书文号
     */
    @TableField("CF_WSH")
    @Excel(name = "行政处罚决定书文号", width = 50)
    private String cfWsh;

    /**
     * 违法行为类型
     */
    @TableField("CF_WFXW")
    @Excel(name = "违法行为类型", width = 50)
    private String cfWfxw;

    /**
     * 违法事实
     */
    @TableField("CF_SY")
    @Excel(name = "违法事实", width = 50)
    private String cfSy;

    /**
     * 处罚依据
     */
    @TableField("CF_YJ")
    @Excel(name = "处罚依据", width = 50)
    private String cfYj;

    /**
     * 处罚类别
     */
    @TableField("CF_CFLB")
    @Excel(name = "处罚类别", width = 50)
    private String cfCflb;

    /**
     * 处罚内容
     */
    @TableField("CF_NR")
    @Excel(name = "处罚内容", width = 50)
    private String cfNr;

    /**
     * 罚款金额（万元）
     */
    @TableField("CF_NR_FK")
    @Excel(name = "罚款金额（万元）", width = 50)
    private String cfNrFk;

    /**
     * 没收违法所得
     */
    @TableField("CF_NR_WFFF")
    @Excel(name = "没收违法所得", width = 50)
    private String cfNrWfff;

    /**
     * 暂扣或吊销证照名称及编号
     */
    @TableField("CF_NR_ZKDX")
    @Excel(name = "暂扣或吊销证照名称及编号", width = 50)
    private String cfNrZkdx;

    /**
     * 处罚决定日期
     */
    @TableField("CF_JDRQ")
    @Excel(name = "处罚决定日期", width = 50)
    private LocalDate cfJdrq;

    /**
     * 处罚有效期
     */
    @TableField("CF_YXQ")
    @Excel(name = "处罚有效期", width = 50)
    private LocalDate cfYxq;

    /**
     * 公示截止期
     */
    @TableField("CF_GSJZQ")
    @Excel(name = "公示截止期", width = 50)
    private LocalDate cfGsjzq;

    /**
     * 处罚机关
     */
    @TableField("CF_CFJG")
    @Excel(name = "处罚机关", width = 50)
    private String cfCfjg;

    /**
     * 处罚机关统一社会信用代码
     */
    @TableField("CF_CFJGDM")
    @Excel(name = "处罚机关统一社会信用代码", width = 50)
    private String cfCfjgdm;

    /**
     * 数据来源单位
     */
    @TableField("CF_SJLY")
    @Excel(name = "数据来源单位", width = 50)
    private String cfSjly;

    /**
     * 数据来源单位统一社会信用代码
     */
    @TableField("CF_SJLYDM")
    @Excel(name = "数据来源单位统一社会信用代码", width = 50)
    private String cfSjlydm;

    /**
     * 备注
     */
    @TableField("BZ")
    @Excel(name = "备注", width = 50)
    private String bz;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
