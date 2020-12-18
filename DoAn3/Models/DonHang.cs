namespace DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DonHang")]
    public partial class DonHang
    {
        [Key]
        [StringLength(50)]
        public string MaDonHang { get; set; }

        public DateTime? NgayTao { get; set; }

        public double? ThanhTien { get; set; }

        [StringLength(50)]
        public string DiaChiGiaoHang { get; set; }

        [Required]
        [StringLength(50)]
        public string Sdt { get; set; }

        [StringLength(50)]
        public string TrangThai { get; set; }
    }
}
