/**
 * <p>
 * 红名单
 * </p>
 *
 * @author cicada04
 * @since 2020-03-16
 */
public class MsRed extends Model<MsRed> implements Serializable {

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
     * 红名单名称
     */
    @TableField("HMDMC")
    @Excel(name = "红名单名称", width = 50)
    private String hmdmc;

    /**
     * 机构名称
     */
    @TableField("JGMC")
    @Excel(name = "机构名称", width = 50)
    private String jgmc;

    /**
     * 统一社会信用代码
     */
    @TableField("TYSHXYDM")
    @Excel(name = "统一社会信用代码", width = 50)
    private String tyshxydm;

    /**
     * 认定部门
     */
    @TableField("RDBM")
    @Excel(name = "认定部门", width = 50)
    private String rdbm;

    /**
     * 认定部门统一社会信用代码
     */
    @TableField("RDBMTYSHXYDM")
    @Excel(name = "认定部门统一社会信用代码", width = 50)
    private String rdbmtyshxydm;

    /**
     * 认定依据
     */
    @TableField("RDYJ")
    @Excel(name = "认定依据", width = 50)
    private String rdyj;

    /**
     * 认定日期
     */
    @TableField("RDRQ")
    @Excel(name = "认定日期", width = 50)
    private LocalDate rdrq;

    /**
     * 有效期始
     */
    @TableField("YXQS")
    @Excel(name = "有效期始", width = 50)
    private LocalDate yxqs;

    /**
     * 有效期至
     */
    @TableField("YXQZ")
    @Excel(name = "有效期至", width = 50)
    private LocalDate yxqz;

    /**
     * 列入名单事由
     */
    @TableField("LRMDSY")
    @Excel(name = "列入名单事由", width = 50)
    private String lrmdsy;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
