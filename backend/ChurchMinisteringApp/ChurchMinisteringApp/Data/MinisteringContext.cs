using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ChurchMinisteringApp.Data;

public partial class MinisteringContext : DbContext
{
    public MinisteringContext()
    {
    }

    public MinisteringContext(DbContextOptions<MinisteringContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Linking> Linkings { get; set; }

    public virtual DbSet<Member> Members { get; set; }

    public virtual DbSet<MinisteringEvent> MinisteringEvents { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=ministering.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Linking>(entity =>
        {
            entity.HasKey(e => new { e.MemberId, e.AssignmentId, e.EventId });

            entity.ToTable("Linking");

            entity.Property(e => e.MemberId).HasColumnName("memberID");
            entity.Property(e => e.AssignmentId).HasColumnName("assignmentID");
            entity.Property(e => e.EventId).HasColumnName("eventID");

            entity.HasOne(d => d.Event).WithMany(p => p.Linkings)
                .HasForeignKey(d => d.EventId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.Member).WithMany(p => p.Linkings)
                .HasForeignKey(d => d.MemberId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Member>(entity =>
        {
            entity.Property(e => e.MemberId)
                .ValueGeneratedNever()
                .HasColumnName("memberID");
            entity.Property(e => e.AssignmentId).HasColumnName("assignmentID");
            entity.Property(e => e.Birthday).HasColumnName("birthday");
            entity.Property(e => e.Calling).HasColumnName("calling");
            entity.Property(e => e.FirstName).HasColumnName("first_name");
            entity.Property(e => e.LastName).HasColumnName("last_name");
        });

        modelBuilder.Entity<MinisteringEvent>(entity =>
        {
            entity.HasKey(e => e.EventId);

            entity.ToTable("MinisteringEvent");

            entity.Property(e => e.EventId)
                .ValueGeneratedNever()
                .HasColumnName("eventID");
            entity.Property(e => e.Activity).HasColumnName("activity");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.AssignmentId).HasColumnName("assignmentID");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.MemberId).HasColumnName("memberID");
            entity.Property(e => e.Minister1).HasColumnName("minister1");
            entity.Property(e => e.Minister2).HasColumnName("minister2");
            entity.Property(e => e.Notes).HasColumnName("notes");
            entity.Property(e => e.Time).HasColumnName("time");

            entity.HasOne(d => d.Member).WithMany(p => p.MinisteringEventMembers).HasForeignKey(d => d.MemberId);

            entity.HasOne(d => d.Minister1Navigation).WithMany(p => p.MinisteringEventMinister1Navigations).HasForeignKey(d => d.Minister1);

            entity.HasOne(d => d.Minister2Navigation).WithMany(p => p.MinisteringEventMinister2Navigations).HasForeignKey(d => d.Minister2);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
