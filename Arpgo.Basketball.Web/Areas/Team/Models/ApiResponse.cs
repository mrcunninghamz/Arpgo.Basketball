namespace Arpgo.Basketball.Web.Areas.Team.Models
{
    public class ApiResponse<T>
    {
        public ApiResponse(T data)
        {
            Data = data;
        }

        public T Data { get; set; }
    }
}