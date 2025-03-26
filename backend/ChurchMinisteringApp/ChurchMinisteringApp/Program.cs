using ChurchMinisteringApp.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<MinisteringContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("MinisteringConnection")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // 💥 This MUST be here

app.UseSwagger();
app.UseSwaggerUI();

app.Run();
