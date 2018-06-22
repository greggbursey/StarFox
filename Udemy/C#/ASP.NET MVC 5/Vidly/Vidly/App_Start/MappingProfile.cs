using AutoMapper;
using Vidly.Dtos;
using Vidly.Models;

namespace Vidly.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            var config = new MapperConfiguration(cfg => {
                //cfg.CreateMap<Source, Dest>();
                cfg.CreateMap<Customer, CustomerDto>();
                cfg.CreateMap<MembershipType, MembershipTypeDto>();
                cfg.CreateMap<Genre, GenreDto>();
            });

            IMapper mapper = config.CreateMapper();
            //var source = new Source();
            var customer = new Customer();
            //var dest = mapper.Map<Source, Dest>(source);
            var customerDto = mapper.Map<Customer, CustomerDto>(customer);

            var membershipType = new MembershipType();
            var membershipTypeDto = mapper.Map<MembershipType, MembershipTypeDto>(membershipType);

            var genre = new Genre();
            var genreDto = mapper.Map<Genre, GenreDto>(genre);
        }
    }
}