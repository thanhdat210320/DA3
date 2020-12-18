namespace DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("NhaCungCap")]
    public partial class NhaCungCap
    {
        [Key]
        public int MaNCC { get; set; }

        [Required]
        [StringLength(50)]
        public string TenNCC { get; set; }

        [Required]
        [StringLength(100)]
        public string DiaChi { get; set; }

        [Required]
        [StringLength(10)]
        public string SDT { get; set; }

        public DateTime? NgayTao { get; set; }
    }
}
