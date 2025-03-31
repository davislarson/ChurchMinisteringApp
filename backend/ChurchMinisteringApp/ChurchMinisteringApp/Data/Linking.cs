using System;
using System.Collections.Generic;

namespace ChurchMinisteringApp.Data;

public partial class Linking
{
    public int MemberId { get; set; }

    public int AssignmentId { get; set; }

    public int EventId { get; set; }

    public virtual MinisteringEvent Event { get; set; } = null!;

    public virtual Member Member { get; set; } = null!;
}
