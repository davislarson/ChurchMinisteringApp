using System;
using System.Collections.Generic;

namespace ChurchMinisteringApp.Data;

public partial class Member
{
    public int MemberId { get; set; }

    public int AssignmentId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Calling { get; set; }

    public DateOnly Birthday { get; set; }

    public virtual ICollection<Linking> Linkings { get; set; } = new List<Linking>();

    public virtual ICollection<MinisteringEvent> MinisteringEventMembers { get; set; } = new List<MinisteringEvent>();

    public virtual ICollection<MinisteringEvent> MinisteringEventMinister1Navigations { get; set; } = new List<MinisteringEvent>();

    public virtual ICollection<MinisteringEvent> MinisteringEventMinister2Navigations { get; set; } = new List<MinisteringEvent>();
}
