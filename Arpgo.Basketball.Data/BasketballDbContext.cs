﻿using System;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using System.Threading;
using Arpgo.Basketball.Data.Models;
using Arpgo.Core.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Arpgo.Basketball.Data
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class BasketballDbContext : IdentityDbContext<ApplicationUser>, IBasketballDbContext
    {
        public BasketballDbContext()
            : base("DefaultConnection", false)
        {
        }

        public IDbSet<Team> Teams { get; set; }
        public IDbSet<Player> Players { get; set; }
        public IDbSet<Division> Divisions { get; set; }
        public IDbSet<DocumentType> DocumentTypes { get; set; }
        public IDbSet<Reason> Reasons { get; set; }


        public static BasketballDbContext Create()
        {
            return new BasketballDbContext();
        }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            ConfigureContext(modelBuilder);
            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {
            var modifiedEntries = ChangeTracker.Entries()
                .Where(x => x.Entity is IAuditableEntity
                    && (x.State == EntityState.Added || x.State == EntityState.Modified));

            foreach (var entry in modifiedEntries)
            {
                var entity = entry.Entity as IAuditableEntity;
                if (entity == null) continue;

                var identityName = Thread.CurrentPrincipal.Identity.Name;
                var now = DateTime.UtcNow;

                if (entry.State == EntityState.Added)
                {
                    entity.CreatedBy = identityName;
                    entity.CreatedDate = now;
                }
                else
                {
                    base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
                    base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
                }

                entity.UpdatedBy = identityName;
                entity.UpdatedDate = now;
            }

            return base.SaveChanges();
        }

        private static void ConfigureContext(DbModelBuilder modelBuilder)
        {
            var contextConfiguration = new ContextConfiguration();
            var catalog = new AssemblyCatalog(Assembly.GetExecutingAssembly());
            var container = new CompositionContainer(catalog);
            container.ComposeParts(contextConfiguration);

            foreach (var configuration in contextConfiguration.Configurations)
            {
                configuration.AddConfiguration(modelBuilder.Configurations);
            }
        }
    }
}