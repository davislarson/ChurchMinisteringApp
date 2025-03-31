using System;
using System.Collections.Generic;

namespace ChurchMinisteringApp.Data;

public partial class MinisteringEvent
{
    public int EventId { get; set; }

    public int? MemberId { get; set; }

    public int? AssignmentId { get; set; }

    public DateOnly? Date { get; set; }

    public int? Minister1 { get; set; }

    public int? Minister2 { get; set; }

    public string? Activity { get; set; }

    public string? Notes { get; set; }

    public string? Address { get; set; }

    public string? Time { get; set; }

    public virtual ICollection<Linking> Linkings { get; set; } = new List<Linking>();

    public virtual Member? Member { get; set; }

    public virtual Member? Minister1Navigation { get; set; }

    public virtual Member? Minister2Navigation { get; set; }
}
