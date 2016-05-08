using AutoMapper;

namespace Fma.Core.Extensions
{
    public static class AutoMapperExtensions
    {
        public static TMapTo MapTo<TMapFrom, TMapTo>(this TMapFrom mapfrom, TMapTo mapTo)
            where TMapFrom : class
            where TMapTo : class
        {
            return Mapper.Map<TMapTo>(mapfrom);
        }
    }
}