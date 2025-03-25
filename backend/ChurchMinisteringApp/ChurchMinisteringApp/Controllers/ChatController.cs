namespace ChurchMinisteringApp.Controllers
{
    using ChurchMinisteringApp.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;
    using System.Net.Http.Headers;
    using System.Text;
    using System.Text.Json;

    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly string _apiKey;

        public ChatController(IHttpClientFactory clientFactory, IOptions<OpenAISettings> settings)
        {
            _clientFactory = clientFactory;
            _apiKey = settings.Value.ApiKey;
        }
        [HttpGet("ping")]
        public IActionResult Ping()
        {
            return Ok("pong");
        }
        [HttpPost]
        public async Task<ActionResult<ChatResponse>> Post([FromBody] ChatRequest request)
        {
            Console.WriteLine("ChatController POST hit!");
            var client = _clientFactory.CreateClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);

            var requestBody = new
            {
                model = "gpt-4", // or gpt-3.5-turbo
                messages = new[]
                {
                new { role = "system", content = "You are a helpful ministering assistant for members of The Church of Jesus Christ of Latter-day Saints." },
                new { role = "user", content = request.Message }
            }
            };

            var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");

            var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);

            if (!response.IsSuccessStatusCode)
            {
                return StatusCode((int)response.StatusCode, new ChatResponse { Reply = "Sorry, I couldn't generate a response." });
            }

            using var stream = await response.Content.ReadAsStreamAsync();
            using var doc = await JsonDocument.ParseAsync(stream);
            var reply = doc.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();

            return Ok(new ChatResponse { Reply = reply });
        }
    }

}
