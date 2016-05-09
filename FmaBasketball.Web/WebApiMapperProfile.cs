using AutoMapper;
using FmaBasketball.Data.Models;
using FmaBasketball.Web.Models;

namespace FmaBasketball.Web
{
    public class WebApiMapperProfile : Profile
    {
            protected override void Configure()
            {
                Mapper.CreateMap<RegisterTeamViewModel, Team>()
                    .ForMember(dest => dest.Division_Id, opt => opt.MapFrom(src => src.Division.Id))
                    .ForMember(dest => dest.Reason_Id, opt => opt.MapFrom(src => src.Reason.Id))
                    .ForMember(dest => dest.State, opt => opt.MapFrom(src => src.State.Id))
                    .ForMember(dest => dest.Id, opt => opt.Ignore())
                    .ForMember(dest => dest.AspNetUser_Id, opt => opt.Ignore())
                    .ForMember(dest => dest.User, opt => opt.Ignore())
                    .ForMember(dest => dest.Division, opt => opt.Ignore())
                    .ForMember(dest => dest.Reason, opt => opt.Ignore())
                    .ForMember(dest => dest.Players, opt => opt.Ignore())
                    .ForMember(dest => dest.CreatedDate, opt => opt.Ignore())
                    .ForMember(dest => dest.CreatedBy, opt => opt.Ignore())
                    .ForMember(dest => dest.UpdatedDate, opt => opt.Ignore())
                    .ForMember(dest => dest.UpdatedBy, opt => opt.Ignore());
            }

            public override string ProfileName
            {
                get { return this.GetType().Name; }
            }
    }
}