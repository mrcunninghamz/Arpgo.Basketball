using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using FmaBasketball.Data.Models;

namespace FmaBasketball.Data
{
    public interface IFmaBasketballDbContext
    {
        IDbSet<Team> Teams { get; set; }
        IDbSet<Player> Players { get; set; }
        IDbSet<Division> Divisions { get; set; }
        IDbSet<DocumentType> DocumentTypes { get; set; } 
        IDbSet<Reason> Reasons { get; set; }

        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

        int SaveChanges();
    }
}