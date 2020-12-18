namespace DoAn3.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BookShopDbConText : DbContext
    {
        public BookShopDbConText()
            : base("name=BookShopDbConText")
        {
        }

        public virtual DbSet<DonHang> DonHangs { get; set; }
        public virtual DbSet<HoaDonBan> HoaDonBans { get; set; }
        public virtual DbSet<HoaDonNhap> HoaDonNhaps { get; set; }
        public virtual DbSet<LoaiSanPham> LoaiSanPhams { get; set; }
        public virtual DbSet<NhaCungCap> NhaCungCaps { get; set; }
        public virtual DbSet<SanPham> SanPhams { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<TaiKhoan> TaiKhoans { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HoaDonBan>()
                .Property(e => e.SDT)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<NhaCungCap>()
                .Property(e => e.SDT)
                .IsFixedLength()
                .IsUnicode(false);
        }
    }
}
