using ChurchMinisteringApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChurchMinisteringApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MinisteringController : ControllerBase
{
    private readonly MinisteringContext _context;

    public MinisteringController(MinisteringContext context)
    {
        _context = context;
    }

    [HttpGet("members")]
    public async Task<ActionResult<IEnumerable<Member>>> GetMembers()
    {
        return await _context.Members.ToListAsync();
    }

    [HttpGet("events")]
    public async Task<ActionResult<IEnumerable<MinisteringEvent>>> GetEvents()
    {
        return await _context.MinisteringEvents.ToListAsync();
    }

    [HttpGet("linkings")]
    public async Task<ActionResult<IEnumerable<Linking>>> GetLinkings()
    {
        return await _context.Linkings.ToListAsync();
    }
}
