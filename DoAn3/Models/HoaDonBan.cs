namespace DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HoaDonBan")]
    public partial class HoaDonBan
    {
        [Key]
        public int MaHDB { get; set; }

        public int? MaTK { get; set; }

        [Required]
        [StringLength(50)]
        public string HoTen { get; set; }

        [StringLength(100)]
        public string DiaChi { get; set; }

        [Required]
        [StringLength(10)]
        public string SDT { get; set; }

        public byte? TrangThai { get; set; }

        public DateTime? NgayTao { get; set; }
    }
}
