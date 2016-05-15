using System;
using Arpgo.Basketball.Data.Enums;
using Arpgo.Basketball.Data.Models;
using Arpgo.Basketball.Web.Areas.Team.Models;
using Arpgo.Core.Enums;
using Arpgo.Core.Extensions;
using AutoMapper;

namespace Arpgo.Basketball.Web
{
    public class PlayerMapperProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<PlayerViewModel, Player>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.AspNetUser_Id, opt => opt.Ignore())
                .ForMember(dest => dest.Documents, opt => opt.Ignore())
                .ForMember(dest => dest.Team, opt => opt.Ignore())
                .ForMember(dest => dest.User, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedDate, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedBy, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedDate, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedBy, opt => opt.Ignore());


            CreateMap<Player, PlayerViewModel>()
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => EnumHelper.GetDescription((PlayerStatus)src.Status)))
                .ForMember(dest => dest.State, opt => opt.MapFrom(src => !string.IsNullOrEmpty(src.State) ? EnumHelper.GetDescription((StatesAndCountriesType)Enum.Parse(typeof(StatesAndCountriesType), src.State)) : string.Empty));
            CreateMap<Player, GetPlayerViewModel>()
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => EnumHelper.GetDescription((PlayerStatus)src.Status)))
                .ForMember(dest => dest.State, opt => opt.MapFrom(src => !string.IsNullOrEmpty(src.State) ? EnumHelper.GetDescription((StatesAndCountriesType)Enum.Parse(typeof(StatesAndCountriesType), src.State)) : string.Empty));

        }
    }
}