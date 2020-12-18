namespace DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SanPham")]
    public partial class SanPham
    {
        [Key]
        public int MaSP { get; set; }

        public int? MaLoai { get; set; }

        [Required]
        [StringLength(50)]
        public string TenSP { get; set; }

        [Required]
        [StringLength(50)]
        public string NhaPhatHanh { get; set; }

        [Column(TypeName = "ntext")]
        public string MoTa { get; set; }

        public int? SoLuong { get; set; }

        public int? DonGia { get; set; }

        [StringLength(255)]
        public string Anh { get; set; }

        public DateTime? NgayTao { get; set; }
    }
}
