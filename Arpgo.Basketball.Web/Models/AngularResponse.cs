namespace Arpgo.Basketball.Web.Models
{
    public class AngularResponse<T>
    {
        public T Data { get; set; }

        public AngularResponse(T data)
        {
            Data = data;
        }
    }
}