using AutoMapper;

namespace FmaBasketball.Web
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<WebApiMapperProfile>();

                Mapper.AssertConfigurationIsValid();
            });
        }
    }
}