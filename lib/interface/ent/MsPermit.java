/**
 * <p>
 * 行政许可
 * </p>
 *
 * @author cicada04
 * @since 2020-03-16
 */
public class MsPermit extends Model<MsPermit> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("ID")
    @Excel(name = "", width = 50)
    private String id;

    /**
     * 企业ID
     */
    @TableField("ENTID")
    @Excel(name = "企业ID", width = 50)
    private String entid;

    /**
     * 行政相对人名称
     */
    @TableField("XK_XDR_MC")
    @Excel(name = "行政相对人名称", width = 50)
    private String xkXdrMc;

    /**
     * 行政相对人代码_1(统一社会信用代码)
     */
    @TableField("XK_XDR_SHXYM")
    @Excel(name = "行政相对人代码_1(统一社会信用代码)", width = 50)
    private String xkXdrShxym;

    /**
     * 行政相对人代码_3(工商登记码)
     */
    @TableField("XK_XDR_GSZC")
    @Excel(name = "行政相对人代码_3(工商登记码)", width = 50)
    private String xkXdrGszc;

    /**
     * 行政相对人代码_2(组织机构代码)
     */
    @TableField("XK_XDR_ZZJG")
    @Excel(name = "行政相对人代码_2(组织机构代码)", width = 50)
    private String xkXdrZzjg;

    /**
     * 行政相对人代码_4(税务登记号)
     */
    @TableField("XK_XDR_SWDJ")
    @Excel(name = "行政相对人代码_4(税务登记号)", width = 50)
    private String xkXdrSwdj;

    /**
     * 事业单位证书号
     */
    @TableField("XK_XDR_SYDW")
    @Excel(name = "事业单位证书号", width = 50)
    private String xkXdrSydw;

    /**
     * 社会组织登记证号
     */
    @TableField("XK_XDR_SHZZ")
    @Excel(name = "社会组织登记证号", width = 50)
    private String xkXdrShzz;

    /**
     * 法定代表人(为法人和其他组织时，必填)
     */
    @TableField("XK_FRDB")
    @Excel(name = "法定代表人(为法人和其他组织时，必填)", width = 50)
    private String xkFrdb;

    /**
     * 法定代表人证件号码(为法人和其他组织时，必填)
     */
    @TableField("XK_FR_ZJHM")
    @Excel(name = "法定代表人证件号码(为法人和其他组织时，必填)", width = 50)
    private String xkFrZjhm;

    /**
     * 证件类型(为自然人时，必填)
     */
    @TableField("XK_XDR_ZJLX")
    @Excel(name = "证件类型(为自然人时，必填)", width = 50)
    private String xkXdrZjlx;

    /**
     * 证件号码(为自然人时，必填)
     */
    @TableField("XK_XDR_ZJHM")
    @Excel(name = "证件号码(为自然人时，必填)", width = 50)
    private String xkXdrZjhm;

    /**
     * 行政许可决定文书名称
     */
    @TableField("XK_XKWS")
    @Excel(name = "行政许可决定文书名称", width = 50)
    private String xkXkws;

    /**
     * 行政许可决定文书号
     */
    @TableField("XK_WSH")
    @Excel(name = "行政许可决定文书号", width = 50)
    private String xkWsh;

    /**
     * 许可类别
     */
    @TableField("XK_XKLB")
    @Excel(name = "许可类别", width = 50)
    private String xkXklb;

    /**
     * 许可证书名称
     */
    @TableField("XK_XKZS")
    @Excel(name = "许可证书名称", width = 50)
    private String xkXkzs;

    /**
     * 许可编号
     */
    @TableField("XK_XKBH")
    @Excel(name = "许可编号", width = 50)
    private String xkXkbh;

    /**
     * 许可内容
     */
    @TableField("XK_NR")
    @Excel(name = "许可内容", width = 50)
    private String xkNr;

    /**
     * 许可决定日期
     */
    @TableField("XK_JDRQ")
    @Excel(name = "许可决定日期", width = 50)
    private LocalDateTime xkJdrq;

    /**
     * 有效期自
     */
    @TableField("XK_YXQZ")
    @Excel(name = "有效期自", width = 50)
    private LocalDate xkYxqz;

    /**
     * 有效期至
     */
    @TableField("XK_YXQZI")
    @Excel(name = "有效期至", width = 50)
    private LocalDate xkYxqzi;

    /**
     * 许可机关
     */
    @TableField("XK_XKJG")
    @Excel(name = "许可机关", width = 50)
    private String xkXkjg;

    /**
     * 许可机关统一社会信用代码
     */
    @TableField("XK_XKJGDM")
    @Excel(name = "许可机关统一社会信用代码", width = 50)
    private String xkXkjgdm;

    /**
     * 当前状态
     */
    @TableField("XK_ZT")
    @Excel(name = "当前状态", width = 50)
    private String xkZt;

    /**
     * 数据来源单位
     */
    @TableField("XK_LYDW")
    @Excel(name = "数据来源单位", width = 50)
    private String xkLydw;

    /**
     * 数据来源单位统一社会信用代码
     */
    @TableField("XK_LYDWDM")
    @Excel(name = "数据来源单位统一社会信用代码", width = 50)
    private String xkLydwdm;

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
