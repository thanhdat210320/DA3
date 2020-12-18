namespace DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TaiKhoan")]
    public partial class TaiKhoan
    {
        [Key]
        public int MaTK { get; set; }

        [Column("TaiKhoan")]
        [Required]
        [StringLength(50)]
        public string TaiKhoan1 { get; set; }

        [Required]
        [StringLength(50)]
        public string MatKhau { get; set; }

        [Required]
        [StringLength(50)]
        public string HoTen { get; set; }

        [StringLength(100)]
        public string DiaChi { get; set; }

        [StringLength(100)]
        public string Email { get; set; }

        public byte? LoaiTK { get; set; }

        public DateTime? NgaySinh { get; set; }

        public DateTime? NgayTao { get; set; }
    }
}
