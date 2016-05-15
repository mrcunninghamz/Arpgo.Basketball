using System;
using Arpgo.Basketball.Data.Models;
using Arpgo.Basketball.Web.Areas.Team.Models;
using Arpgo.Basketball.Web.Models;
using Arpgo.Core.Enums;
using Arpgo.Core.Extensions;
using AutoMapper;

namespace Arpgo.Basketball.Web
{
    public class TeamMapperProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<RegisterTeamViewModel, Team>()
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

            CreateMap<GetTeamViewModel, Team>()
                    .ForMember(dest => dest.Division_Id, opt => opt.MapFrom(src => src.Division.Id))
                    .ForMember(dest => dest.Reason_Id, opt => opt.MapFrom(src => src.Reason.Id))
                    .ForMember(dest => dest.State, opt => opt.MapFrom(src => src.State.Id))
                    .ForMember(dest => dest.User, opt => opt.Ignore())
                    .ForMember(dest => dest.Division, opt => opt.Ignore())
                    .ForMember(dest => dest.Reason, opt => opt.Ignore())
                    .ForMember(dest => dest.Players, opt => opt.Ignore())
                    .ForMember(dest => dest.CreatedDate, opt => opt.Ignore())
                    .ForMember(dest => dest.CreatedBy, opt => opt.Ignore())
                    .ForMember(dest => dest.UpdatedDate, opt => opt.Ignore())
                    .ForMember(dest => dest.UpdatedBy, opt => opt.Ignore());


            CreateMap<Team, GetTeamViewModel>()
                .ForMember(dest => dest.State, opt => opt.MapFrom(src => new AngularSelectItemViewModel {Id = src.State, Label = EnumHelper.GetDescription((StatesAndCountriesType)Enum.Parse(typeof(StatesAndCountriesType), src.State)) }));

            CreateMap<Division, AngularSelectItemViewModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Label, opt => opt.MapFrom(src => src.Name));

            CreateMap<Reason, AngularSelectItemViewModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Label, opt => opt.MapFrom(src => src.Name));
        }
    }
}