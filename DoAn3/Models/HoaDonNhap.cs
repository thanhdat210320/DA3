namespace DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HoaDonNhap")]
    public partial class HoaDonNhap
    {
        [Key]
        public int MaHDN { get; set; }

        public int? MaTK { get; set; }

        public int? MaNCC { get; set; }

        public DateTime? NgayTao { get; set; }
    }
}
