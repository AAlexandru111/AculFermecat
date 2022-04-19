using Microsoft.EntityFrameworkCore;

namespace El_Proyecte_Grande.Entities.OrderAggregate
{

    [Owned]
    public class ProductItemOrdered
    {

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string PictureUrl { get; set; }
    }
}
