using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using FmaBasketball.Data.Models;

namespace FmaBasketball.Data
{
    public interface IFmaBasketballDbContext
    {
        IDbSet<Team> Persons { get; set; }

        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

        int SaveChanges();
    }
}