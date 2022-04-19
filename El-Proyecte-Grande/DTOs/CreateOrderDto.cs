using El_Proyecte_Grande.Entities.OrderAggregate;

namespace El_Proyecte_Grande.DTOs
{
    public class CreateOrderDto
    {

        public bool SaveAdress { get; set; }
        public ShippingAdress ShippingAdress { get; set; }
    }
}
