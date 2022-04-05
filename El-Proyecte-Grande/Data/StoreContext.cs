using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using El_Proyecte_Grande.Entities;
using Microsoft.EntityFrameworkCore;

namespace El_Proyecte_Grande.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Basket> Baskets { get; set; }
    }
}